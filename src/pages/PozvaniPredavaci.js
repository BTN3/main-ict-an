import React, { useState } from 'react'
import PozvaniPredavaciCard from './PozvaniPredavaciCard'
import photo from '../assets/media/20230928_165441.jpg'
import CV from '../assets/documents/CV_Čupić.pdf'


export default function PozvaniPredavaci() {
    const [isTrue, setIsTrue] = useState(true);
    return (
        <>
          {isTrue && <PozvaniPredavaciCard
            title='Mislav Čupić,dipl.psih.'
            description='Ovo je kratki opis'
            photo={photo}
            cv={CV}
          />}
          <hr />
          {isTrue && <PozvaniPredavaciCard
            title='Mislav Čupić,dipl.psih.'
            description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...'
            photo={photo}
            cv={CV}
          />}
          {/* Similarly add other instances of PozvaniPredavaciCard */}
        </>
      )
}
