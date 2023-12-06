import React from 'react'
import Navigation from './Navigation'
import DataProtection from './DataProtection'
import {Routes,Route} from 'react-router-dom'
import EventRegistration from './EventRegistration'
import Footer from './Footer'
import FormsOfParticipation from './FormsOfParticipation'
import LectureSelection from './LectureSelection'
import LectureSelectionPredb from './LectureSelectionPredb'
import CreatePredavanje from './CreatePredavanje'
import CreatePredbiljezba from './CreatePredbiljezba'
import InsertToken from './InsertToken'
import PopisSazetaka from './PopisSazetaka'
import '../FeesStyle.css'

export default function Fees() {
 
  return (
    <>
     <div style={{minHeight:'100vh'}}>
    <Navigation/>
  <Routes>
  <Route path="dataprotection" element={<DataProtection/>}></Route>
  <Route path="eventregistration" element={<EventRegistration/>}></Route>
  <Route path="formsofparticipation" element={<FormsOfParticipation/>}></Route>
  </Routes>
    <div className="custom-div">
      <h4>Cijena kotizacije:</h4>
      <p><b><span style={{ color: 'lightgreen' }}>Rana kotizacija:</span></b> do 31. prosinca 2023. – 30 € </p>
      <p><b><span style={{ color: 'orange' }}>Srednja kotizacija:</span></b> od 1. - 31. siječnja 2024. - 40 € </p>
      <p><b><span style={{ color: 'purple' }}>Kasna kotizacija:</span></b> od 1. veljače do 20. veljače 2024. - 50€ </p>
      <p> Umirovljenici i studenti diplomskog studija su oslobođeni plaćanja kotizacije,
         uz prethodnu prijavu do 20. veljače 2024.g. 
         Svi pasivni sudionici moraju se prijaviti do 20. veljače 2024.g. </p>
    </div>

    <Routes>
    
   
      <Route path="lectureselection" element={<LectureSelection/>}></Route>
     <Route path="lectureselectionpredb" element={<LectureSelectionPredb/>}></Route>
     <Route path="createpredavanje" element={<CreatePredavanje/>}></Route>
     <Route path="createpredbiljezba" element={<CreatePredbiljezba/>}></Route>
     <Route path="inserttoken" element={<InsertToken/>}></Route>
     <Route path="popissazetaka" element={<PopisSazetaka/>}></Route>
      </Routes>
    <div className="custom-div">
      
    <h4>Način uplate kotizacije:</h4>
  <h4><span style={{color:'orange'}}>Tvrtka: </span>HERMINA USLUGE d.o.o.</h4>
  <h5><span style={{color:'orange'}}>Kontakt osoba: </span>Nevena Bebek</h5>
  <p><span style={{color:'orange'}}>E-mail:</span> <a href='MAILTO:info@hermina-usluge.hr'>info@hermina-usluge.hr</a> </p>
  <p><span style={{color:'orange'}}>Kontakt broj:</span> +385 98 934 4517</p>
  <p>Kotizaciju je potrebno uplatiti na transakcijski račun prema sljedećim podacima:</p>
  <p><span style={{color:'orange'}}>Primatelj:</span> HERMINA USLUGE d.o.o., Josipa Jurja Strossmayera 16, 32000 Vukovar, Hrvatska</p>
  <p><span style={{color:'orange'}}>Banka:</span> Raiffeisenbank Austria d.d., Magazinska cesta 69, 10000 Zagreb, Hrvatska</p>
  <p><span style={{color:'orange'}}>IBAN:</span> {process.env.REACT_APP_IBAN_HERMINA}</p>
  <p><span style={{color:'orange'}}>SWIFT: </span>RZBHHR2X</p>
  <p><span style={{color:'orange'}}>Model: </span> HR00</p>
  <p><span style={{color:'orange'}}>Poziv na broj:</span> 2226-2023</p>
  <p><span style={{color:'orange'}}>Svrha uplate/Opis plaćanja: </span>Kotizacija za 2. konferenciju školskih psihologa</p>
  <p>Prilikom uplate potrebno je navesti ime i prezime sudionika, te naziv institucije.</p>
</div>

    <div className="custom-div">
      <h4>Izjava o odricanju od odgovornosti za uplate:</h4>
      <div>Ovaj sustav naplate koristi usluge treće strane (agencije HERMINA d.o.o.) za obradu kotizacija. Molimo imajte na umu da Hrvatska psihološka komora kao organizator ne provodi izravnu naplatu kotizacija ili upravlja financijskim transakcijama. Sve transakcije, obrada plaćanja i sigurnosne mjere vezane uz plaćanje obavljaju se putem usluga agencije HERMINA d.o.o. Svi upiti, pritužbe ili pitanja vezana uz naplatu trebaju biti usmjerena prema njihovoj službi za korisnike.</div>
   

      
      
    </div>
     <Routes>
    
     {/* <Route path="eventregistration" element={<EventRegistration/>}></Route> */}
     {/* <Route path="formsofparticipation" element={<FormsOfParticipation/>}></Route> */}
     {/* <Route path="lectureselection" element={<LectureSelection/>}></Route>
     <Route path="lectureselectionpredb" element={<LectureSelectionPredb/>}></Route>
     <Route path="createpredavanje" element={<CreatePredavanje/>}></Route>
     <Route path="createpredbiljezba" element={<CreatePredbiljezba/>}></Route>
     <Route path="inserttoken" element={<InsertToken/>}></Route>
     <Route path="popissazetaka" element={<PopisSazetaka/>}></Route> */}
     </Routes>
    
     </div>
     <Footer/>
     </>
  )
}
