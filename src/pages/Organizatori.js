import React from 'react'
import komora from '../assets/media/image.png'
import azoo from '../assets/media/azoo.jpg'
import ff from '../assets/media/ffzg-main-logo-classic-top-small-20-mobile.png'
import '../FeesStyle.css'

export default function Organizatori() {
  return (
    <> <div className='custom-div' style={{textAlign:'center'}}>
      <a href='https://www.psiholoska-komora.hr/'>  <img  src={komora} alt='HPK fotografija' style={{width:'200px', height:'200px'}}/></a>
      <a href='https://www.azoo.hr/'>  <img  src={azoo} alt='AZOO photo' style={{width:'200px', height:'200px'}}/></a>
      <a href='https://web2020.ffzg.unizg.hr/'>  <img  src={ff} alt='Ff fotografija' style={{width:'350px', height:'200px'}}/></a>
   
    <div> </div>
    
  </div></>
   
  )
}
