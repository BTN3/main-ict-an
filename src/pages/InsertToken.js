import React, { useState } from 'react'
import { Container, Row, Form, Button, Modal, Spinner } from 'react-bootstrap';
import horizonti_velik_cropped from '../assets/media/horizonti_velik_cropped.png';
import { useNavigate } from 'react-router-dom';
const sendRequest = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response == undefined) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error during the request:', error);

    // Log the response content if available
    const responseBody = await (response ? response.text() : '');
    console.error('Response content:', responseBody);

    throw error;
  }
};
export default function InsertToken() {

  const navigate = useNavigate();
  const [isWaitingForConfirmation, setIsWaitingForConfirmation] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [input,setInput] = useState('');
const [ime,setIme] = useState('');
const [prezime,setPrezime] = useState('');
  const handleInputToken = (e) =>{
    setInput(e.target.value);
  }
  const handleInputIme = (e) =>{
var ime = e.target.value.trim().normalize('NFKD').replace(/[^\w\s.-_\/]|(?![šž])\p{Mark}/gu, '');
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

    setIme(ime);

  }
  const handleInputPrezime = (e) =>{
    var prezime = e.target.value.trim().normalize('NFKD').replace(/[^\w\s.-_\/]|(?![šž])\p{Mark}/gu, '');
   
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
      setPrezime(prezime);
  }
  const submitValues = async (e) => {

    e.preventDefault();

  
    const inputToken = document.getElementById('token');
    var inputIme = document.getElementById('ime');
    var inputPrezime = document.getElementById('prezime');
    var user = null
    var   userNew = null
    const confirmWindow = window.confirm(`Želite li pospremiti ovako unesene podatke?
      Token: ${input}`)
    
    try{
   
     user = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/getUser',
{ psihologID: inputToken.value}
    );}
    catch (error) {
      // TypeError: Failed to fetch
      alert("Server trenutno nije u funkciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.")
      console.log('There was an error', error);
    }

     


    if(user != null && user.recordset.size != 0){
     userNew = user.recordset[0]
    }
    //console.log(user.recordset.ime == ime,inputIme.value,userNew.ime)
    //console.log(user.recordset != null)
    //console.log(user.recordset.prezime == prezim““e)
    inputPrezime = inputPrezime.value
    inputPrezime = inputPrezime.trim().normalize('NFKD').replace(/[^\w\s.-_\/]|(?![šž])\p{Mark}/gu, '');
    
    inputIme = inputIme.value
    inputIme = inputIme.trim().normalize('NFKD').replace(/[^\w\s.-_\/]|(?![šž])\p{Mark}/gu, '');

   
    
    // if (!inputIme) {
    //   console.log('Molimo unesite ime.');
    //   return;
    // }
  
    // // Provjera sadrži li unos brojeve ili posebne znakove
    // if (/[\d!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]/.test(inputIme)) {
    //   alert('Unos ne smije sadržavati brojeve ili posebne znakove.');
    //   return;
    // }
  
    // // Razdvajamo riječi i pretvaramo svako prvo slovo u veliko
    // inputIme = inputIme
    //   .split(' ')
    //   .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    //   .join(' ');

    //   if (!inputPrezime) {
    //     console.log('Molimo unesite prezime.');
    //     return;
    //   }
    
    //   // Provjera sadrži li unos brojeve ili neželjene znakove
    //   if (!/^[a-zA-Z\u00C0-\u017F\s-]*$/.test(inputPrezime)) {
    //     alert('Unos ne smije sadržavati brojeve ili neželjene znakove osim slova, dijakritičkih znakova, razmaka i znaka "-".');
    //     return;
    //   }
      
      
    //   // Razdvajamo riječi i pretvaramo svako prvo slovo u veliko
    //   inputPrezime = inputPrezime
    //     .split(' ')
    //     .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    //     .join(' ');

    if (userNew == null){
      alert('Ispravi unos ili ponovno kopiraj token na ovo mjesto  da bi se nastavio proces prijave na stručni skup "Horizonti snage"');
      console.log("user iz baze je null")
      return;
    }
  
    else if(!(userNew.ime == inputIme && userNew.prezime == inputPrezime)) {
     
      alert('Ispravi unos ili ponovno kopiraj token na ovo mjesto  da bi se nastavio proces prijave na stručni skup "Horizonti snage"');
      console.log("Uneseno ime:",inputIme," pravoIme:",userNew.ime, "Uneseno prezime:",inputPrezime," pravo prezime:",userNew.prezime)
      console.log("je li user null:",userNew)
      return
      }

    
    

    
      
    if (confirmWindow) {
      try {
        
        setIsWaitingForConfirmation(true);

        localStorage.clear();

        localStorage.setItem('token', inputToken.value + "+" + userNew.role
        );

    

        // Set timeout only if submission takes longer than 5000 ms
        const insertionTimeout = setTimeout(() => {
          setIsWaitingForConfirmation(false);
          alert('Insertion took longer than expected. Please try again.');
        }, 15000);

       
          clearTimeout(insertionTimeout);
          setIsWaitingForConfirmation(false);
          alert('Uspješno pospremljeni prijavni podaci!');
          navigate('../lectureselection');
        

        inputToken.value = "";
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
    <Container fluid>
        <Row>
          <Button  style={{marginBottom:'20px'}} variant="outline-dark" size="md" onClick={handleShow}>
            <img width={50} height={40} src={horizonti_velik_cropped} />
            Prijava na predavanja
          </Button>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header  closeButton>
            <Modal.Title>Prijava na predavanja</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isWaitingForConfirmation ? (
              <div className="spinner-container">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Učitavanje...</span>
                </Spinner>
              </div>
            ) : (
              <Form onSubmit={submitValues}>
                 <Form.Group>
                  <Form.Label htmlFor="ime">Unesi ime:</Form.Label>
                  <Form.Control
                    type="ime"
                    placeholder="Unesi ime"
                    id="ime"
                    name="ime"
                    onChange={handleInputIme}
                  />
                   </Form.Group>
                  <Form.Group>
                  <Form.Label htmlFor="ime">Unesi prezime:</Form.Label>
                  <Form.Control
                    type="prezime"
                    placeholder="Unesi prezime"
                    id="prezime"
                    name="prezime"
                    onChange={handleInputPrezime}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="ime">Unesi dobiveni token:</Form.Label>
                  <Form.Control
                    type="token"
                    placeholder="Unesi token"
                    id="token"
                    name="token"
                    onChange={handleInputToken}
                  />
                </Form.Group>
                
                <br />
                <Button variant="outline-dark" type="submit">
                 Prijava na predavanja
                </Button>
              </Form>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </>
  )
}
