
import React, { useState, useEffect } from 'react';
//const io = require('socket.io-client');
import { Table, Form } from 'react-bootstrap';
import DownloadLink from './DownloadLink';
import forbidden from '../assets/media/forbiden.jpg'


const sendRequest = async (url) => {
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
const PopisSazetaka = () => {
  const storedRole = localStorage.getItem('token').split("+")[1];
  const [sazetciData, setSazetciData] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
  
    async function fetchData() {
      const response = await sendRequest(process.env.REACT_APP_HOSTNAME_BACKEND+'/api/sazeci');
      console.log("sazeci",response)
      setSazetciData(response)
    }
    fetchData()
   
  
}, []);
 /* useEffect(() => {
    const socket = io();

    socket.on('connect', () => {
      console.log('Connected to server:', socket.id);
      socket.emit('fetchSazetci');
    });

    socket.on('sazetciData', (fetchedSazetciData) => {
      setSazetciData(fetchedSazetciData);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
*/
  // Function to filter sazetciData based on the search string
  const filteredSazetci = sazetciData.filter((sazetak) => {
    const searchStr = searchString.toLowerCase();
    return (
      sazetak.ime.toLowerCase().includes(searchStr) ||
      sazetak.prezime.toLowerCase().includes(searchStr) ||
      sazetak.email.toLowerCase().includes(searchStr) || sazetak.Oblik_sudjelovanja.toLowerCase().includes(searchStr)
    );
  });

//   return (
//     <div className="container mt-5">
//       {storedRole === 'admin' && (
//         <>
//           <h1>Popis Sažetaka</h1>
//           <Form.Group controlId="search">
//             <Form.Label>Search</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter search string"
//               value={searchString}
//               onChange={(e) => setSearchString(e.target.value)}
//             />
//           </Form.Group>
//           <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Ime</th>
//             <th>Prezime</th>
//             <th>Email</th>
//             <th>Oblik sudjelovanja</th>
//             <th>Files</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredSazetci.map((sazetak) => (
//             <tr key={sazetak.SažetakID}>
//               <td>{sazetak.ime}</td>
//               <td>{sazetak.prezime}</td>
//               <td>{sazetak.email}</td>
//               <td>{sazetak.Oblik_sudjelovanja}</td>
//               <td>
//                 {Array.isArray(sazetak.FileData) ? (
//                   sazetak.FileData.map((fileData, index) => (
//                     <DownloadLink key={index} fileData={fileData} fileName={sazetak.FileName}
//                    />
//                   ))
//                 ) : (
//                   <DownloadLink fileData={sazetak.FileData} fileName={sazetak.FileName} />
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       </>
//       )}
//     </div>
      
//   );
// };
return (
  <div className="container mt-5">
    {storedRole === 'admin' || storedRole==='odbor'  ? (
      <>
        <h1>Popis Sažetaka</h1>
        <Form.Group controlId="search">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search string"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </Form.Group>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Ime</th>
              <th>Prezime</th>
              <th>Email</th>
              <th>Oblik sudjelovanja</th>
              <th>Files</th>
            </tr>
          </thead>
          <tbody>
            {filteredSazetci.map((sazetak) => (
              <tr key={sazetak.SažetakID}>
                <td>{sazetak.ime}</td>
                <td>{sazetak.prezime}</td>
                <td>{sazetak.email}</td>
                <td>{sazetak.Oblik_sudjelovanja}</td>
                <td>
                  {Array.isArray(sazetak.FileData) ? (
                    sazetak.FileData.map((fileData, index) => (
                      <DownloadLink key={index} fileData={fileData} fileName={sazetak.FileName} />
                    ))
                  ) : (
                    <DownloadLink fileData={sazetak.FileData} fileName={sazetak.FileName} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    ) : (
      <div><img src={forbidden} alt='forbidden' style={{ width: '50px', height: '50px', backgroundColor: 'transparent', opacity: 0.9}} ></img>Nemate pravo na pristup sadržaju ove stranice.</div>
    )}
  </div>
);
}
export default PopisSazetaka;
