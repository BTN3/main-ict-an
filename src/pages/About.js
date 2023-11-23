import React from 'react'
import { Routes,Route } from 'react-router-dom';
import ProgramOrganizingComittee from './ProgramOrganizingComittee';
import IntroductionSpeech from './IntroductionSpeech';
import Navigation from '../pages/Navigation';
import Footer from './Footer';
import PozvaniPredavaci from './PozvaniPredavaci';
import Organizatori from './Organizatori';
export default function About() {
  return (
    <>
   <Navigation/>
  
   <div className="custom-div">
      <h4>Tko smo?</h4>
      <p><b><span style={{ color: 'red' }}>Članovi programsko - organizacijskog odbora:</span></b> Snježana Kovač, Mislav Čupić, Ivana Delač, Natalia Dujić, Ivana Čorić, Aleksandra Huić, Gordana Kuterovac Jagodić, Anita Lauri Korajlija, Nada Kegalj,  Zvončica Kučanda</p>
      <p><b><span style={{ color: 'blue' }}>2. Konferencija "Horizonti snage"</span></b> - ove godine nastavljamo sa produkcijom novih ideja i najavljujemo generalnu temu - zajedništvo, budući da nas samo predan rad, zajedništvo i ustrajnost u pronošenju ideje o važnosti psihologije u školi mogu dovesti u kvalitetnije i bolje razdoblje školstva</p>
      <p style={ {color:'lightgray'}}><b>Posebna zahvala na doprinosu u izradi web stranice i aplikacije za Horizonte snage upućujem svojim bivšim učenicima, a sadašnjim velikim prijateljicama i prijateljima: Dori Medvarić, bez koje NIKAD ne bih toliko ustrajao i vjerovao u uspjeh ovog projekta, i Karlu Stjepanoviću, koji mi je pomogao da krenem u izradu ovog projekta, jer sam bio oduševljen njegovim oduševljenjem u projektiranju programskih projekata.</b></p>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
   <Routes>
   
   <Route path="introductionspeech" element={<IntroductionSpeech/>}></Route>
   <Route path="organizingcomettee" element={<ProgramOrganizingComittee/>}></Route>
   <Route path="pozvanipredavaci" element={<PozvaniPredavaci/>}></Route>
   <Route path="organizacija" element={<Organizatori/>}></Route>
 
  
   </Routes>
   <Footer/>
    </>
  )
}
