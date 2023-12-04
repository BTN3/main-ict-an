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
     <Route path="dataprotection" element={<DataProtection/>}></Route>
     <Route path="eventregistration" element={<EventRegistration/>}></Route>
     <Route path="formsofparticipation" element={<FormsOfParticipation/>}></Route>
     <Route path="lectureselection" element={<LectureSelection/>}></Route>
     <Route path="lectureselectionpredb" element={<LectureSelectionPredb/>}></Route>
     <Route path="createpredavanje" element={<CreatePredavanje/>}></Route>
     <Route path="createpredbiljezba" element={<CreatePredbiljezba/>}></Route>
     <Route path="inserttoken" element={<InsertToken/>}></Route>
     <Route path="popissazetaka" element={<PopisSazetaka/>}></Route>
     </Routes>
    
     </div>
     <Footer/>
     </>
  )
}
