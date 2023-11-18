//novi - 20.8. onaj sa updateom
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
//import socketClient  from "socket.io-client";
import { nanoid } from 'nanoid';
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

    if (!response.ok) {
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
const sendGetRequest = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
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
export default function CreatePredbiljezba() {
 
  const [lista, setLista] = useState([]);


var [selectedPredavanjeID, setSelectedPredavanjeID] = useState([]);
  const [predavanjaOptions, setPredavanjaOptions] = useState([]);

  //const serverUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';
  //const socket = socketClient(serverUrl);
  const navigate = useNavigate();

  const receivedPsiholog = localStorage.getItem('token');
  console.log("predvanja",JSON.parse(localStorage.getItem('myPredavanja')));
  var receivedPredavanja = JSON.parse(localStorage.getItem('myPredavanja'));
  var psihologID = receivedPsiholog.split("+")[0];
  const predavanjeID = receivedPredavanja;
  var fetchingPredavanja=null;
  useEffect(() => {


    async function fetchData() {
      // You can await here
      fetchingPredavanja = await sendGetRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/getPredavanja');
      setLista(fetchingPredavanja);
    setPredavanjaOptions(predavanjaOptions);
    receivedPredavanja.forEach((element) => {
      console.log({ element });
      selectedPredavanjeID.push(element.naziv)
    });

    }
      // ...
    
    fetchData();
    

  }, []);

  const handleCreatePredbiljezba = async () => {
    console.log("handleCreatePredbiljezba called"); // Add this line
    try {
      let anyConditionsMet = false; // Flag to track if any conditions are met
      const updatedPredavanjeDataArray = [];
      const updatedPredavanjeID = []
      
      for (const predID of predavanjeID) {
          if(selectedPredavanjeID.includes(predID.naziv)){
            updatedPredavanjeID.push(predID.Predavanje_ID)
          }

      }
     
      for (const predID of updatedPredavanjeID) {
       
        const predbiljezbaID = nanoid(10);
        console.log("Creating predbiljezba for predavanjeID:", predID);
        const applicationDate = new Date().toLocaleString();
      
        const response = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/createPredbiljezba', {  //https://horizonti-snage.azurewebsites.net/insertData

          predbiljezbaID: predbiljezbaID,
          psihologID: psihologID,
          applicationDate: applicationDate,
          predID: predID

        });
     
        const predavanjeData = lista.find(pred => pred.Predavanje_ID === predID);

        if (predavanjeData) {
          const updatedSlobodnaMjesta = Math.max(0, predavanjeData.slobodnaMjesta - 1);
          const updatedBrojPolaznika = Math.min(predavanjeData.ukupnoMjesta, predavanjeData.brojPolaznika + 1);
          const updatedPredavanjeData = {
            Predavanje_ID: predID,
            slobodnaMjesta: updatedSlobodnaMjesta,
            brojPolaznika: updatedBrojPolaznika,
          };
          updatedPredavanjeDataArray.push(updatedPredavanjeData);
        }
      }

      updatedPredavanjeDataArray.forEach(async updatedPredavanjeData => {
        const response = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/updatePredavanje',updatedPredavanjeData);
        /*socket.emit('updatePredavanje', updatedPredavanjeData, (response) => {
        });*/
        if (response) {
          console.log('Predavanje data updated successfully.');
        } else {
          console.error('Failed to update Predavanje data:', response.message);
        }
      });


      if (anyConditionsMet) {
        navigate('../lectureselection');
      }
      const user = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/getUser',
      { psihologID: psihologID}
          );
      
      const infoUser = user.recordset[0];
      const response2 = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/emailPredb', {//tu ide e-mail verification
        predbiljezbe: selectedPredavanjeID.join(","),
        ime: infoUser.ime,
        prezime: infoUser.prezime,
        email: infoUser.email
      });
      alert('Uspješno prijavljena predavanja!');


      navigate('..');
    } catch (error) {
      console.error('Error while creating predbiljezba:', error);
    }
  };


  const handleToggleElement = (element,predID) => {
    const updatedSelection = selectedPredavanjeID.includes(element)
      ? selectedPredavanjeID.filter((item) => item !== element)
      : [...selectedPredavanjeID, element];
    setSelectedPredavanjeID(updatedSelection);

    
  };

  return (
    <>
    <p>Create Predbiljezba:</p>
    <Form>
      <Form.Group controlId="selectedPredavanjeID">
        <Form.Label>Odabrana predavanja:</Form.Label>
        <br></br>
        <br></br>
        {receivedPredavanja.map((predavanje, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            id={`checkbox-${index}`}
            label={predavanje.naziv}
            checked={selectedPredavanjeID.includes(predavanje.naziv)}
            onChange={() => handleToggleElement(predavanje.naziv)}
            
          />
          
        ))}
      </Form.Group>
      <br></br>
     
      <Button variant="primary" onClick={handleCreatePredbiljezba}>
        Create Predbiljezba
      </Button>
      
    </Form>
  </>
  );
}
