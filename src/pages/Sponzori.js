import React from 'react';
import coca from '../assets/media/coca-cola.png';
import certitudo from '../assets/media/certitudo-removebg-preview.png';
import loreal from '../assets/media/LOREAL_0306452_ORI.png';
import tcom from '../assets/media/T-removebg-preview.png';
import slap from '../assets/media/logo_Naklada Slap (1) (1).jpg'
import '../FeesStyle.css';


export default function Sponzori() {
  return (
    <div className="organizatori-container">
      <a href='https://hr.coca-colahellenic.com/hr' className="organizator">
        <img src={coca} alt='coca-cola' className="organizator-logo" />
      </a>
      <a href='https://www.facebook.com/Certitudozazastupanjeuosiguranju/?locale=hr_HR' className="organizator">
        <img src={certitudo} alt='certitudo' className="organizator-logo" />
      </a>
      
      <a href='https://www.loreal.com/hr-hr/adria-balkan/' className="organizator">
        <img src={loreal} alt='Ff fotografija' className="organizator-logo" />
      </a>
      <a href='https://www.t.ht.hr/' className="organizator">
        <img src={tcom} alt='Ff fotografija' className="organizator-logo" />
      </a>
      <a href='https://www.nakladaslap.com/' className="organizator">
        <img src={slap} alt='Ff fotografija' className="organizator-logo" />
      </a>
    </div>
  );
}
