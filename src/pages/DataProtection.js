import React from 'react'
import { CardGroup, Container, Col, Row } from 'react-bootstrap'
import CardsMental from './CardsMental'
import '../FeesStyle.css'

export default function DataProtection() {
  return (
    <> 
<div className='custom-div'>
<h2>Politika privatnosti</h2>
<br/>


<section>
    <h3>Dobrodošli</h3>
    <p>
        Dobrodošli na našu web stranicu.
        Poštujemo vašu privatnost i posvećeni smo zaštiti vaših podataka.
        Ova politika privatnosti objašnjava koje informacije prikupljamo, kako ih koristimo i dijelimo
        te kako možete upravljati svojim podacima prilikom posjete naše web stranice.
    </p>
</section>


<section>
    <h3>Prikupljanje informacija</h3>
    <p>
        Koje informacije prikupljamo? 
        <br/>
        {/* Prikupljamo određene podatke kako bismo poboljšali vaše iskustvo na našoj web stranici.
        To može uključivati informacije o vašem pregledniku, IP adresi, aktivnostima na stranici i slično.
        Ne prikupljamo osobne podatke bez vašeg izričitog pristanka. */}
        Trenutno ne prikupljamo informacije o vašim navikama pretraživanja ove web stranice/aplikacije. 
        Sve podatke koje unosite, unosite isključivo u svrhu prijave na Konferenciju. 
    </p>
</section>


<section>
    <h3>Dijeljenje podataka</h3>
    <p>
        Kako dijelimo vaše podatke:
        Vaše podatke nećemo prodavati, iznajmljivati ili dijeliti s trećim stranama bez vašeg pristanka,
        osim ako to nije neophodno za pružanje usluga koje tražite ili ako to zahtijeva zakon. Podatke koje sami unosite služe isključivo u svrhu prijave na Konferenciju.
        Unosom podataka pristajete na to da Vas sa e-mail adrese <em> <a href='horizontisnage@gmail.com'/></em> kontaktiramo u svrhu verifikacije i potvrde sudjelovanja te prijave na aktivnosti s ograničenim brojem polaznika.
    </p>
</section>


<section>
    <h3>Kolačići</h3>
    <p>
        Koristimo kolačiće radi poboljšanja funkcionalnosti web stranice i prilagođavanja sadržaja vašim interesima.
        Možete kontrolirati ili obrisati kolačiće u postavkama preglednika.
        Brisanjem lokalne pohrane moguće su neke smanjene funkcionalnosti kod prijavnog procesa.
    </p>
</section>


<section>
    <h3>Prava korisnika/Kontakt</h3>
    <p>
        Vaša prava:
        Imate pravo zatražiti pristup, ispravak, brisanje ili ograničavanje korištenja vaših osobnih podataka unatoč tome što ste sami kontrolirate unos podataka.
        Također imate pravo prigovora na način na koji obrađujemo vaše podatke, ukoliko postoji ikakav prigovor molimo obratite se na <em> <a href='horizontisnage@gmail.com'/></em>, a mi ćemo se potruditi u što moguće kraćem roku odgovoriti na vašu primjedbu ili upit.
    </p>
</section>

<section>
    <h3>Sigurnost podataka</h3>
    <p>
        Poduzimamo odgovarajuće mjere kako bismo zaštitili vaše podatke od neovlaštenog pristupa, gubitka,
        zlouporabe ili oštećenja. 
    </p>
</section>

<section>
    <h3>Završne napomene</h3>
    <p>
        Ova politika privatnosti može se povremeno mijenjati kako bismo odražavali promjene u praksi prikupljanja
        podataka i zakonskim zahtjevima. Preporučujemo vam da povremeno provjerite ovu stranicu radi ažuriranja.
    </p>
</section>

<section>
    <h3>Datum posljednje izmjene</h3>
    <p>Datum posljednje izmjene: 28.11.2023.</p>
</section>

<section>
    <h3>Zahvala</h3>
    <p>Hvala vam što koristite našu web stranicu i sustav za prijavu korisnika.</p>
</section>
</div>

  </>
  )
}
