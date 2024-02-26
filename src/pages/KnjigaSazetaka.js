import React from 'react'
import {Card} from 'react-bootstrap'
import KnjigaSazetakaPdf from '../assets/documents/KnjigaSazetakaPdf.pdf'

export default function KnjigaSazetaka() {
  return (
   
      
    
        
            <Card>
              <Card.Body className='custom-div' style={{color:'white'}}>
                <Card.Title style={{color:'lightgreen'}}>Knjiga sažetaka</Card.Title>
                
                <Card.Text className='text-muted'>
                 23.02.2024.
                  <iframe
                    title='Knjiga sažetaka'
                    src={KnjigaSazetakaPdf}
                    width='100%'
                    height='800px'
                    style={{ border: 'none' }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
     
    
      );
    };
  


