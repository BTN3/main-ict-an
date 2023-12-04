import React from 'react'
import '../FeesStyle.css'
import { Card,Row,Col } from 'react-bootstrap'
import photo from '../assets/media/Slika1.png'


export default function IntroductionSpeech() {
  const title = 'Pozivno pismo';
  const subtitle = '2. konferencija "Horizonti snage"'
  // s
  return (
    <Card>
    <Card.Body  style={{ color: 'black' }}>
      <Row>
    
        <Col md={12}>
          
          <Card.Title style={{fontSize:'23px' ,color:'purple', textAlign:'center'}}>{title}</Card.Title>
          <Card.Text style={{fontSize:'23px' ,color:'purple', textAlign:'center'}} >{subtitle}</Card.Text>
          {/* <Card.Text>{description}</Card.Text> */}
          <Card.Text   className='text-black' style={{ fontFamily:'Copperplate', textAlign: 'justify', maxWidth: '69%', margin: '0 auto' ,border: '10px purple outset', padding:'5px', fontSize:'20px' }}>
          <div style={{margin:'5px'}}>  <img
                    src={photo}
                    alt='Predavač'
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%) scale(1)',
                      maxWidth: '80%',
                      maxHeight: '80%',
                      width: 'auto',
                      height: 'auto',
                      transition: 'transform 0.3s ease-in-out',
                      opacity: 0.2
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.3)')
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)')
                    }
                  />
Drage kolegice i kolege, <br/><br/>
 
 s veseljem vas pozivamo na 2. konferenciju školskih psihologa „Horizonti snage“               koja će se održati 29. veljače i 1. ožujka 2024. godine u Zagrebu u organizaciji Hrvatske psihološke komore, Agencije za odgoj i obrazovanje te Odsjeka za psihologiju Filozofskog fakulteta u Zagrebu, koji će i ovaj put biti naš domaćin. 
 
 Prva konferencija školskih psihologa "Horizonti snage" održana u veljači ove godine okupila je više od 450 školskih psihologa i nastavnika psihologije, što je činilo preko polovine psihologa zaposlenih u hrvatskim školama. Konferencija je, prije svega, bila mjesto susreta i podrške, mjesto s kojeg smo otišli osnaženi za našu društveno važnu ulogu. Uz sadržajno bogat program, na konferenciji smo po prvi put vidjeli i neke nove oblike izlaganja koji su inspirirali i organizatore drugih susreta psihologa koji su uslijedili. To je samo jedna u nizu pozitivnih promjena koje je konferencija potaknula, no to nije jedino čemu smo stremili.  
 
 Nadali smo se promjenama koje će biti znak da postajemo sve primjećeniji u društvu. U tom smislu posebno nas veseli činjenica da je broj psihologa zaposlenih u školama svaki dan sve veći i približava se tisućici, a posljednjih dana nas je ugodno iznenadila i odluka nadležnog ministarstva da školskim psiholozima osigura i nužna sredstva za rad - psihodijagnostičke instrumente.  
 
 Vjerujemo da svaka nova konferencija čini korak prema većoj prepoznatljivosti uloge i važnosti školskih psihologa za društvo. Pozivamo vas stoga da nam se pridružite i prijavite svoje sudjelovanje na 2. konferenciji školskih psihologa te tako date svoj vrijedan doprinos u ostvarenju ovog cilja. <br/><br/>
<br/>
<ul>

Također vas pozivamo da nas pratite i na društvenim mrežama:
  <li>Facebook:<a href='https://www.facebook.com/profile.php?id=100088355045678'>https://www.facebook.com/profile.php?id=100088355045678 </a></li>
  <li>Instagram: <a href='https://instagram.com/horizonti_snage?igshid=YTQwZjQ0NmI0OA=='>https://instagram.com/horizonti_snage?igshid=YTQwZjQ0NmI0OA== </a></li>
  </ul>

  <br/><br/>

Veselimo se novom susretu i zajedničkom radu!
<br/>
<em>Programsko-organizacijski odbor </em>
<br/>
<br/>
 <ul><li>Važni datumi:</li>
 <li>Rok za prijavu sažetaka: 31.12.2023.</li>
 <li>Rana prijava (rana kotizacija): do 31.12.2023.</li>
 <li>Srednja prijava (srednja kotizacija):  od 1.1. -  31.01.2024.</li>
 <li>Kasna prijava (kasna kotizacija): od  1.2. - 20.2.2024.</li></ul>  </div>

 



          </Card.Text>
        </Col>
      </Row>
    </Card.Body>
  </Card>

   
  )
}
