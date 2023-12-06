import React from 'react'
import { Routes,Route } from 'react-router-dom';
import ProgramOrganizingComittee from './ProgramOrganizingComittee';
import IntroductionSpeech from './IntroductionSpeech';
import Navigation from '../pages/Navigation';
import Footer from './Footer';
import PozvaniPredavaci from './PozvaniPredavaci';
import Organizatori from './Organizatori';
import Fotografije from './Fotografije'
export default function About() {
  return (
    <>
    <div style={{minHeight:'100vh'}}>
   <Navigation/>
  
   <div className="custom-div">
      <h4>Tko smo?</h4>
      <p>
  <b>
    <span style={{ color: 'lightgreen' }}>Članovi programsko - organizacijskog odbora:</span>
  </b>
</p>
<ul>
  <li>Ivana Čorić</li>
  <li>Mislav Čupić</li>
  <li>Ivana Delač</li>
  <li>Natalia Dujić</li>
  <li>Aleksandra Huić</li>
  <li>Nada Kegalj</li>
  <li>Snježana Kovač</li>
  <li>Zvončica Kučanda</li>
  <li>Gordana Kuterovac Jagodić</li>
  <li>Antonija Vrdoljak</li>
 
 

</ul>
      {/* <p><b><span style={{ color: 'orange' }}>2. Konferencija "Horizonti snage"</span></b> - ove godine nastavljamo sa produkcijom novih ideja i najavljujemo generalnu temu - zajedništvo, budući da nas samo predan rad, zajedništvo i ustrajnost u pronošenju ideje o važnosti psihologije u školi mogu dovesti u kvalitetnije i bolje razdoblje školstva</p> */}
     
      </div>
      <br/>
      <br/>
   
   <Routes>
   
   <Route path="introductionspeech" element={<IntroductionSpeech/>}></Route>
   <Route path="organizingcomettee" element={<ProgramOrganizingComittee/>}></Route>
   <Route path="pozvanipredavaci" element={<PozvaniPredavaci/>}></Route>
   <Route path="organizacija" element={<Organizatori/>}></Route>
   <Route path="photos" element={<Fotografije/>}></Route>
 
  
   </Routes>
  
   <Footer/>
   </div>
    </>
  )
}
