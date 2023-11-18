const express = require('express');
const http = require('http');
//const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
//const io = socketIo(server);
const cors = require('cors');
const port = process.env.PORT || 8080;
const nodemailer = require('nodemailer');
const path = require('path');

const fs = require('fs').promises;
 const {authPage,authPred} = require('./src/middlewares')

// Serve static files (build folder) for the React app
app.use(express.static(path.join(__dirname, 'build')));


// Catch-all route to serve index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Import database operations
// Import database operations
// const { createPsiholog, getPredavanja, getPredbiljezbe, createPredavanje, deletePredavanje, createPredbiljezba,updatePredavanje, getPredavanjeByID, createSazetci,fetchSazetciWithPsihologData,getYourOwnPredbiljezbe, checkPsihologByToken} = require('./src/dbFiles/dbOperation');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = ['https://horizonti-snage.azurewebsites.net']; // Add the URL of your React app

app.use(cors({
  origin: allowedOrigins,
}));
// // const express = require('express');
// const http = require('http');
// const nodemailer = require('nodemailer');
const { createPsiholog, createSazetci } = require('./src/dbFiles/dbOperation');

// const app = express();
// const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


function sendEmail(userPsiholog) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mislav.cupic@gmail.com',
        pass: process.env.REACT_APP_GOOGLE_PASS,
      },
    });

    const mailConfigs = {
      from: 'mislav.cupic@gmail.com',
      to: userPsiholog.email,
      subject: 'Potvrda prijave na stručni skup',
      text: `Pozdrav ${userPsiholog.ime} ${userPsiholog.prezime},
       Vaša prijava na stručni skup "Horizonti snage" uspješno je izvršena
       dana ${userPsiholog.date}. Vaša kontakt mail adresa je
       ${userPsiholog.email}. Čuvajte ovu poruku jer se na njoj nalazi i
       token s kojim ćete se kasnije prijavljivati na predavanja. Vaš token
       za prijavu na predavanja: ${userPsiholog.psiholog_ID}`,
    };

    transporter.sendMail(mailConfigs, (err, info) => {
      if (err) {
        console.error(err);
        reject({ message: 'an error has occurred' });
      } else {
        resolve({ message: 'Vaši podaci uspješno su spremljeni' });
      }
    });
  });
}

 function insertData (data)  {
  return new Promise(async (resolve, reject) => {
    try {
      await createPsiholog(data);

      if (data.participantType === 'Aktivni sudionik' && data.uploadedFiles.length > 0) {
        for (let i = 0; i < data.uploadedFiles.length; i++) {
          const uploadedFile = data.uploadedFiles[i].file;
          const oblikSudjelovanja = data.oblikSudjelovanja[i];
          const sazetciData = {
            Sažetak_ID: data.Sazetci_IDs[i],
            Psiholog_ID: data.Psiholog_ID,
            FileName: uploadedFile.name,
            FileType: uploadedFile.type,
            FileData: uploadedFile.content,
            OblikSudjelovanja: oblikSudjelovanja,
            Role: data.role,
            
          };

          await createSazetci(
            sazetciData.Sažetak_ID,
            sazetciData.Psiholog_ID,
            sazetciData.FileName,
            sazetciData.FileType,
            sazetciData.FileData,
            sazetciData.OblikSudjelovanja
          );
        }
      }

      resolve({ message: 'Data inserted successfully' });
    } catch (error) {
      console.error('Error while inserting data:', error);
      reject({ message: 'An error occurred' });
    }
  });
};
// Assuming createPsiholog and createSazetci functions are correctly defined
// ...


// ...

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
