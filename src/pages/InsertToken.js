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
    setIme(e.target.value);
  }
  const handleInputPrezime = (e) =>{
    setPrezime(e.target.value);
  }
  const submitValues = async (e) => {
    e.preventDefault();

    const inputToken = document.getElementById('token');
    const inputIme = document.getElementById('ime');
    const inputPrezime = document.getElementById('prezime');
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
      alert("Server trenutno nije u funckciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.")
      console.log('There was an error', error);
    }

     


    if(user != null && user.recordset.size != 0){
     userNew = user.recordset[0]
    }
    //console.log(user.recordset.ime == ime,inputIme.value,userNew.ime)
    //console.log(user.recordset != null)
    //console.log(user.recordset.prezime == prezim““e)
   
    if (userNew == null){
      alert('Ispravi unos ili ponovno kopiraj token na ovo mjesto  da bi se nastavio proces prijave na stručni skup "Horizonti snage"');
      console.log("user iz baze je null")
      return;
    }
     
    else if(!(userNew.ime == inputIme.value && userNew.prezime == inputPrezime.value)) {
      alert('Ispravi unos ili ponovno kopiraj token na ovo mjesto  da bi se nastavio proces prijave na stručni skup "Horizonti snage"');
      console.log("Uneseno ime:",inputIme.value," pravoIme:",userNew.ime, "Uneseno prezime:",inputPrezime.value," pravo prezime:",userNew.prezime)
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
          <Button variant="outline-warning" size="md" onClick={handleShow}>
            <img width={50} height={40} src={horizonti_velik_cropped} />
            Prijava na predavanja
          </Button>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Prijava na predavanja</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isWaitingForConfirmation ? (
              <div className="spinner-container">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
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
                    placeholder="Unesi token"
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
                <Button variant="primary" type="submit">
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
