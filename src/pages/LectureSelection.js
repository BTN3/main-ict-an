// import React, { useState, useEffect } from 'react';
// import { Table, Container, Row, Button, Form } from 'react-bootstrap';
// import { io } from 'socket.io-client';
// import { useNavigate } from 'react-router-dom';

// export default function LectureSelection() {
//   const [lista, setLista] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedLectures, setSelectedLectures] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(''); // Add this line
//   const socket = io('http://localhost:8080');
//   const receivedPsihologID = JSON.parse(localStorage.getItem('psihologID'));
//   const tokenreceived = JSON.parse(localStorage.getItem('token'));
//   console.log('PsihologID: '+receivedPsihologID);
//   console.log('Token: '+tokenreceived);
//   const predavanjaToSend = [selectedLectures];
//   const navigate = useNavigate();

//   const handleDeleteButton = (predavanjeID) => {
//     socket.emit('deletePredavanje', predavanjeID);
//   };

//   const handleCheckboxChange = (predavanjeID) => {
//     if (selectedLectures.includes(predavanjeID)) {
//       setSelectedLectures(selectedLectures.filter(id => id !== predavanjeID));
//     } else {
//       setSelectedLectures([...selectedLectures, predavanjeID]);
//     }
//   };

//   const handleSendSelectedPredavanje = () => {
//     localStorage.setItem('token', JSON.stringify(tokenreceived));
//     localStorage.setItem('psihologID', JSON.stringify(receivedPsihologID));
//     localStorage.setItem('myPredavanja', JSON.stringify(selectedLectures));
//     if(selectedLectures.length===0){
//       alert('Morate odabrati barem jedno predavanje!');
//       return;
//     }
//     navigate('../createpredbiljezba');
//   };

//   useEffect(() => {
//     socket.on('getPredavanja', (fetchingPredavanja) => {
//       setLista(fetchingPredavanja);
//       setLoading(false);
//     });

//     socket.on('fetchingError', (errorMessage) => {
//       console.error('Error fetching data:', errorMessage);
//       setLoading(false);
//     });

//     socket.emit('getPredavanja');

//     return () => {
//       socket.off('getPredavanja');
//       socket.off('fetchingError');
//     };
//   }, []);

//   const filteredLectures = lista.filter(pred =>
//     pred.naziv.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     pred.tip.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <p>Dostupna predavanja:</p>
//       <Container>
//         <Row>
//         <Form.Group> <Form.Label htmlFor='pretraga'>Pretraži predavanja: 
//           </Form.Label>
//           <Form.Control
//             id='pretraga'
//             type="text"
//             placeholder="Search by name or tip..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           /></Form.Group>
//           <br/>
//           <hr/>
//           <Table striped bordered hover>
         
//             <thead className="bg-primary">
//               <tr>
//                 <th>Odabir</th>
//                 <th>Naziv</th>
//                 <th>Tip</th>
//                 <th>Opis</th>
//                 <th>Broj polaznika</th>
//                 <th>Slobodna mjesta</th>
//                 <th>Ukupno mjesta</th>
//                 <th>Brisanje predavanja:</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td colSpan="8">Loading...</td>
//                 </tr>
//               ) : filteredLectures.length > 0 ? (
//                 filteredLectures.map((pred) => (
//                   <tr className="bg-warning" key={pred.Predavanje_ID}>
//                     <td>
//                       <Form.Check
//                         type="checkbox"
//                         checked={selectedLectures.includes(pred.Predavanje_ID)}
//                         onChange={() => handleCheckboxChange(pred.Predavanje_ID)}
//                       />
//                     </td>
//                     <td>{pred.naziv}</td>
//                     <td>{pred.tip}</td>
//                     <td>{pred.opis}</td>
//                     <td>{pred.brojPolaznika}</td>
//                     <td>{pred.slobodnaMjesta}</td>
//                     <td>{pred.ukupnoMjesta}</td>
//                     <td>
//                       <Button
//                         variant="danger"
//                         type="delete"
//                         onClick={() => handleDeleteButton(pred.Predavanje_ID)}
//                       >
//                         Obriši
//                       </Button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="8">No data available</td>
//                 </tr>
//               )}
//             </tbody>
//           </Table>
//           <Button onClick={() => handleSendSelectedPredavanje()} variant="success">
//             Posalji odabrana predavanja
//           </Button>
//         </Row>
//       </Container>
//     </>
//   );
// }


// // //zakomentirano 16.8. u 15.37 kad sam pokušavao napraviti multiple choice predavanja
// import React, { useState, useEffect } from 'react';
// import { Table, Container, Row, Button, Form } from 'react-bootstrap';
// import { io } from 'socket.io-client';
// import { useNavigate } from 'react-router-dom';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// export default function LectureSelection() {
//   const [lista, setLista] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedLectures, setSelectedLectures] = useState([]);
//   const socket = io('http://localhost:8080');
//   const navigate = useNavigate();
//   //const receivedPsiholog_ID = localStorage.getItem('psihologID');
//   const receivedPsihologID = JSON.parse(localStorage.getItem('psihologID'));
//   const tokenreceived = JSON.parse(localStorage.getItem('token'));
//   console.log('PsihologID: '+receivedPsihologID);
//   console.log('Token: '+tokenreceived);
//   const predavanjaToSend = [selectedLectures];


//   const handleDeleteButton = (predavanjeID) => {
//     socket.emit('deletePredavanje', predavanjeID);
//   };

//   const handleCheckboxChange = (predavanjeID) => {
//     if (selectedLectures.includes(predavanjeID)) {
//       setSelectedLectures(selectedLectures.filter(id => id !== predavanjeID));
//     } else {
//       setSelectedLectures([...selectedLectures, predavanjeID]);
   
      
//     }
//   };
 
  
//   const handleSendSelectedPredavanje = () => {
//    // const dataToSend = [receivedPsihologID, selectedLectures];
//    // console.log(dataToSend); // Add this line
//    localStorage.setItem('token', JSON.stringify(tokenreceived));
//    console.log(receivedPsihologID);
//     localStorage.setItem('psihologID', JSON.stringify(receivedPsihologID));
//     console.log(receivedPsihologID);
//     localStorage.setItem('myPredavanja',JSON.stringify(selectedLectures));
//     console.log(selectedLectures);
//     navigate('../createpredbiljezba');
//   };
  
//   const handleSubmitSelection = () => {
//         // Emit selected lecture IDs to the server
//         socket.emit('selectedLectures', selectedLectures);
//         console.log(selectedLectures);
        
//       };
    
//   useEffect(() => {
//     socket.on('getPredavanja', (fetchingPredavanja) => {
//       setLista(fetchingPredavanja);
//       setLoading(false);
//     });

//     socket.on('fetchingError', (errorMessage) => {
//       console.error('Error fetching data:', errorMessage);
//       setLoading(false);
//     });

//     // Fetch initial list of Predavanja
//     socket.emit('getPredavanja');

//     return () => {
//       socket.off('getPredavanja');
//       socket.off('fetchingError');
//     };
//   }, []);

//   return (
//     // <>
//     //   <p>Dostupna predavanja:</p>
//     //   <Container>
//     //     <Row>
//     //       <Table striped bordered hover>
//     //         <thead className="bg-primary">
//     //           <tr>
//     //             <th>Odabir</th>
//     //             <th>Naziv</th>
//     //             <th>Tip</th>
//     //             <th>Opis</th>
//     //             <th>Broj polaznika</th>
//     //             <th>Slobodna mjesta</th>
//     //             <th>Ukupno mjesta</th>
//     //             <th>Brisanje predavanja: </th>
//     //           </tr>
//     //         </thead>
//     //         <tbody>
//     //           {loading ? (
//     //             <tr>
//     //               <td colSpan="8">Loading...</td>
//     //             </tr>
//     //           ) : lista && lista.length > 0 ? (
//     //             lista.map((pred) => (
//     //               <tr className="bg-warning" key={pred.Predavanje_ID}>
//     //                 <td>
//     //                   <Form.Check
//     //                     type="checkbox"
//     //                     checked={selectedLectures.includes(pred.Predavanje_ID)}
//     //                     onChange={() => handleCheckboxChange(pred.Predavanje_ID)}
//     //                     disabled={pred.slobodnaMjesta <= 0 || pred.ukupnoMjesta === pred.brojPolaznika}
                        
//     //                   />
//     //                 </td>
//     //                 <td>{pred.naziv}</td>
//     //                 <td>{pred.tip}</td>
//     //                 <td>{pred.opis}</td>
//     //                 <td>{pred.brojPolaznika}</td>
//     //                 <td>{pred.slobodnaMjesta}</td>
//     //                 <td>{pred.ukupnoMjesta}</td>
//     //                 <td>
//     //                   <Button
//     //                     variant="danger"
//     //                     type="delete"
//     //                     onClick={() => handleDeleteButton(pred.Predavanje_ID)}
//     //                   >
//     //                     Obriši
//     //                   </Button>
//     //                 </td>
//     //               </tr>
      
//     //             ))
//     //           ) : (
//     //             <tr>
//     //               <td colSpan="8">No data available</td>
//     //             </tr>
//     //           )}
//     //         </tbody>
            
//     //       </Table>
//     //       <Button onClick={() => handleSendSelectedPredavanje()}  variant='success'>Posalji odabrana predavanja</Button>
//     //       <br/><br/>
//     //       <Button onClick={handleSubmitSelection}>Odabir predavanja</Button>
         
//     //     </Row>
//     //   </Container>
//     // </>
//     <>
//     <p>Dostupna predavanja:</p>
//     <Container>
//       <Row>
//         <Table striped bordered hover>
//           <thead className="bg-primary">
//             <tr>
//               <th>Odabir</th>
//               <th>Naziv</th>
//               <th>Tip</th>
//               <th>Opis</th>
//               <th>Broj polaznika</th>
//               <th>Slobodna mjesta</th>
//               <th>Ukupno mjesta</th>
//               <th>Brisanje predavanja: </th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan="8">Loading...</td>
//               </tr>
//             ) : lista && lista.length > 0 ? (
//               lista.map((pred) => (
//                 <tr
//                   className={`${
//                     pred.slobodnaMjesta <= 0 || pred.ukupnoMjesta === pred.brojPolaznika
//                       ? 'disabled-row'
//                       : 'bg-warning'
//                   }`}
//                   key={pred.Predavanje_ID}
//                 >
//                   <td>
//                   <td>
//     <OverlayTrigger
//       overlay={<Tooltip>This lecture is full or unavailable</Tooltip>}
//       placement="right"
//     >
//       <Form.Check
//         type="checkbox"
//         checked={selectedLectures.includes(pred.Predavanje_ID)}
//         onChange={() => handleCheckboxChange(pred.Predavanje_ID)}
//         disabled={pred.slobodnaMjesta <= 0 || pred.ukupnoMjesta === pred.brojPolaznika}
//       />
//     </OverlayTrigger>
//   </td>
//                   </td>
//                   <td>{pred.naziv}</td>
//                   <td>{pred.tip}</td>
//                   <td>{pred.opis}</td>
//                   <td>{pred.brojPolaznika}</td>
//                   <td>{pred.slobodnaMjesta}</td>
//                   <td>{pred.ukupnoMjesta}</td>
//                   <td>
//                     <Button
//                       variant="danger"
//                       type="delete"
//                       onClick={() => handleDeleteButton(pred.Predavanje_ID)}
//                     >
//                       Obriši
//                     </Button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="8">No data available</td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//         <Button onClick={() => handleSendSelectedPredavanje()}  variant='success'>Posalji odabrana predavanja</Button>
//         <br/><br/>
//         <Button onClick={handleSubmitSelection}>Odabir predavanja</Button>
//       </Row>
//     </Container>
//   </>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
//import socketClient  from "socket.io-client";
import { useNavigate } from 'react-router-dom';

export default function LectureSelection() {
 
  var allResultsNaziv = new Set();
  var data = [];
  var fetchingPredavanja = null;
  var storedRole = null
  if(localStorage.getItem('token')){
      storedRole = localStorage.getItem('token').split("+")[1];
  }
  
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLectures, setSelectedLectures] = useState([]);
  const [selectedLecturesNames, setSelectedLecturesNames] = useState([]);
 // const serverUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';
  //const socket = socketClient(serverUrl);
  const navigate = useNavigate();

  var receivedPsihologID = null
  
  if(localStorage.getItem('token')){
    receivedPsihologID = localStorage.getItem('token').split("+")[0];
  }
 
  
  
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



  const handleDeleteButton = async(predavanjeID) => {

    const response = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/deletePredavanje', {  //https://horizonti-snage.azurewebsites.net/insertData
    predavanjeID
  });
  try{
    
    setLista(response);
    console.log(lista)
    setLoading(false);
  }
  catch(error){
    setLista(null);
    setLoading(false);
  }
  
   
  


    //socket.emit('deletePredavanje', predavanjeID);
  };//ovjde napravi getPredavanja operaciju i 

  const handleCheckboxChange = (predavanjeID, naziv) => {
    if (selectedLectures.includes(predavanjeID)) {
      setSelectedLectures(selectedLectures.filter(id => id !== predavanjeID));
      setSelectedLecturesNames(selectedLecturesNames.filter(pred => pred !== naziv));
    } else {
      setSelectedLectures([...selectedLectures, predavanjeID]);
      setSelectedLecturesNames([...selectedLecturesNames,naziv]);
    }
  };

  const handleSendSelectedPredavanje = () => {
    //localStorage.setItem('token', tokenreceived);
    //localStorage.setItem('psihologID', receivedPsihologID);
    localStorage.setItem('myPredavanja', JSON.stringify(selectedLecturesNames));
    localStorage.setItem('myPredavanjaIDs', JSON.stringify(selectedLectures));
    if (selectedLectures.length === 0) {
      alert('Morate odabrati barem jedno predavanje!');
      return;
    }
    navigate('../createpredbiljezba');
  };

   
   useEffect(() => {
    
    async function fetchDataPredvanja() {
      // You can await here
      try{
        fetchingPredavanja = await sendGetRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/getPredavanja');
        console.log("unutar metode",fetchingPredavanja)
        
      setLoading(false);
      return fetchingPredavanja;
      }catch(error){
        setLista(null);
      setLoading(false);
      }
      
      // ...
    }
    async function fetchDataMyPredvanja() {
      var result = (await fetchDataPredvanja())
             
      try{ 

      
      data = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/getYourOwnPredbiljezbe', { 
        psihologID: receivedPsihologID
      });

      data.map(d => (
        allResultsNaziv.add(d.naziv)
      ))
      }catch (error) {
        // TypeError: Failed to fetch
        alert("Server trenutno nije u funckciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.")
        console.log('There was an error', error);
      }
      const presjek = result.filter(predavanje => !allResultsNaziv.has(predavanje.naziv));
      
  if(presjek != null){
    setLista(presjek)
  }
  else{
    setLista(fetchingPredavanja)
  }

    }
    fetchDataMyPredvanja();
        
       
  }, []);
    

  return (
    <>
      <p>Dostupna predavanja:</p>
      <Container>
        <Row>
          <Table striped bordered hover>
            <thead className="bg-primary">
              <tr>
                <th>Odabir</th>
                <th>Naziv</th>
                <th>Tip</th>
                <th>Opis</th>
                <th>Broj polaznika</th>
                <th>Slobodna mjesta</th>
                <th>Ukupno mjesta</th>
                {storedRole === 'admin' || storedRole === 'odbor' ? (
                <th>Brisanje predavanja:</th>):(null)}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="8">Loading...</td>
                </tr>
              ) : lista && lista.length != 0 ? (
                lista.map((pred) => (
                  <tr
                    className={`${
                      pred.slobodnaMjesta <= 0 || pred.ukupnoMjesta === pred.brojPolaznika
                        ? 'disabled-row'
                        : 'bg-warning'
                    }`}
                    key={pred.Predavanje_ID}
                  >
                    <td>
                      {pred.slobodnaMjesta <= 0 || pred.ukupnoMjesta === pred.brojPolaznika ? (
                        <td>
                          <OverlayTrigger
                            overlay={
                              <Tooltip
                                style={{
                                  fontSize: '14px',
                                  backgroundColor: 'red',
                                  border: '1px solid black',
                                }}
                              >
                                Ovo predavanje je popunjeno!
                              </Tooltip>
                            }
                            placement="right"
                          >
                            <Form.Check type="checkbox" disabled />
                          </OverlayTrigger>
                        </td>
                      ) : (
                        <Form.Check
                          type="checkbox"
                          checked={selectedLectures.includes(pred.Predavanje_ID)}
                          onChange={() => handleCheckboxChange(pred.Predavanje_ID, pred)}
                        />
                      )}
                    </td>
                    <td>{pred.naziv}</td>
                    <td>{pred.tip}</td>
                    <td>{pred.opis}</td>
                    <td>{pred.brojPolaznika}</td>
                    <td>{pred.slobodnaMjesta}</td>
                    <td>{pred.ukupnoMjesta}</td>
                    <td>
                    {(storedRole === 'admin' || storedRole === 'odbor') && pred.brojPolaznika == 0 ? (
                      <Button
                        variant="danger"
                        type="delete"
                        onClick={() => handleDeleteButton(pred.Predavanje_ID)}
                      >
                        Obriši
                      </Button>
                      
                    ):((storedRole === 'user'?(<p> </p>):(<p> Nije moguće obrisati aktivnost jer postoje predbilježbe na istu!.</p>)))}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">Trenutno ne postoji niti jedno predavanje ili su sva mjesta popunjena.</td>
                </tr>
              )}
            </tbody>
          </Table>
          <Button onClick={() => handleSendSelectedPredavanje()} variant="outline-dark">
            Sljedeći korak
          </Button>
        </Row>
      </Container>
    </>
  );
}



