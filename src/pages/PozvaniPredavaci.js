import React, { useState } from 'react'
import PozvaniPredavaciCard from './PozvaniPredavaciCard'
import photoMojca from '../assets/media/Mojca.jpeg'
import CV_Mojca from '../assets/documents/CV_Mojca_Jurišević.pdf'
import photoNina from '../assets/media/Nina Pavlin - Bernardić.png'
import CV_Nina from '../assets/documents/CV_Pavlin-Bernardić - sažetak predavanja.pdf'


export default function PozvaniPredavaci() {
    const [isTrue, setIsTrue] = useState(true);
    return (
        <>
          {isTrue && <PozvaniPredavaciCard
            title='Naslov rada'
            subtitle='prof.dr.sc. Mojca Jurišević'
            description='Mojca Juriševič, profesorica je psihologije obrazovanja na Pedagoškom fakultetu Sveučilišta u Ljubljani, Slovenija. Njezin znanstveni interes usmjeren je na motivaciju za učenje, profesionalni razvoj učitelja i proučavanje darovitosti i obrazovanja darovitih. Osnivačica je i ravnateljica Centra za istraživanje i promicanje darovitosti na Pedagoškom fakultetu u Ljubljani. Također je jedna od osnivača Europske mreže za potporu talentima (European Talent Support Network) i nacionalna izaslanica Svjetskog vijeća za darovitu i talentiranu djecu (World Council for Gifted and Talented Children), a u tom je vijeću izabrana za članicu Izvršnog odbora za razdoblje od 2022. do 2025. godine. Prof.dr.sc. Mojca Juriševič članica je Izvršnog odbora Društva psihologa Slovenije, a u razdoblju od 2015. do 2023. bila je u predsjednica Sekcije za psihologe u obrazovanju toga društva. Od 2018. prof.dr.sc. Juriševič je nacionalna predstavnica u Stalnom odboru za psihologiju obrazovanja u Europskoj federacije udruga psihologa (EFPA). Redovita je članica Međunarodnog društva za proučavanje kreativnosti i inovativnosti (International Society for the Study of Creativity and Innovation) te pridružena članica Američkog psihološkog društva (APA). Godine 2020. prof. dr.sc. Juriševič nagrađena je slovenskom Državnom nagradom za izvanredna postignuća u visokom obrazovanju, a 2023. godine proglašena je Kongresnom veleposlanicom Slovenije za uspješno vođenje znanstvenog odbora 17. Europskog kongresa psihologije.

            '
            photo={photoMojca}
            cv={CV_Mojca}
          />}
          <hr />
          {isTrue && <PozvaniPredavaciCard
            title='„Varalice varaju“? Suvremene spoznaje o odrednicama akademskog nepoštenja učenika i kako ga
            efikasnije spriječiti'
            subtitle='izv. prof. dr. sc. Nina Pavlin - Bernardić'
            description='Nina Pavlin-Bernardić je izvanredna profesorica na Odsjeku za psihologiju Filozofskog fakulteta u Zagrebu, na Katedri za školsku psihologiju. Na diplomskom studiju psihologije i u Centru za obrazovanje nastavnika Filozoskog fakulteta drži kolegije vezane uz psihologiju obrazovanja i metodiku nastave psihologije. Njezina su dosadašnja istraživanja vezana uz motivacijske aspekte učenja matematike i prirodnih znanosti, motivacijske i kontekstualne odrednice različitih oblika akademskog nepoštenja učenika i studenata, a u novije vrijeme i psihologiju humora. Vodila je i surađivala na više znanstvenih projekata, od kojih je kao članica tima multidisciplinarnog projekta „Kompetencijska mreža zasnovana na ICT-u za inovativne usluge namijenjene osobama sa složenim komunikacijskim potrebama“ dobitnica i godišnje državne nagrade Ivan Filipović u području znanstvenog i stručnog rada. Autorica je brojnih znanstvenih i stručnih radova i poglavlja u knjigama iz područja psihologije obrazovanja.  '
            photo={photoNina}
            cv={CV_Nina}
          />}
          {/* Similarly add other instances of PozvaniPredavaciCard */}
        </>
      )
}
