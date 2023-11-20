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
const sendGetRequest = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
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
export default function CreatePredbiljezba() {
 
  const [lista, setLista] = useState([]);


var [selectedPredavanjeID, setSelectedPredavanjeID] = useState([]);
  const [predavanjaOptions, setPredavanjaOptions] = useState([]);
  const [isButtonDisabled, setButtonDisabled] = useState(false);


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
    setButtonDisabled(true)
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
       try{
        const response = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/createPredbiljezba', {  //https://horizonti-snage.azurewebsites.net/insertData
       
       

          predbiljezbaID: predbiljezbaID,
          psihologID: psihologID,
          applicationDate: applicationDate,
          predID: predID
        
        }); 
      }catch (error) {
        // TypeError: Failed to fetch
        alert("Server trenutno nije u funckciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.")
        console.log('There was an error', error);
      }
     
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
        try{

        
        const response = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/updatePredavanje',updatedPredavanjeData);
        /*socket.emit('updatePredavanje', updatedPredavanjeData, (response) => {
        });*/
      }catch (error) {
        // TypeError: Failed to fetch
        alert("Server trenutno nije u funckciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.")
        console.log('There was an error', error);
      }
        if (response) {
          console.log('Predavanje data updated successfully.');
        } else {
          console.error('Failed to update Predavanje data:', response.message);
        }
      });


      if (anyConditionsMet) {
        navigate('../lectureselection');
      }
      var user = null
      try{
      user = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/getUser',
      { psihologID: psihologID}
          );
      }catch (error) {
        // TypeError: Failed to fetch
        alert("Server trenutno nije u funckciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.")
        console.log('There was an error', error);
      }

      const infoUser = user.recordset[0];
      try{ 

      
      const response2 = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/emailPredb', {//tu ide e-mail verification
        predbiljezbe: selectedPredavanjeID.join(","),
        ime: infoUser.ime,
        prezime: infoUser.prezime,
        email: infoUser.email
      });
    }
    catch (error) {
      // TypeError: Failed to fetch
      alert("Server trenutno nije u funckciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.")
      console.log('There was an error', error);
    }
      alert('Uspješno prijavljena predavanja!');
      setButtonDisabled(false)


      navigate('../');
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
     
      <Button variant="primary" onClick={handleCreatePredbiljezba} disabled={isButtonDisabled}>
        Create Predbiljezba
      </Button>
      
    </Form>
  </>
  );
}
