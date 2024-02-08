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
import '../AboutStyle.css'

export default function Fees() {
 
  return (
    <>
     <div style={{minHeight:'100vh'}}>
    <Navigation/>
  <Routes>
  <Route path="inserttoken" element={<InsertToken/>}></Route>
  <Route path="createpredbiljezba" element={<CreatePredbiljezba/>}></Route>
  <Route path="dataprotection" element={<DataProtection/>}></Route>
  <Route path="eventregistration" element={<EventRegistration/>}></Route>
  <Route path="formsofparticipation" element={<FormsOfParticipation/>}></Route>
  <Route path="lectureselection" element={<LectureSelection/>}></Route>
  <Route path="lectureselectionpredb" element={<LectureSelectionPredb/>}></Route>
  </Routes>
  <div style={{border:'2px solid black', padding:'10px'}}>
    <h4><span style={{color:'red'}}>  VAŽNO!</span>   Informacije o smještaju sudionika:</h4>
    <p>
   <p>Za sudionike 2. konferencije školskih psihologa osiguran je smještaj u hotelu International kojeg sudionici sami rezerviraju i plaćaju.</p>
   <h4>Uputa za rezervaciju smještaja</h4>
   <ul>
    <li className="red-square">Molim vas otvorite web stranicu hotela Hotel International Zagreb, Hrvatska - <a href='https://www.maistra.com/properties/hotel-international/#/'>  Službena stranica | Maistra</a> </li>
    <li className="red-square"> Odaberite REZERVIRAJ SADA</li>
    <li className="red-square"> Unesite promotivni kod PSYC i ažurirajte pretragu</li>
    <li className="red-square"> Odaberite željeni datum boravka i ponovno ažurirajte pretragu</li>
    <li className="red-square"> Odaberite željeni tip sobe i zatim odaberite "Rezerviraj sada"</li>
    <li className="red-square"> Slijedite daljnje korake i unesite potrebne podatke za rezervaciju</li>
</ul>
<h5>Verzija upute za rezervaciju smještaja na engleskom jeziku</h5>
<ul>
    <li className="red-square">Please open the website of Hotel International Zagreb, Croatia -  <a href='https://www.maistra.com/properties/hotel-international/#/'>Official Website | Maistra</a></li>
    <li className="red-square">Choose BOOK NOW</li>
    <li className="red-square">Enter promo code PSYC and update search</li>
    <li className="red-square">Select your preferred stay date and update search again</li>
    <li className="red-square">Choose your preferred room type and then select "Book now"</li>
    <li className="red-square">Follow the further steps and enter the necessary data to make a reservation</li>
</ul>
   <p>CIJENA: Classic soba za jednu osobu 95.00 EUR</p>
Classic soba za dvije osobe 105.00 EUR
<ul className="styled-list">
<li>Cijene smještaja izražene su po smještajnoj jedinici za jednu noć</li>
<li>Uključuju buffet doručak</li>
<li>Cijene uključuju boravišnu pristojbu, koja se naplaćuje dodatno u visini utvrđenoj pozitivnim propisima</li>
<li>Vrijeme prijave u hotel: od 15h, vrijeme odjave: do 11h</li>
<li>Nadoplata za ranu prijavu/kasnu odjavu iznosi 10.00 EUR po sobi po satu</li> 
<li>Uključuju besplatno korištenje Hotelske saune i Fitness centra</li>
<li>Uključuju besplatno korištenje brzog interneta u sobama</li>
<li>Uključuju uslugu nošenja prtljage in/out</li>
<li>Uključuju PDV</li>
</ul>
Otkaz pojedinačne rezervacije:
<p>- do 7 dana prije dolaska – bez naknade</p>
<p>- od 7 – 0 dana prije dolaska / no show – 100 % iznosa rezervacije.</p>
</p>
    </div>
    <div className="custom-div">
    <h4>Rok za prijavu sažetaka:</h4>
    <p style={{fontSize:'15pt'}}><b><span style={{ color: 'lightgreen' }}><span style={{color:'red'}}>NOVO! </span>Rok za prijavu sažetaka:</span></b> 15.siječnja 2024. </p>
      <h4>Cijena kotizacije:</h4>
   
      <p><b><span style={{ color: 'lightgreen' }}>Rana kotizacija:</span></b> do 31. prosinca 2023. – 30 € </p>
      <p><b><span style={{ color: 'orange' }}>Srednja kotizacija:</span></b> od 1. - 31. siječnja 2024. - 40 € </p>
      <p><b><span style={{ color: 'purple' }}>Kasna kotizacija:</span></b> od 1. veljače do 20. veljače 2024. - 50€ </p>
      <p> Umirovljenici i studenti diplomskog studija su oslobođeni plaćanja kotizacije,
         uz prethodnu prijavu do 20. veljače 2024.g. 
         Svi pasivni sudionici moraju se prijaviti do 20. veljače 2024.g. </p>
    </div>

    <Routes>
    
   
     
     
     <Route path="createpredavanje" element={<CreatePredavanje/>}></Route>
     {/* <Route path="createpredbiljezba" element={<CreatePredbiljezba/>}></Route> */}
     {/* <Route path="inserttoken" element={<InsertToken/>}></Route> */}
     <Route path="popissazetaka" element={<PopisSazetaka/>}></Route>
     <Route path="lectureselectionpredb" element={<LectureSelectionPredb/>}></Route>
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
  <div style={{border:'2px solid white',padding:'5px'}}>  <p style={{color:'lightgreen', fontSize:'14pt'}}><p style={{color:'red', fontSize:'18pt'}}>VAŽNO!</p>Ako vam je potreban R1 RAČUN ILI eRAČUN kao dokaz poslodavcu da ste izvršili uplatu s osobnog računa (radi refundacije troška), molimo javiti se s upitom na mail <a href='MAILTO:info@hermina-usluge.hr'>info@hermina-usluge.hr</a> </p>
</div>
</div>

    <div className="custom-div">
      <h4>Izjava o odricanju od odgovornosti za uplate:</h4>
      <div>Ovaj sustav prijave koristi usluge treće strane (agencije HERMINA d.o.o.) za obradu kotizacija. Molimo imajte na umu da Hrvatska psihološka komora kao organizator ne provodi izravnu naplatu kotizacija ili upravlja financijskim transakcijama. Sve transakcije, obrada plaćanja i sigurnosne mjere vezane uz plaćanje obavljaju se putem usluga agencije HERMINA d.o.o. Svi upiti, pritužbe ili pitanja vezana uz naplatu trebaju biti usmjerena prema njihovoj službi za korisnike.</div>
   

      
      
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
