import React from 'react'

export default function Video() {
    const videouputa = `${process.env.PUBLIC_URL}/Aktivnosti_videouputa.mp4`;
  return (
    <div>
       <video width="20%" height="30%" style={{marginLeft:'39%'}} controls={true} autoplay={false}>
    <source src={videouputa} type="video/mp4" />
    Vaš browser ne podržava reprodukciju ovog zapisa.
  </video>
    </div>
  )
}
