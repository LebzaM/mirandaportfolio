import React from 'react'
import '../components/Perfect.css'
const Perfect = () => {
  return (
    <>
    <div className='container-perfect'>
        <div className='container-trophy'>
        <img src='https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6fd0f6276ef0c6bacfa4_trophy-p-800.jpeg' style={{ width:'100%', height:'100%'}}/>
        </div>

        <div className='container-right'>
        <h1 style={{fontSize:'30vh', fontFamily:'Canopee'}}>PERFECT</h1>
        </div>

        

    </div>

    <div className='container-second'>
    <div className='container-artistic'>
    <h1 style={{fontSize:'30vh', color:'#C3BBB2', backgroundColor:'black', height:'30vh', fontFamily:'Canopee'}}>Artisitic</h1>
        </div>

        <div className='artistic-right'>
            <h1 style={{fontFamily:'Newlight', fontSize:'3vh'}}>Over 5 years, I've teamed up with high-profile clients and partners globally earning mentions & awards from digital platforms like The FWA,<p style={{fontFamily:'Canopee', fontSize:'8vh'}}>AWWWARDS</p> Communication Arts, Site Inspire, Behance, Codrops and many others</h1>
        </div>
    </div>
    </>
  )
}

export default Perfect