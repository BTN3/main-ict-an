import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Card, CardGroup, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import nekaFotka from '../assets/media/brain-mind-psychology-idea.jpg'
import CarouselComponent from './CarouselComponent';



// Primjer komponente Card za prikaz
const CustomCard = ({ image, text, date }) => (
  <Card>
    <Card.Img variant="top" src={nekaFotka} />
    <Card.Body>
      <Card.Text>{text}</Card.Text>
      <Card.Text>
        <small className="text-muted">{date}</small>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default function Home() {
  // Podaci za kartice
  const cardData = [
    // Podaci za tri reda kartica...
  ];

  return (
    <>
      <Navigation />

    
        <h2>Dobrodošli na našu novu web stranicu!</h2>
        
        
          <CarouselComponent/>
        

     
      <Footer />
    </>
  );
}

