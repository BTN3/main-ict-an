import React from 'react'
import {Card} from 'react-bootstrap'
import program from '../assets/documents/PROGRAM_FINALNO.pdf'

export default function Program() {
  return (
   
      
    
        
            <Card>
              <Card.Body className='custom-div' style={{color:'white'}}>
                <Card.Title style={{color:'lightgreen'}}>Program konferencije</Card.Title>
                <Card.Text style={{color:'orange'}}>Ovdje se nalazi konačna verzija programa konferencije "Horizonti snage".</Card.Text>
                <Card.Text className='text-muted'>
                  Datum
                  <iframe
                    title='Preliminarni program'
                    src={program}
                    width='100%'
                    height='800px'
                    style={{ border: 'none' }}
                  />
                </Card.Text>
                <hr/>
          <p style={{fontSize:'8pt',letterSpacing:'5px'}}>Objavljeno 26.veljače 2024.</p>
          <hr/>
              </Card.Body>
            </Card>
     
    
      );
    };
  


