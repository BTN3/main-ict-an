import React, { useState } from 'react';
import Navigation from './Navigation';
import photoHor from '../assets/media/90763d09-7baf-4f59-bd71-f57fdc7e9d74.jpeg'
import '../HomeStyle.css'; // Pretpostavljam da ćeš dodati stilizaciju
import Footer from './Footer'
import { Button,Form } from 'react-bootstrap';
import appImg from '../assets/media/application.jpg'
import komunikacija from '../assets/media/komunikacija.jpeg'
import CarouselComponent from './CarouselComponent';
export default function Home() {
  // const [emailData, setEmailData] = useState({
  //   to: 'horizontisnage@gmail.com',
  //   from: '',
  //   subject: 'Dodatni upiti za programsko - organizacijski odbor',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setEmailData(prevData => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  
  // };
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(emailData)
  //   try {
  //      console.log(emailData)
  //      const response = await fetch('http://localhost:8080/api/sendEmailTo', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(emailData)
  //     });
      

  //     if (response.ok) {
  //       // Uspješno poslano
  //       console.log('Mail je uspješno poslan!');
  //     } else {
  //       // Greška prilikom slanja
  //       console.error('Došlo je do greške prilikom slanja maila.');
  //     }
  //   } catch (error) {
  //     console.error('Došlo je do greške:', error);
  //   }
  // };
 

  const handleButtonClick = (sectionName) => {
    if (selectedButton === sectionName) {
      setSelectedButton(''); // Uklanja odabir ako je isti gumb ponovno kliknut
    } else {
      setSelectedButton(sectionName);
    }
  };
  const [selectedButton, setSelectedButton] = useState('');

  // const handleButtonClick = (sectionName) => {
  //   setSelectedButton(sectionName);
  // };

  return (
    <div  >
      <Navigation />
     
      <div className="grid-container" style={{minHeight:'100vh', minWidth:'100vw', backgroundImage: `url(${photoHor})`,opacity:'0.7', backgroundRepeat:'no-repeat',
  backgroundImage: `url(${photoHor})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'}}>
      {/* <img src={photoHor}  alt='photo' className='background-image'/> */}
        {/* <div className={`grid-item ${selectedButton === 'Važno' ? 'selected' : ''}`}>
          <Button className='btnHome' variant='outline-dark' style={{width:'300px', height:'50px'}}  onClick={() => handleButtonClick('Važno')}>Važno</Button>
          {selectedButton === 'Važno' && (
            <div className="sectionContent">
              <p>Ovdje ide tekst za Važno.</p>
            </div>
          )}
        </div> */}
        <div className={`grid-item ${selectedButton === 'O aplikaciji za prijavu' ? 'selected' : ''}`}>
          <Button className='btnHome' variant='outline-light' style={{width:'300px', height:'50px'}} onClick={() => handleButtonClick('O aplikaciji za prijavu')}>Vijesti</Button>
          {selectedButton === 'O aplikaciji za prijavu' && (
            <div className="sectionContent">
              <img src={appImg} style={{width:'100%', height:'100%'}} alt='photo' />

              <p style={{textAlign:'justify'}}><a href='https://horizonti-snage.azurewebsites.net/registrationfeesaccommodation/eventregistration' >Prijavi se</a> na 2. konferenciju školskih psihologa "Horizonti snage" na sljedeći način.
              </p><ol>
                <li>Svi sudionici prijavljuju se prvo kao pasivni sudionici Konferencije</li>
                <li>Aktivni sudionici se mogu ponovno prijaviti kao aktivni sudionici prilaganjem svojeg sažetka na način definiran u postupku aktivne prijave.</li>
                <li>Naknadno će biti moguće odabrati i aktivnosti s ograničenim sudjelovanjem, poput radionica i drugih aktivnosti!</li></ol>
            </div>
          )}
        </div>
        
        <div className={`grid-item ${selectedButton === 'Vijesti' ? 'selected' : ''}`}>
          <Button variant='outline-light' className='btnHome' style={{width:'300px', height:'50px'}} onClick={() => handleButtonClick('Vijesti')}>Važno</Button>
          {selectedButton === 'Vijesti' && (
            <>
            <div className="sectionContent" style={{textAlign:'justify'}}>
              <p style={{textAlign:'center'}}>Važni datumi:</p>
             
 <p >Rok za prijavu sažetaka: 31.12.2023.</p>
 <p>Rana prijava (rana kotizacija): do 31.12.2023.</p>
 <p>Srednja prijava (srednja kotizacija):  od 1.1. -  31.01.2024.</p>
 <p>Kasna prijava (kasna kotizacija): od  1.2. - 20.2.2024.</p>
 
            </div>
            <hr/>
         <div>Ova web stranica sadrži neke funkcionalnosti koje nisu podržane na Firefox pregledniku te vas stoga upozoravamo da postupak za prijavu neće dobro raditi na navedenom pregledniku.
         U tu svrhu poželjno je koristiti druge preglednike.
       </div>
       
       </>
          )}
         
        </div>
        {/* Dodaj ostale buttone */}
        <div className={`grid-item ${selectedButton === 'Kontaktirajte nas' ? 'selected' : ''}`}>
          <Button className='btnHome' variant='outline-light' style={{width:'300px', height:'50px'}} onClick={() => handleButtonClick('Kontaktirajte nas')}>Kontakt</Button>
          {selectedButton === 'Kontaktirajte nas' && (
           
           <div className="sectionContent">
                   <img src={komunikacija} style={{width:'100%', height:'100%'}} alt='photo' />
                   
    {/* <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email adresa</Form.Label>
        <Form.Control
          type="email"
          placeholder="Unesite svoj email"
          name="from"
          value={emailData.from}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicSubject">
        <Form.Label>Naslov</Form.Label>
        <Form.Control
          type="text"
          placeholder="Unesite naslov"
          name="subject"
          value={emailData.subject}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Label>Poruka</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Unesite tekst poruke"
          name="message"
          value={emailData.message}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Pošalji
      </Button>
    </Form>
   */}


              <p>Za sve upite budite slobodni obratiti se na elektroničku poštu <a href="mailto:horizontisnage@gmail.com">horizontisnage@gmail.com</a></p>
            </div>
          )}
        </div>
        </div>
        
      
     
      <Footer/>
    </div>
  );
}
