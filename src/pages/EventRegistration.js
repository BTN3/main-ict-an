import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Modal, Spinner } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import CarouselComponent from './CarouselComponent';
// import socketClient  from "socket.io-client";
import { useNavigate } from 'react-router-dom';
import '../App.css';
import applyPhoto from '../assets/media/horizonti_velik_cropped.png'
import sazetakUputa from '../assets/documents/Uputa_sazetak.pdf'
import simpozijUputa from '../assets/documents/Uputa_simpozij.pdf'
import Cookies from 'js-cookie';

//chat gpt
const getFileDetails = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const buffer = event.target.result;
      const name = file.name;
      const type = file.type;
      const content = btoa(
        new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      resolve({ name, type, content });
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsArrayBuffer(file);
  });
};
//moj i dorin kod
// const getFileDetails = async (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const buffer = event.target.result;
//       console.log(buffer);
//       const name = file.name;
//       const type = file.type;
//       resolve({ name, type, content: buffer });
//     };
//     reader.onerror = (error) => {
//       reject(error);
//     };
//     reader.readAsArrayBuffer(file);
//   });
// };










//dorin i moj kod - taj radi za aktivnog
// const sendRequest = async (url, data) => {
//   try {
//     console.log(data.uploadedFiles[0].file.content)
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (response == undefined) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     return response.json();
//   } catch (error) {
//     console.error('Error during the request:', error);

//     // Log the response content if available
//     const responseBody = await (response ? response.text() : '');
//     console.error('Response content:', responseBody);

//     throw error;
//   }
// };

//CHAT GPT
const sendRequest = async (url, data) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    // Provjera tipa sudionika - ako je pasivni, uklonimo uploadedFiles iz tijela zahtjeva
    if (data.participantType === 'Pasivni sudionik') {
      delete requestOptions.body.uploadedFiles;
    }

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error during the request:', error);

    const responseBody = await response?.text();
    console.error('Response content:', responseBody);

    throw error;
  }
};


export default function EventRegistration({ role }) {
  
  let Psiholog_ID = nanoid(10);
  let tokenGenerated = nanoid(15);
  let validates = true;
  const applicationDate = new Date().toLocaleString();
  const navigate = useNavigate();

  const [psiholog, setPsiholog] = useState({
    Psiholog_ID: Psiholog_ID,
    tokenGenerated: tokenGenerated,
    tokenInserted: null,
    ime: '',
    prezime: '',
    email: '',
    date: '',
    participantType: '',
    uploadedFiles: [],
    Sazetci_IDs: [],
    oblikSudjelovanja: [],
    role: 'user',
  });
  const odborMails = process.env.REACT_APP_ODBOR_MAILS.split(',').map((email) => email.trim());
  const [show, setShow] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [isWaitingForConfirmation, setIsWaitingForConfirmation] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);


  const navigateToLectureSelection = () => {
    navigate('../');
  };

  // const handleInputIme = (e) => {
  //   var ime = e.target.value.trim()
  //    ime = ime.normalize('NFKD').replace(/[^\w\s.-_\/]/g, '')
  //   setPsiholog({ ...psiholog, ime: ime });
  // };

  // const handleInputIme = (e) => {
  //   let ime = e.target.value.trim();
    
  //   if (!ime) {
  //     console.log('Molimo unesite ime.');
  //     return;
  //   }
  
  //   // Provjera sadrži li unos brojeve ili posebne znakove
  //   if (/[\d!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]/.test(ime)) {
  //     alert('Unos ne smije sadržavati brojeve ili posebne znakove.');
  //     return;
  //   }
  
  //   // Ako je sve u redu, pretvara prvo slovo u veliko i postavlja stanje
  //   ime = ime.charAt(0).toUpperCase() + ime.slice(1).toLowerCase();
  //   setPsiholog({ ...psiholog, ime: ime });
  // };

  const handleInputIme = (e) => {
    var ime = e.target.value.trim().normalize('NFD').replace(/[^\w\s.-_\/]/g, '');
    
    if (!ime) {
      console.log('Molimo unesite ime.');
      return;
    }
  
    // Provjera sadrži li unos brojeve ili posebne znakove
    if (/[\d!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]/.test(ime)) {
      alert('Unos ne smije sadržavati brojeve ili posebne znakove.');
      return;
    }
  
    // Razdvajamo riječi i pretvaramo svako prvo slovo u veliko
    ime = ime
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    
    setPsiholog({ ...psiholog, ime: ime });
  };
  const handleToken = (e) => {
    const targetID = e.target.value;
    const savedID = localStorage.getItem(psiholog.ime + psiholog.prezime + psiholog.email);
    setPsiholog({ ...psiholog, tokenInserted: e.target.value });
  };

  // const handleInputPrezime = (e) => {
  //   var prezime = e.target.value.trim()
  //    prezime = prezime.normalize('NFKD').replace(/[^\w\s.-_\/]/g, '')
  //   setPsiholog({ ...psiholog, prezime: prezime });
  // };
  // const handleInputPrezime = (e) => {
  //   let prezime = e.target.value.trim();
    
  //   if (!prezime) {
  //     console.log('Molimo unesite prezime.');
  //     return;
  //   }
  
  //   // Provjera sadrži li unos brojeve ili posebne znakove
  //   if (/[\d!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]/.test(prezime)) {
  //     alert('Unos ne smije sadržavati brojeve ili posebne znakove.');
  //     return;
  //   }
  
  //   // Ako je sve u redu, pretvara prvo slovo u veliko i postavlja stanje
  //   prezime = prezime.charAt(0).toUpperCase() + prezime.slice(1).toLowerCase();
  //   setPsiholog({ ...psiholog, prezime: prezime });
  // };
  const handleInputPrezime = (e) => {
    var prezime = e.target.value.trim().normalize('NFKD').replace(/[^\w\s.-_\/]/g, '');
    
    if (!prezime) {
      console.log('Molimo unesite prezime.');
      return;
    }
  
    // Provjera sadrži li unos brojeve ili neželjene znakove
    if (!/^[a-zA-Z\u00C0-\u017F\s-]*$/.test(prezime)) {
      alert('Unos ne smije sadržavati brojeve ili neželjene znakove osim slova, dijakritičkih znakova, razmaka i znaka "-".');
      return;
    }
  
    // Razdvajamo riječi i pretvaramo svako prvo slovo u veliko
    prezime = prezime
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    
    setPsiholog({ ...psiholog, prezime: prezime });
  };
  
  const handleInputEmail = (e) => {
    const email = e.target.value.trim();
    let role = 'user';

    if (email === process.env.REACT_APP_ADMIN_MAIL) {
      role = 'admin';
    } else if (odborMails.includes(email)) {
      role = 'odbor';
    }

    localStorage.setItem('userRole', role);
    setPsiholog({ ...psiholog, email, role });
  };
//moj kod
  // const handleParticipantType = (type) => {
  //   setPsiholog({ ...psiholog, participantType: type, date: applicationDate });
  //   setCurrentStep(1);
  // };
  //predloženi kod chat gpt
  const handleParticipantType = (type) => {
    const updatedPsiholog = {
      ...psiholog,
      participantType: type,
      date: applicationDate,
    };
  
    if (type === 'Pasivni sudionik') {
      // Prilagodi za pasivne sudionike
      const { Psiholog_ID, tokenGenerated, ime, prezime, email } = updatedPsiholog;
      setPsiholog({
        Psiholog_ID,
        tokenGenerated,
        tokenInserted: null,
        ime,
        prezime,
        email,
        date: applicationDate,
        participantType: type,
        uploadedFiles: [], // Postavljamo prazan niz za datoteke za pasivne sudionike
        Sazetci_IDs: [], // Prazan niz za Sazetci_IDs
        oblikSudjelovanja: [], // Prazan niz za oblikSudjelovanja
        role: 'user', // Ovo se može prilagoditi ako je potrebno
      });
    } else {
      // Ostaje isto za aktivne sudionike
      setPsiholog(updatedPsiholog);
    }
  
    setCurrentStep(1);
  };
  

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files);
    const oblikSudjelovanja = newFiles.map(() => '');

    setPsiholog((prevPsiholog) => ({
      ...prevPsiholog,
      uploadedFiles: [...prevPsiholog.uploadedFiles, ...newFiles],
      Sazetci_IDs: [...prevPsiholog.Sazetci_IDs, ...newFiles.map(() => nanoid(5))],
      oblikSudjelovanja: [...prevPsiholog.oblikSudjelovanja, ...oblikSudjelovanja],
    }));
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...psiholog.uploadedFiles];
    updatedFiles.splice(index, 1);

    const updatedSazetciIDs = [...psiholog.Sazetci_IDs];
    updatedSazetciIDs.splice(index, 1);

    const updatedOblikSudjelovanja = [...psiholog.oblikSudjelovanja];
    updatedOblikSudjelovanja.splice(index, 1);

    setPsiholog((prevPsiholog) => ({
      ...prevPsiholog,
      uploadedFiles: updatedFiles,
      Sazetci_IDs: updatedSazetciIDs,
      oblikSudjelovanja: updatedOblikSudjelovanja,
    }));
  };

  const submitValues = async (e) => {
    e.preventDefault();
    setButtonDisabled(true)
    localStorage.clear();
    localStorage.setItem('token', psiholog.Psiholog_ID + "+" + psiholog.role);
   const url= process.env.REACT_APP_HOSTNAME_BACKEND+'/api/data'
    // if (psiholog.tokenInserted == psiholog.tokenGenerated) {
    //   try {
    //     //chatgpt
    //     const fileDetailsPromises = psiholog.uploadedFiles.map(async (file) => {
    //       const fileDetails = await getFileDetails(file);
    //       return {
    //         file: fileDetails,
    //       };
    //     });
        
    //     const filesWithDetails = await Promise.all(fileDetailsPromises);
    //     console.log("uploaded files",filesWithDetails)
    if (psiholog.tokenInserted === psiholog.tokenGenerated) {
      try {
        var filesWithDetails;
  
        if (psiholog.participantType === 'Aktivni sudionik') {
          // Prilagodba za aktivnog sudionika
          const fileDetailsPromises = psiholog.uploadedFiles.map(async (file) => {
            const fileDetails = await getFileDetails(file);
            return {file: fileDetails,
            };
          });
  
           filesWithDetails = await Promise.all(fileDetailsPromises);
        }  
       
        try{

        
          const response = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/data', {  //https://horizonti-snage.azurewebsites.net/insertData
            ...psiholog,
            uploadedFiles: filesWithDetails,
          });
  
          const response2 = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/email', {//tu ide e-mail verification
          ...psiholog,
          uploadedFiles: filesWithDetails,
        });
      }catch (error) {
      // TypeError: Failed to fetch
      alert("Server trenutno nije u funkciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.")
      console.log('There was an error', error);
    }

     
        setIsWaitingForConfirmation(false);
        alert('Uspješno pospremljeni prijavni podaci!');
        setButtonDisabled(false)
        navigateToLectureSelection();
      } catch (error) {
        console.error('Error while inserting data:', error);
      }
    } else {
      alert('Uneseni token se ne podudara s poslanim na e-mail. Molimo provjerite unesene podatke');
    
    }
  };
  // const submitValues = async (e) => {
  //   e.preventDefault();
  //   setButtonDisabled(true);
  //   localStorage.clear();
  //   localStorage.setItem('token', psiholog.Psiholog_ID + '+' + psiholog.role);
  
  //   if (psiholog.tokenInserted === psiholog.tokenGenerated) {
  //     try {
  //       const fileDetailsPromises = psiholog.uploadedFiles.map(async (file) => {
  //         const fileDetails = await getFileDetails(file);
  //         return fileDetails; // Promijenjeno: Vratite samo informacije o datotekama
  //       });
  
  //       const filesWithDetails = await Promise.all(fileDetailsPromises);
  
  //       // Slanje podataka na server
  //       try {
  //         const response = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND + '/api/data', {
  //           ...psiholog,
  //           uploadedFiles: filesWithDetails, // Poslati content datoteka
  //         });
  
  //         const response2 = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND + '/api/email', {
  //           ...psiholog,
  //           uploadedFiles: filesWithDetails, // Poslati content datoteka
  //         });
  
  //         setIsWaitingForConfirmation(false);
  //         alert('Uspješno pospremljeni prijavni podaci!');
  //         setButtonDisabled(false);
  //         navigateToLectureSelection();
  //       } catch (error) {
  //         alert('Server trenutno nije u funkciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.');
  //         console.error('There was an error:', error);
  //       }
  //     } catch (error) {
  //       console.error('Error while inserting data:', error);
  //     }
  //   } else {
  //     alert('Uneseni token se ne podudara s poslanim na e-mail. Molimo provjerite unesene podatke');
  //   }
  // };
  
  const sendEmail = async (e) => {
    e.preventDefault();

    if (!psiholog.participantType) {
      alert('Molimo vas odaberite tip sudionika.');
      return;
    }
      console.log("l"+psiholog);
    if (
      (psiholog.participantType === 'Aktivni sudionik' && psiholog.uploadedFiles.length === 0) ||
      !psiholog.ime ||
      !psiholog.prezime ||
      !psiholog.email
    ) {
      alert('Molimo vas da ispunite sva polja.');
      return;
    }

    try {
      const fileDetailsPromises = psiholog.uploadedFiles.map(async (file) => {
        const fileDetails = await getFileDetails(file);
        return {
          file: fileDetails,
        };
      });
      const filesWithDetails = await Promise.all(fileDetailsPromises);

      localStorage.setItem(JSON.stringify(psiholog.Psiholog_ID), psiholog.ime + psiholog.prezime + psiholog.email);
 
      try{ 
      const response = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/emailVerification', {//tu ide e-mail verification
        ...psiholog,
        uploadedFiles: filesWithDetails,
      });
    }catch (error) {
      // TypeError: Failed to fetch
      alert("Server trenutno nije u funkciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.")
      console.log('There was an error', error);
    }
    
      setCurrentStep(2);
    } catch (error) {
      console.error('Error while sending email:', error);
    }
  };

  

  return (
    <>
      <CarouselComponent />
      <Container fluid>
        <Row>
          <Modal show={show} onHide={() => setShow(false)} dialogClassName="custom-modal">
            <Modal.Header closeButton>
              
              <Modal.Title style={{ fontSize: '14px' }}>Prijava na konferenciju 'Horizonti snage'</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img src={applyPhoto} alt='photo' style={{width:'100%', height:'100%', position:'relative'}}/>
              {currentStep === 0 && <Step1 chooseParticipantType={handleParticipantType} />}
              
              
              {currentStep === 1 && (
                <Step2
                  participantType={psiholog.participantType}
                  uploadFile={handleFileUpload}
                  handleInputIme={handleInputIme}
                  handleInputPrezime={handleInputPrezime}
                  handleInputEmail={handleInputEmail}
                  uploadedFiles={psiholog.uploadedFiles}
                  removeFile={handleRemoveFile}
                  oblikSudjelovanja={psiholog.oblikSudjelovanja}
                  handleOblikSudjelovanjaChange={(index, value) => {
                    const updatedOblikSudjelovanja = [...psiholog.oblikSudjelovanja];
                    updatedOblikSudjelovanja[index] = value;
                    setPsiholog({ ...psiholog, oblikSudjelovanja: updatedOblikSudjelovanja });
                    //setCurrentStep(2)
                  }}
                
                />
              )}
               {currentStep === 2 && (
                <Step3
                handleToken={handleToken}
          
                />
              )}
              {currentStep === 3 && (
                <div className="spinner-container">
                  <Spinner animation="border" role="status">
                    <span className="visually-impaired">Loading...</span>
                  </Spinner>
                </div>
              )}
               {currentStep === 4 && (
                <div className="spinner-container">
                  <Spinner animation="border" role="status">
                    <span className="visually-impaired">Loading...</span>
                  </Spinner>
                </div>
              )}
            </Modal.Body>
            {currentStep === 2 && (
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                  Zatvori
                </Button>
                <Button variant="outline-dark" onClick={submitValues} disabled={isButtonDisabled}>
                  Pošalji
                </Button>
              </Modal.Footer>
            )}
            {currentStep === 1 && (
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                  Zatvori
                </Button>
                <Button variant="outline-dark" onClick={sendEmail}>
                  Sljedeće
                </Button>
              </Modal.Footer>
            )}
          </Modal>
        </Row>
      </Container>
    </>
  );
}

function Step1({ chooseParticipantType }) {
  return (
    <Container className="text-center mt-5">
      {/* <h6 color='dark-blue'>Odaberi tip sudjelovanja na konferenciji 'Horizonti snage': </h6> */}
      <h5 style={{color:'purple'}}>Prijavite se na 2. konferenciju 'Horizonti snage' </h5>
      <p style={{color:'red'}}>Vrijeme za aktivnu prijavu je isteklo 15. siječnja 2024. </p>
      {/* ovo ovdje ćeš zablokirati ispod - 16.1.2024. */}
      {/* <Button onClick={() => chooseParticipantType('Aktivni sudionik')} variant="outline-dark">
        Aktivni sudionik
      </Button>
      <hr /> */}
      {/* <Button onClick={() => chooseParticipantType('Pasivni sudionik')} variant="outline-dark">
        PRIJAVA
      </Button> */}
      <div><em style={{color:'darkblue', fontSize:'16pt'}}>Prijave za 2. konferenciju "Horizonti snage" su završene. Svi prijavljeni još se mogu prijaviti na aktivnosti s ograničenim brojem sudionika. S veseljem vas očekujemo u što većem broju!</em></div>
    </Container>
  );
}

function Step2({
  participantType,
  tokenGenerated,
  uploadFile,
  handleInputIme,
  handleInputPrezime,
  handleInputEmail,
  uploadedFiles,
  removeFile,
  oblikSudjelovanja,
  handleOblikSudjelovanjaChange,
}) {
  return (
    <div>
      <h3>Unesite detalje:</h3>
      <Form.Group>
        <Form.Label htmlFor="ime">Ime:</Form.Label>
        <Form.Control id="ime" name="ime" type="text" placeholder="Unesi ime" onChange={handleInputIme} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="prezime">Prezime:</Form.Label>
        <Form.Control id="prezime" type="text" placeholder="Unesi prezime" onChange={handleInputPrezime} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control id="email" type="email" placeholder="Unesi email" onChange={handleInputEmail} />
      </Form.Group>
      {participantType === 'Aktivni sudionik' && (
        <Form.Group>
          <div><a href={sazetakUputa}>Uputa za prijavu sažetaka</a></div>
          <div><a href={simpozijUputa}>Uputa za prijavu simpozija</a></div>
          <Form.Label htmlFor="sazetci">Sažetci:</Form.Label>
          <Form.Control id="sazetci" type="file" accept=".docx, .pdf, .xlsx"  multiple
  onChange={(e) => {
    // Dodajte ovdje console.log kako biste provjerili koje datoteke se dobivaju
    console.log("Selected files:", e.target.files); 
    uploadFile(e);
  }} />
        </Form.Group>
      )}
      {uploadedFiles.length > 0 && (
        <div>
          <h5>Učitane datoteke:</h5>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                <span>{file.name}</span>
                <Form.Group>
                  <Form.Label>Oblik sudjelovanja:</Form.Label>
                  <div>
                    {/* Radio buttons for 'Oblik sudjelovanja' */}
                    {/* <Form.Check
                      type="radio"
                      name={`oblikSudjelovanja_${index}`}
                      id={`oblikSudjelovanja_${index}_predavanje`}
                      label="Predavanje"
                      value="Predavanje"
                      checked={oblikSudjelovanja[index] === 'Predavanje'}
                      onChange={(e) => handleOblikSudjelovanjaChange(index, e.target.value)}
                    /> */}

                      <Form.Check
                      type="radio"
                      name={`oblikSudjelovanja_${index}`}
                      id={`oblikSudjelovanja_${index}_poster`}
                      label="Poster"
                      value="Poster"
                      checked={oblikSudjelovanja[index] === 'Poster'}
                      onChange={(e) => handleOblikSudjelovanjaChange(index, e.target.value)}
                    />
                      <Form.Check
                      type="radio"
                      name={`oblikSudjelovanja_${index}`}
                      id={`oblikSudjelovanja_${index}_primjerdobreprakse`}
                      label="Primjer dobre prakse"
                      value="Primjer dobre prakse"
                      checked={oblikSudjelovanja[index] === 'Primjer dobre prakse'}
                      onChange={(e) => handleOblikSudjelovanjaChange(index, e.target.value)}
                    />

                      <Form.Check
                      type="radio"
                      name={`oblikSudjelovanja_${index}`}
                      id={`oblikSudjelovanja_${index}_znanstvenirad`}
                      label="Znanstveni/stručni rad"
                      value="Znanstveni/stručni rad"
                      checked={oblikSudjelovanja[index] === 'Znanstveni/stručni rad'}
                      onChange={(e) => handleOblikSudjelovanjaChange(index, e.target.value)}
                    />
                      <Form.Check
                      type="radio"
                      name={`oblikSudjelovanja_${index}`}
                      id={`oblikSudjelovanja_${index}_radionica`}
                      label="Radionica"
                      value="Radionica"
                      checked={oblikSudjelovanja[index] === 'Radionica'}
                      onChange={(e) => handleOblikSudjelovanjaChange(index, e.target.value)}
                    />

<Form.Check
                      type="radio"
                      name={`oblikSudjelovanja_${index}`}
                      id={`oblikSudjelovanja_${index}_simpozij`}
                      label="Simpozij"
                      value="Simpozij"
                      checked={oblikSudjelovanja[index] === 'Simpozij'}
                      onChange={(e) => handleOblikSudjelovanjaChange(index, e.target.value)}
                    />
<Form.Check
                      type="radio"
                      name={`oblikSudjelovanja_${index}`}
                      id={`oblikSudjelovanja_${index}_okruglistol`}
                      label="Okrugli stol"
                      value="Okrugli stol"
                      checked={oblikSudjelovanja[index] === 'Okrugli stol'}
                      onChange={(e) => handleOblikSudjelovanjaChange(index, e.target.value)}
                    />
                    <Form.Check
                      type="radio"
                      name={`oblikSudjelovanja_${index}`}
                      id={`oblikSudjelovanja_${index}_tedtalk`}
                      label="Ted talk"
                      value="Ted talk"
                      checked={oblikSudjelovanja[index] === 'Ted talk'}
                      onChange={(e) => handleOblikSudjelovanjaChange(index, e.target.value)}
                    />
                    <Form.Check
                      type="radio"
                      name={`oblikSudjelovanja_${index}`}
                      id={`oblikSudjelovanja_${index}_outofthebox`}
                      label="Out of the box"
                      value="Out of the box"
                      checked={oblikSudjelovanja[index] === 'Out of the box'}
                      onChange={(e) => handleOblikSudjelovanjaChange(index, e.target.value)}
                    />

                    {/* Add radio buttons for other 'Oblik sudjelovanja' options here */}
                  </div>
                </Form.Group>
                <button onClick={() => removeFile(index)}>Ukloni</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
   }

  function Step3({
   
    handleToken
    
  }) {
    return (
      <div>
        <h3>Unesite detalje:</h3>
        <Form.Group>
          <Form.Label htmlFor="token">Token:</Form.Label>
          <Form.Control id="token" name="token" type="text" placeholder="Unesite token dobiven e-mailom" onChange={handleToken} />
        </Form.Group>
       
      </div>)


}
