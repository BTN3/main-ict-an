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

export default function Fees() {
 
  return (
    <>
    <Navigation/>
    <div><h4>Cijena kotizacije:</h4>
      
    <pre><b> Rana kotizacija:</b> do 31. prosinca 2023. – 30 € </pre>
    <pre><b> Srednja kotizacija:</b> od 1. - 31. siječnja 2024. - 40 €  </pre>
    <pre><b> Kasna kotizacija:</b> od 1. veljače do 20. veljače 2024. - 50€  </pre>
    <pre> Umirovljenici i studenti diplomskog studija su oslobođeni plaćanja kotizacije,
           uz prethodnu prijavu do 20. veljače 2024.g. 
           Svi pasivni sudionici moraju se prijaviti do 20. veljače. </pre>  

  

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
     <Footer/>
     </>
  )
}
