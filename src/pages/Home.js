// import React, { useState } from 'react';
// import Navigation from './Navigation';
// // import photoHor from '../assets/media/90763d09-7baf-4f59-bd71-f57fdc7e9d74.jpeg'
// import '../HomeStyle.css'; // Pretpostavljam da ćeš dodati stilizaciju
// import Footer from './Footer'
// import { Button } from 'react-bootstrap';
// import appImg from '../assets/media/application.jpg'
// import christmas from '../assets/media/kuglica2.jpg'
// import komunikacija from '../assets/media/komunikacija.jpeg'
// // import CarouselComponent from './CarouselComponent';
// export default function Home() {
//   // const [emailData, setEmailData] = useState({
//   //   to: 'horizontisnage@gmail.com',
//   //   from: '',
//   //   subject: 'Dodatni upiti za programsko - organizacijski odbor',
//   //   message: ''
//   // });

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setEmailData(prevData => ({
//   //     ...prevData,
//   //     [name]: value
//   //   }));
  
//   // };
  

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   console.log(emailData)
//   //   try {
//   //      console.log(emailData)
//   //      const response = await fetch('http://localhost:8080/api/sendEmailTo', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify(emailData)
//   //     });
      

//   //     if (response.ok) {
//   //       // Uspješno poslano
//   //       console.log('Mail je uspješno poslan!');
//   //     } else {
//   //       // Greška prilikom slanja
//   //       console.error('Došlo je do greške prilikom slanja maila.');
//   //     }
//   //   } catch (error) {
//   //     console.error('Došlo je do greške:', error);
//   //   }
//   // };
 

//   const handleButtonClick = (sectionName) => {
//     if (selectedButton === sectionName) {
//       setSelectedButton(''); // Uklanja odabir ako je isti gumb ponovno kliknut
//     } else {
//       setSelectedButton(sectionName);
//     }
//   };
//   const [selectedButton, setSelectedButton] = useState('');

//   // const handleButtonClick = (sectionName) => {
//   //   setSelectedButton(sectionName);
//   // };

//   return (
//     <div>
//       <Navigation />
     
//       {/* <div className="grid-container" style={{minHeight:'100vh', minWidth:'100vw', backgroundImage: `url(${christmas})`,opacity:'0.7', backgroundRepeat:'no-repeat',
//   backgroundImage: `url(${christmas
//   })`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center'}}> */}
//   <div
//     className="grid-container"
//     style={{
//       position: 'relative',
//       minHeight: '100vh',
//       minWidth: '100vw',
//       backgroundImage: `url(${christmas})`,
//       opacity: '0.7',
//       backgroundRepeat: 'no-repeat',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     }}
//   >
//     <div
//       style={{
//         position: 'absolute',
//         bottom: 0,
//         width: '100vw',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Prozirna crna pozadina */
//         padding: '20px',
//         color: 'lightgrey', /* Ljubičasta boja */
//         textAlign: 'center',
//         boxSizing: 'border-box',
//       }}
//     >
//       <p style={{ margin: 0 ,fontSize: '24px'}}>
//       <span style={{color:'lightgreen'}} >     <p style={{fontSize:'15pt'}}><b><span style={{ color: 'lightgreen' }}><span style={{color:'red'}}>NOVO! </span>Rok za prijavu sažetaka produljen je do</span></b> 15.siječnja 2024. </p></span>
//       </p>
//     </div>
  
//       {/* <img src={photoHor}  alt='photo' className='background-image'/> */}
//         {/* <div className={`grid-item ${selectedButton === 'Važno' ? 'selected' : ''}`}>
//           <Button className='btnHome' variant='outline-dark' style={{width:'300px', height:'50px'}}  onClick={() => handleButtonClick('Važno')}>Važno</Button>
//           {selectedButton === 'Važno' && (
//             <div className="sectionContent">
//               <p>Ovdje ide tekst za Važno.</p>
//             </div>
//           )}
//         </div> */}
//         <div className={`grid-item ${selectedButton === 'O aplikaciji za prijavu' ? 'selected' : ''}`}>
//           <Button className='btnHome' variant='outline-light' style={{width:'300px', height:'50px'}} onClick={() => handleButtonClick('O aplikaciji za prijavu')}>Vijesti</Button>
//           {selectedButton === 'O aplikaciji za prijavu' && (
//             <div className="sectionContent">
//               <img src={appImg} style={{width:'100%', height:'100%'}} alt='photo' />

//               <p style={{textAlign:'justify'}}><a href='https://horizonti-snage.azurewebsites.net/registrationfeesaccommodation/eventregistration' >Prijavi se</a> na 2. konferenciju školskih psihologa "Horizonti snage" na sljedeći način.
//               </p><ol>
//                 <p><span style={{color:'red'}}>VAŽNO!</span>Prijave sažetaka moguće su do 15. siječnja 2024. godine. Prijavite se! Sretnu i uspješnu novu 2024. godinu želi vam programsko - organizacijski odbor Konferencije!</p>
//                 <li>Naknadno će biti moguće odabrati i aktivnosti s ograničenim sudjelovanjem, poput radionica i drugih aktivnosti!</li></ol>
//             </div>
//           )}
//         </div>
        
//         <div className={`grid-item ${selectedButton === 'Vijesti' ? 'selected' : ''}`}>
//           <Button variant='outline-light' className='btnHome' style={{width:'300px', height:'50px'}} onClick={() => handleButtonClick('Vijesti')}>Važno</Button>
//           {selectedButton === 'Vijesti' && (
//             <>
//             <div className="sectionContent" style={{textAlign:'justify'}}>
//               <p style={{textAlign:'center'}}>Važni datumi:</p>
             
//  <p ><span style={{color:'red'}}>NOVO!</span>Rok za prijavu sažetaka: 15.1.2024.</p>
//  <p>Rana prijava (rana kotizacija): do 31.12.2023.</p>
//  <p>Srednja prijava (srednja kotizacija):  od 1.1. -  31.01.2024.</p>
//  <p>Kasna prijava (kasna kotizacija): od  1.2. - 20.2.2024.</p>
 
//             </div>
//             <hr/>
//          <div>Ova web stranica sadrži neke funkcionalnosti koje nisu podržane na Firefox pregledniku te vas stoga upozoravamo da postupak za prijavu neće dobro raditi na navedenom pregledniku.
//          U tu svrhu poželjno je koristiti druge preglednike.
//        </div>
       
//        </>
//           )}
         
//         </div>
//         {/* Dodaj ostale buttone */}
//         <div className={`grid-item ${selectedButton === 'Kontaktirajte nas' ? 'selected' : ''}`}>
//           <Button className='btnHome' variant='outline-light' style={{width:'300px', height:'50px'}} onClick={() => handleButtonClick('Kontaktirajte nas')}>Kontakt</Button>
//           {selectedButton === 'Kontaktirajte nas' && (
           
//            <div className="sectionContent">
//                    <img src={komunikacija} style={{width:'100%', height:'100%'}} alt='photo' />
                   
//     {/* <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>Email adresa</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Unesite svoj email"
//           name="from"
//           value={emailData.from}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="formBasicSubject">
//         <Form.Label>Naslov</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Unesite naslov"
//           name="subject"
//           value={emailData.subject}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="formBasicMessage">
//         <Form.Label>Poruka</Form.Label>
//         <Form.Control
//           as="textarea"
//           rows={3}
//           placeholder="Unesite tekst poruke"
//           name="message"
//           value={emailData.message}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Pošalji
//       </Button>
//     </Form>
//    */}


//               <p>Za sve upite budite slobodni obratiti se na elektroničku poštu <a href="mailto:horizontisnage@gmail.com">horizontisnage@gmail.com</a></p>
//             </div>
//           )}
//         </div>
//         </div>
        
      
     
//       <Footer/>
//     </div>
//   );
// }



//predloženi
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import appImg from '../assets/media/application.jpg';
import christmas from '../assets/media/1.konferencija/klupa.jpg';
import komunikacija from '../assets/media/komunikacija.jpeg';
import '../HomeStyle.css'; 

export default function Home() {
  return (
    <div>
      <Navigation />

      <div
        className="grid-container"
        style={{
          position: 'relative',
          minHeight: '100vh',
          minWidth: '100vw',
          backgroundImage: `url(${christmas})`,
          opacity: '0.9',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
        }}
      >
        <div style={{ color: 'lightgrey', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '24px' }}>
            <span style={{ color: 'lightgreen' }}>
              <b>
                <span style={{ color: 'lightgreen' }}>
                  <span style={{ color: 'red' }}>NOVO! </span>Rok za prijavu sažetaka produljen je do
                </span>
              </b>{' '}
              15.siječnja 2024. 
            </span>
          </p>
          <p style={{ margin: 0, fontSize: '24px' }}>
            <span style={{ color: 'lightgreen' }}>
              <b>
                <span style={{ color: 'lightgreen' }}>
                  <span style={{ color: 'red' }}>NOVO! </span><a href='https://horizonti-snage.azurewebsites.net/registrationfeesaccommodation/'>OVDJE</a>
                </span>
              </b>{' '}
              se možete informirati o smještaju i pogodnostima koje omogućujemo sudionicima Konferencije!
            </span>
          </p>
        </div>

        <div className="sectionContent">
          <h2 className='naslovni'>O aplikaciji za prijavu</h2>
          <img src={appImg} style={{ width: '100%', height: 'auto' }} alt="photo" />
          <p>
            <a href="https://horizonti-snage.azurewebsites.net/registrationfeesaccommodation/eventregistration">Prijavi se</a> na 2. konferenciju školskih psihologa "Horizonti snage" na sljedeći način.
          </p>
          <p>
            <span style={{ color: 'red' }}>VAŽNO! </span>Prijave sažetaka moguće su do 15. siječnja 2024. godine. Prijavite se! Sretnu i uspješnu novu 2024. godinu želi vam programsko - organizacijski odbor Konferencije!
          </p>
          <p>Naknadno će biti moguće odabrati i aktivnosti s ograničenim sudjelovanjem, poput radionica i drugih aktivnosti!</p>
        </div>

        <div className="sectionContent">
          <h2 className='naslovni'>Vijesti</h2>
          <p style={{ textAlign: 'center' }}>Važni datumi:</p>
          <p>
            <span style={{ color: 'red' }}>NOVO! </span>Rok za prijavu sažetaka: 15.1.2024.
          </p>
          <p>Rana prijava (rana kotizacija): do 31.12.2023.</p>
          <p>Srednja prijava (srednja kotizacija): od 1.1. - 31.01.2024.</p>
          <p>Kasna prijava (kasna kotizacija): od 1.2. - 20.2.2024.</p>
        </div>

        <div className="sectionContent">
          <h2 className='naslovni'>Kontaktirajte nas</h2>
          <img src={komunikacija} style={{ width: '100%', height: 'auto' }} alt="photo" />
          <p>Za sve upite budite slobodni obratiti se na elektroničku poštu <a href="mailto:horizontisnage@gmail.com">horizontisnage@gmail.com</a></p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
