//with searchstring
import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Button, Form } from 'react-bootstrap';
//import socketClient  from "socket.io-client";
import forbidden from '../assets/media/forbiden.jpg'
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
export default function LectureSelectionPredb() {
  const [isCreateButtonActive, setCreateButtonActive] = useState(true);
  const storedRole = localStorage.getItem('token').split("+")[1];
  const psihologID = localStorage.getItem('token').split("+")[0];
  let navigate = useNavigate();

  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  //const serverUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';
  //const socket = socketClient(serverUrl);

  

const handleNavigate = () => {
  navigate('../registrationfeesaccommodation/eventregistration');
}
 

  const handleGetYourOwnPredbiljezbe = async() => {
  var response = null
    try{ 
     response = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/getYourOwnPredbiljezbe', { 
      psihologID: psihologID
    });
    }catch (error) {
      // TypeError: Failed to fetch
      alert("Server trenutno nije u funckciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.")
      console.log('There was an error', error);
    }
    setLista(response)
    setCreateButtonActive(false)
  };

  const handleGetAllPredbiljezbe = async() => {
    try{ 
    const data = await sendGetRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/getPredbiljezbe')
    setLista(data.recordset)
    setCreateButtonActive(true)
    }catch (error) {
      // TypeError: Failed to fetch
      alert("Server trenutno nije u funckciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.")
      console.log('There was an error', error);
    }
  };

  useEffect(() => {
    var data = null;
    async function fetchData() {

      if(storedRole == "admin" || storedRole == "odbor"){
        try{ 
      data = await sendGetRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/getPredbiljezbe');
        }catch (error) {
          // TypeError: Failed to fetch
          alert("Server trenutno nije u funckciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.")
          console.log('There was an error', error);
        }
       }
       
      else {
        try{ 
      data = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/getYourOwnPredbiljezbe', { 
          psihologID: psihologID
        });
      }catch (error) {
        // TypeError: Failed to fetch
        alert("Server trenutno nije u funckciji. Molimo pokušajte kasnije ili nam se obratite na e-mail: horizontisnage@gmail.com.")
        console.log('There was an error', error);
      }
      }
      console.log('Received data:', data);
    
      try {
        if (data.recordset) {
          const predbiljezbeArray = data.recordset;
          setLista(predbiljezbeArray);
          setLoading(false);
        } else if (data) {
          const predbiljezbeArray = data;
          setLista(predbiljezbeArray);
          setLoading(false);
          
        }else{
          console.error('Received data is in an unexpected format:', data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error while processing data:', error);
        setLoading(false);
      }
}

      fetchData();
  
  }, []);
  var filteredList = []
  if(lista != null){
  filteredList = lista.filter((pred) => {
    const loweredSearchQuery = searchQuery.toLowerCase();
    return (
      pred.naziv.toLowerCase().includes(loweredSearchQuery) ||
      pred.tip.toLowerCase().includes(loweredSearchQuery) ||
      pred.ime.toLowerCase().includes(loweredSearchQuery) ||
      pred.prezime.toLowerCase().includes(loweredSearchQuery) ||
      pred.Vrijeme_predbiljezbe.toLowerCase().includes(loweredSearchQuery)
    );
  });
}

  return (
    <>
      {storedRole === null || psihologID === null ? (
        // <div><img src={forbiden} style={{width:'50px', height:'50p'}} alt='STOP'></img>You must login to see this page. You have not permission to enter this page. Go to ${handleNavigate} </div>
        <div>
    <img src={forbidden} style={{ width: '50px', height: '50px' }} alt='STOP' />
    Morate se prijaviti kao sudionik da biste vidjeli sadržaj ove stranice. Nemate pravo pristupa sadržaju ove stranice!{' '}
    <span onClick={() => navigate('../eventregistration')}style={{color: 'blue'}}>
      Prijavi se!
    </span>
  </div>
      ) : (
        <>
          <p>Predbilježbe:</p>
          <Container>
            <Row>
              {storedRole === 'admin' || storedRole === 'odbor' ? (
                <>
                  <Form.Group>
                    <Form.Label htmlFor='pretraga'>Pretraži predbilježbe:</Form.Label>
                    <Form.Control
                      name="pretraga"
                      id="pretraga"
                      type="text"
                      placeholder="Pretraga po nazivu, imenu, prezimenu, tipu predavanja ili vremenu predbilježbe..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </Form.Group>

                  <br />
                  <hr />

                  <Table striped bordered hover>
                    <thead className="bg-primary">
                      <tr>
                        <th>Ime: </th>
                        <th>Prezime: </th>
                        <th>Email: </th>
                        <th>Datum: </th>
                        <th>Naziv: </th>
                        <th>Tip: </th>
                        <th>Opis: </th>
                        <th>Vrijeme predbilježbe</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="8">Loading...</td>
                        </tr>
                      ) : filteredList.length === 0 ? (
                        <tr>
                          <td colSpan="8">Ne postoji niti jedna predbilježba.</td>
                        </tr>
                      ) : (
                        filteredList.map((pred) => (//ovo bi trebale biti sve predb
                          <tr className="bg-warning" key={pred.Predbiljezbe_ID}>
                            <td>{pred.ime}</td>
                            <td>{pred.prezime}</td>
                            <td>{pred.email}</td>
                            <td>{pred.datetime}</td>
                            <td>{pred.naziv}</td>
                            <td>{pred.tip}</td>
                            <td>{pred.opis}</td>
                            <td>{pred.Vrijeme_predbiljezbe}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                  {isCreateButtonActive ? (
                  <Button onClick={handleGetYourOwnPredbiljezbe}>Prikaz osobnih predbilježbi</Button>
                  ) : (
                  <Button onClick={handleGetAllPredbiljezbe} >Prikaz svih predbilježbi</Button>
                  )}
                </>
              ) : storedRole === 'user' && psihologID ? (
                <>
                  <Table striped bordered hover>
                    <thead className="bg-primary">
                      <tr>
                        <th>Ime: </th>
                        <th>Prezime: </th>
                        <th>Email: </th>
                        <th>Datum: </th>
                        <th>Naziv: </th>
                        <th>Tip: </th>
                        <th>Opis: </th>
                        <th>Vrijeme predbilježbe</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="8">Loading...</td>
                        </tr>
                      ) : filteredList.length === 0 ? (
                        <tr>
                          <td colSpan="8">Ne postoji niti jedna predbilježba.</td>
                        </tr>
                      ) : (
                        filteredList.map((pred) => ( //ovo je reyultat iy get zour own predb
                          <tr className="bg-warning" key={pred.Predbiljezbe_ID}>
                            <td>{pred.ime}</td>
                            <td>{pred.prezime}</td>
                            <td>{pred.email}</td>
                            <td>{pred.datetime}</td>
                            <td>{pred.naziv}</td>
                            <td>{pred.tip}</td>
                            <td>{pred.opis}</td>
                            <td>{pred.Vrijeme_predbiljezbe}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                  
                </>
              ) : null}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

// import React, { useState, useEffect } from 'react';
// import { Table, Container, Row, Button, Form } from 'react-bootstrap';
// import { io } from 'socket.io-client';

// export default function LectureSelectionPredb() {
//   const storedRole = localStorage.getItem('userRole');
//   if(psihologID===null){
//     console.log('PsihologID ne postoji!')
//   }
//   else{
   
//     const psihologID = JSON.parse(localStorage.getItem('psihologID').toString());
//   console.log(typeof psihologID);
//   }

//   const [lista, setLista] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');
//   const socket = io('http://localhost:8080');

  




 
//   const handleGetPredbiljezbe = () => {
  
//     socket.emit('getPredbiljezbe');
    
//   };
//   console.log('psihologID: '+psihologID);
//  const handleGetYourOwnPredbiljezbe = (psihologID) => {
  
//   socket.emit('getYourOwnPredbiljezbe', psihologID); // Emit the event with psihologID
// };

//   useEffect(() => {
//     socket.on('getPredbiljezbe', (data) => {
//       const predbiljezbeArray = data.recordset;
//       setLista(predbiljezbeArray);
//       setLoading(false);
//     });

//     socket.on('fetchingError', (errorMessage) => {
//       console.error('Error fetching data:', errorMessage);
//       setLoading(false);
//     });

//     return () => {
//       socket.off('getPredbiljezbe');
//       socket.off('fetchingError');
//     };
//   }, []);

//   useEffect(() => {
//     // socket.on('getYourOwnPredbiljezbe', (data) => {
//     //   const predbiljezbeArray = data.recordset;
//     //   setLista(predbiljezbeArray);
//     //   setLoading(false);
//     // });

//     // socket.on('getYourOwnPredbiljezbe', (data) => {
//     //   if (data && data.recordset) {
//     //     const predbiljezbeArray = data.recordset;
//     //     setLista(predbiljezbeArray);
//     //     setLoading(false);
//     //   } else {
//     //     console.error('Received data is invalid');
//     //   }
//     // });
  

   
//   }, []);

//   const filteredList = lista.filter((pred) => {
//     const loweredSearchQuery = searchQuery.toLowerCase();
//     return (
//       pred.naziv.toLowerCase().includes(loweredSearchQuery) ||
//       pred.tip.toLowerCase().includes(loweredSearchQuery) ||
//       pred.ime.toLowerCase().includes(loweredSearchQuery) ||
//       pred.prezime.toLowerCase().includes(loweredSearchQuery) ||
//       pred.Vrijeme_predbiljezbe.toLowerCase().includes(loweredSearchQuery)
//     );
//   });
//   return (
//     <>
//       <p>Predbilježbe:</p>
//       <Container>
//         <Row>
//           {storedRole === 'admin' || storedRole === 'odbor' ? (
//             <>
//               <Form.Group>
//                 <Form.Label htmlFor='pretraga'>Pretraži predbilježbe:</Form.Label>
//                 <Form.Control
//                   name="pretraga"
//                   id="pretraga"
//                   type="text"
//                   placeholder="Pretraga po nazivu, imenu, prezimenu, tipu predavanja ili vremenu predbilježbe..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </Form.Group>
  
//               <br />
//               <hr />
  
//               <Table striped bordered hover>
              
//               <thead className="bg-primary">
//                 <tr>
//                   <th>Ime: </th>
//                   <th>Prezime: </th>
//                   <th>Email: </th>
//                   <th>Datum: </th>
//                   <th>Naziv: </th>
//                   <th>Tip: </th>
//                   <th>Opis: </th>
//                   <th>Vrijeme predbilježbe</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td colSpan="8">Loading...</td>
//                   </tr>
//                 ) : filteredList.length === 0 ? (
//                   <tr>
//                     <td colSpan="8">No data available.</td>
//                   </tr>
//                 ) : (
//                   filteredList.map((pred) => (
//                     <tr className="bg-warning" key={pred.Predbiljezbe_ID}>
//                       <td>{pred.ime}</td>
//                       <td>{pred.prezime}</td>
//                       <td>{pred.email}</td>
//                       <td>{pred.datetime}</td>
//                       <td>{pred.naziv}</td>
//                       <td>{pred.tip}</td>
//                       <td>{pred.opis}</td>
//                       <td>{pred.Vrijeme_predbiljezbe}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </Table>
//               <Button onClick={handleGetPredbiljezbe}>Prikaz predbiljezbi</Button>
//             </>
//           ) : storedRole === 'user' && psihologID ? (<>
//              <Table striped bordered hover>
              
//               <thead className="bg-primary">
//                 <tr>
//                   <th>Ime: </th>
//                   <th>Prezime: </th>
//                   <th>Email: </th>
//                   <th>Datum: </th>
//                   <th>Naziv: </th>
//                   <th>Tip: </th>
//                   <th>Opis: </th>
//                   <th>Vrijeme predbilježbe</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td colSpan="8">Loading...</td>
//                   </tr>
//                 ) : filteredList.length === 0 ? (
//                   <tr>
//                     <td colSpan="8">No data available.</td>
//                   </tr>
//                 ) : (
//                   filteredList.map((pred) => (
//                     <tr className="bg-warning" key={pred.Predbiljezbe_ID}>
//                       <td>{pred.ime}</td>
//                       <td>{pred.prezime}</td>
//                       <td>{pred.email}</td>
//                       <td>{pred.datetime}</td>
//                       <td>{pred.naziv}</td>
//                       <td>{pred.tip}</td>
//                       <td>{pred.opis}</td>
//                       <td>{pred.Vrijeme_predbiljezbe}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </Table>
//             <Button onClick={() => handleGetYourOwnPredbiljezbe(psihologID)}>Osobne predbilježbe</Button>


//               </>
//           ) : (storedRole===null&& psihologID===null&&
//             <p>You don't have permission to enter this page.</p>
//           )}
//         </Row>
//       </Container>
//     </>
//   );


//        }


// import React,{useState,useEffect} from 'react'
// import {Table,Container,Row, Button} from 'react-bootstrap'
// import { io } from 'socket.io-client';
// // import Predavanje from '../dbFiles/Predavanje'
// // import { nanoid } from 'nanoid'
// export default function LectureSelectionPredb() { //tu mogu gurnuti prop i samo napisati psiholog

//     const [lista,setLista] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const socket = io('http://localhost:8080');

//     // Emit the event when you want to request the data
// const handleGetPredbiljezbe = () => {
//   socket.emit('getPredbiljezbe');
// };

//     const getPredbiljezbe = () => {
//       socket.emit('getPredbiljezbe');
//     };
  
//     useEffect(() => {
//       getPredbiljezbe();
  
      // socket.on('getPredbiljezbe', (predbiljezbe) => {
      //   setLista(predbiljezbe);
      //   console.log(predbiljezbe);
      //   setLoading(false);
       
      // });
      
    //   socket.on('getPredbiljezbe', (data) => {
    //     const predbiljezbeArray = data.recordset; // Extract the array from the received data
    //     setLista(predbiljezbeArray); // Update the state with the array
    //     setLoading(false);
    //   }); 
      
  
     
  
    //   socket.on('getPredbiljezbe', (errorMessage) => {
    //     console.error('Error fetching data:', errorMessage);
    //     setLoading(false);
    //   });
  
    //   return () => {
    //     socket.off('getPredbiljezbe');
    //     socket.off('fetchingError');
    //   };
    // }, []);

      //  const handlePredavanje = () => {
      //  const newValues = [{Predavanje_ID: `${Predavanje_ID}`,naziv:'Razvojna psihologija i napredak',tip:'Radionica',opis:'Ova radionica produbit će neke teme vezane uz Piageta',brojPolaznika:20 , slobodnaMjesta:20,ukupnoMjesta: 20,Psiholog_ID:'_uDxrnt4Jw'}]
      // //  setPredavanje(newValues);
      //  }

      //  const createPsiholog = async () => {
      //   if(psiho.Psiholog_ID && psiho.ime && psiho.prezime && psiho.email&&psiho.date){
      //     const newData = await fetch('/registrationfeesaccommodation/eventregistration',{
      //       method:'POST',
      //       headers: {
      //         'Content-Type':'application/json',
      //         'Accept': 'application/json'
      //       },
      //       body: JSON.stringify({...psiho})
      
      //     }).then((response) => {
      //       console.log(response);
      //     });
      //     console.log(newData);
      //   }
      // }
  
        
      
  

      // //chat gpt
      // const getPredbiljezbe = async () => {
      //   try {
      //     const response = await fetch('/registrationfeesaccommodation/lectureselectionpredb');
      //     if (!response.ok) {
      //       throw new Error('Network response was not ok');
      //     }
      
      //     const data = await response.json();
      //     setLista(data);
      //   } catch (error) {
      //     // Handle the error appropriately, for example, log it or show an error message
      //     console.error('Error fetching data:', error);
      //   }
      // };
      
    
//   return (
//     <>
//     <p>Predbilježbe:</p>
//     <Container>
//       <Row>
//         <Table striped bordered hover>
        
//           <thead className="bg-primary" mt-10>
//             <tr>
            
              
//               <th>Ime: </th>
//               <th>Prezime: </th>
//               <th>Email: </th>
//               <th>Datum: </th>
//               <th>Naziv: </th>
//               <th>Tip: </th>
//               <th>Opis: </th>
//               <th>Vrijeme predbilježbe</th>
             
              
            
//               {/* <th>Psiholog_ID: </th> */}
//             </tr>
//           </thead>
          
//           <tbody>
//           {loading ? (
//   <tr>
//     <td colSpan="7">Loading...</td>
//   </tr>
// ) : lista.length === 0 ? (
//   <tr>
//     <td colSpan="7">No data available.</td>
//   </tr>
// ) : (
//   lista.map((pred) => (
//     <tr className="bg-warning" key={pred.Predbiljezbe_ID}>
//       <td>{pred.ime}</td>
//       <td>{pred.prezime}</td>
//       <td>{pred.email}</td>
//       <td>{pred.datetime}</td>
//       <td>{pred.naziv}</td>
//       <td>{pred.tip}</td>
//       <td>{pred.opis}</td>
//       <td>{pred.Vrijeme_predbiljezbe}</td>
   
//     </tr>
//   ))
// )}
//           </tbody>
//         </Table>
//         <Button onClick={handleGetPredbiljezbe}>Prikaz predbiljezbi</Button>
//         <br />
//       </Row>
//     </Container>
//   </>
    
//       );
//     }
