import React from 'react';
import komora from '../assets/media/HPK-logo.png';
import azoo from '../assets/media/azoo2.png';
import ff from '../assets/media/FFZG150-removebg-preview.png';
import '../FeesStyle.css';


export default function Organizatori() {
  return (
    <div className="organizatori-container">
      <a href='https://www.psiholoska-komora.hr/' className="organizator">
        <img src={komora} alt='HPK fotografija' className="organizator-logo" />
      </a>
      <a href='https://www.azoo.hr/' className="organizator">
        <img src={azoo} alt='AZOO photo' className="organizator-logo" />
      </a>
      <a href='https://web2020.ffzg.unizg.hr/' className="organizator">
        <img src={ff} alt='Ff fotografija' className="organizator-logo" />
      </a>
    </div>
  );
}
