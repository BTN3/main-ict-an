import React, { useState } from 'react'
import PozvaniPredavaciCard from './PozvaniPredavaciCard'
import photoMojca from '../assets/media/Mojca.jpeg'
import CV_Mojca from '../assets/documents/CV_Mojca_Jurišević.pdf'
import photoNina from '../assets/media/Nina Pavlin - Bernardić.png'
import CV_Nina from '../assets/documents/CV_Pavlin-Bernardić - sažetak predavanja.pdf'
import photoAnita from '../assets/media/hpk.JPG'
import profilePhoto from '../assets/media/profile-icon-design-free-vector.jpg'


export default function PozvaniPredavaci() {
    const [isTrue, setIsTrue] = useState(true);
    return (
        <>
          {isTrue && <PozvaniPredavaciCard
            title='Thinking deeply or thinking clearly? The Role of Creativity in Education '
            subtitle='prof.dr.sc. Mojca Juriševič'
            description='Mojca Juriševič, profesorica je psihologije obrazovanja na Pedagoškom fakultetu Sveučilišta u Ljubljani, Slovenija. Njezin znanstveni interes usmjeren je na motivaciju za učenje, profesionalni razvoj učitelja i proučavanje darovitosti i obrazovanja darovitih. Osnivačica je i ravnateljica Centra za istraživanje i promicanje darovitosti na Pedagoškom fakultetu u Ljubljani. Također je jedna od osnivača Europske mreže za potporu talentima (European Talent Support Network) i nacionalna izaslanica Svjetskog vijeća za darovitu i talentiranu djecu (World Council for Gifted and Talented Children), a u tom je vijeću izabrana za članicu Izvršnog odbora za razdoblje od 2022. do 2025. godine. Prof.dr.sc. Mojca Juriševič članica je Izvršnog odbora Društva psihologa Slovenije, a u razdoblju od 2015. do 2023. bila je u predsjednica Sekcije za psihologe u obrazovanju toga društva. Od 2018. prof.dr.sc. Juriševič je nacionalna predstavnica u Stalnom odboru za psihologiju obrazovanja u Europskoj federacije udruga psihologa (EFPA). Redovita je članica Međunarodnog društva za proučavanje kreativnosti i inovativnosti (International Society for the Study of Creativity and Innovation) te pridružena članica Američkog psihološkog društva (APA). Godine 2020. prof. dr.sc. Juriševič nagrađena je slovenskom Državnom nagradom za izvanredna postignuća u visokom obrazovanju, a 2023. godine proglašena je Kongresnom veleposlanicom Slovenije za uspješno vođenje znanstvenog odbora 17. Europskog kongresa psihologije.

            '
            photo={photoMojca}
            cv={CV_Mojca}
          />}

         {isTrue && <PozvaniPredavaciCard
            title='Naslov rada'
            subtitle='dr.sc.Iris Marušić'
            description='Iris Marušić je znanstvena savjetnica u Centru za istraživanje i razvoj obrazovanja Instituta za društvena istraživanja u Zagrebu. U središtu njezinih istraživačkih interesa su profesionalna dobrobit učitelja i nastavnika, učiteljska motivacija te uloga ličnosti u obrazovanju.  Trenutačno vodi projekt Hrvatske zaklade za znanost posvećen istraživanju individualnih odrednica dobrobiti učitelja na početku karijere. Uz istraživački rad, Iris Marušić je i edukatorica u programu razvoja socio-emocionalnih kompetencija i svijesti o različitosti kod učitelja koji  je dio međunarodnih Erasmus projekata.  

            Rezultate svojih istraživanja objavila  je u pedesetak znanstvenih radova, nekoliko poglavlja u knjigama, studija te stručnih članaka. Sudjelovala je s priopćenjima na šezdesetak međunarodnih i domaćih skupova. Bila je članica radnih skupina za  izradu ključnih nacionalnih strateških dokumenata u području obrazovanja te članica  Razreda za školsku psihologiju Hrvatske psihološke komore.  '
            photo={profilePhoto}
          
          />}
        
          {isTrue && <PozvaniPredavaciCard
            title='„Škola kao sigurno mjesto: Osnaživanje školskih psihologa za podršku djeci žrtvama obiteljskog zlostavljanja“ '
            subtitle='izv. prof. dr. sc. Anita Lauri Korajlija'
            description='Anita Lauri Korajlija 1994. godine upisala je studij psihologije na Odsjeku za psihologiju Filozofskog fakulteta u Zagrebu. Diplomirala je 1999. godine te iste godine upisala je poslijediplomski studij psihologije, završivši ga uspješnom obranom magisterija 2004. godine. U ožujku 2010. godine obranila je doktorsku disertaciju s temom „Perfekcionizam i anksiozna osjetljivost kao rizični faktori za razvoj anksioznih smetnji: Kvantitativna i kvalitativna studija“ pod mentorstvom prof. dr. Nataše Jokić-Begić. Nakon diplome sudjelovala je na više stručnih i znanstvenih programa izobrazbe iz područja kliničke procjene, kognitivno-bihevioralne terapije, psihotraumatologije te skrbi temeljene na informiranosti o traumi za što je prošla i edukaciju za trenere.
            Na Odsjeku za psihologiju Filozofskog fakulteta od akademske godine 2023./2024. obnaša ulogu pročelnice Odsjeka.
            U preddiplomskim, diplomskim, specijalističkim i doktorskim programima studija psihologije sudjeluje u nastavi na više kolegija. Pod njenim mentorstvom obranjen je veći broj diplomskih, specijalističkih i doktorskih radova na Odsjeku za psihologiju Filozofskog fakulteta i Hrvatskih studija.
            Bila je višegodišnja voditeljica Savjetovališta Filozofskog fakulteta za studente u Zagrebu te u njemu radi i kao savjetovateljica. Dugogodišnja je vanjska suradnica Savjetovališta za žene Autonomne ženske kuće i Centra za žene žrtve rata Rosa. 
            Surađivala je na više stručnih projekata, održala je predavanja i radionice na stručnim skupovima psihologa, liječnika i farmaceuta, na edukacijama međusektorske suradnje u razumijevanju i suzbijanju nasilja nad ženama i djecom te za širu javnost.
            Tajnica je međunarodnog udruženja za istraživanje stresa i anksioznosti (STAR Society) te članica Upravnog odbora Hrvatske psihološke komore.
            '            
            photo={photoAnita}
            
          />}
          {/* Similarly add other instances of PozvaniPredavaciCard */}
           {isTrue && <PozvaniPredavaciCard
            title='„Varalice varaju“? Suvremene spoznaje o odrednicama akademskog nepoštenja učenika i kako ga
            efikasnije spriječiti'
            subtitle='izv. prof. dr. sc. Nina Pavlin - Bernardić'
            description='Nina Pavlin-Bernardić je izvanredna profesorica na Odsjeku za psihologiju Filozofskog fakulteta u Zagrebu, na Katedri za školsku psihologiju. Na diplomskom studiju psihologije i u Centru za obrazovanje nastavnika Filozoskog fakulteta drži kolegije vezane uz psihologiju obrazovanja i metodiku nastave psihologije. Njezina su dosadašnja istraživanja vezana uz motivacijske aspekte učenja matematike i prirodnih znanosti, motivacijske i kontekstualne odrednice različitih oblika akademskog nepoštenja učenika i studenata, a u novije vrijeme i psihologiju humora. Vodila je i surađivala na više znanstvenih projekata, od kojih je kao članica tima multidisciplinarnog projekta „Kompetencijska mreža zasnovana na ICT-u za inovativne usluge namijenjene osobama sa složenim komunikacijskim potrebama“ dobitnica i godišnje državne nagrade Ivan Filipović u području znanstvenog i stručnog rada. Autorica je brojnih znanstvenih i stručnih radova i poglavlja u knjigama iz područja psihologije obrazovanja.  '
            photo={photoNina}
            cv={CV_Nina}
          />}
        </>
      )
}
