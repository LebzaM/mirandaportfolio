import React from 'react'
import '../components/Colomn.css'
import man from '../assets/man.jpeg'
import star from '../assets/star.jpeg'
const Colomn = () => {
  return (
    <div className='container-colomn' >
        <div className='wrapper-colomn' style={{borderRight:'1px solid'}}>
        <h1 style={{fontFamily:'Canopee', fontSize:'10vh'}}>Interactive <br/> Artist</h1>
        <img src={star} style={{width:'80%', height:'80%'}}/>
        <h3 style={{fontFamily:'Newlight', fontSize:'5vh'}}>As a multidisciplinary freelancer, im passionate about creating iconic digital experiences through motion, typography, and creative coding for companies and agencies around the world</h3>
        </div>
        <div className='colomn-right' style={{alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
            <img src={man} style={{paddingRight:'10%', width:'90%', paddingLeft:'5%', marginTop:'50px'}}/>
            <div style={{alignItems:'center', justifyContent:'center', fontFamily:'Canopee', fontSize:'4vh'}}>
            <h1>Digital Art Director</h1>
            <h1>Interactive Designer</h1>
            <h1>Creative Development</h1>
            <h1>Based in Amsterdam</h1>
            </div>
        </div>
    </div>
  )
}

export default Colomn