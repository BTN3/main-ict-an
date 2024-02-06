import React from 'react'
import {Card} from 'react-bootstrap'
import program from '../assets/documents/PROGRAM_FINAL.pdf'

export default function Program() {
  return (
   
      
    
        
            <Card>
              <Card.Body className='custom-div' style={{color:'white'}}>
                <Card.Title style={{color:'lightgreen'}}>Program konferencije</Card.Title>
                <Card.Text style={{color:'orange'}}>Ovdje se nalazi preliminarni program konferencije, zbog organizacijskih razloga još može biti podložan izmjenama!</Card.Text>
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
              </Card.Body>
            </Card>
     
    
      );
    };
  


