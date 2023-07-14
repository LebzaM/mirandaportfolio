import React from 'react'
import '../components/Pixel.css'

const Pixel = () => {
  return (
    <div className='container-pixel'>
        <div className='wrapper-pixel'>
        <img src='https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c70e48081716925e9832a_avatar-hat.jpeg' style={{width:'30%', height:'50%'}} />
        <h1 style={{fontSize:'20vh'}}>The</h1>
        <h1 style={{fontSize:'20vh'}}>PIXEL</h1>
        </div>

        <div className='wrapper-right'>
        
        <img src='https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6da4f1f8304440ee2e8c_avatar-2-p-800.jpeg' style={{width:'90%'}}/>
        </div>

    </div>
  )
}

export default Pixel