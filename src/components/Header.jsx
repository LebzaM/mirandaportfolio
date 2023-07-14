import React from 'react'
import '../components/Header.css'
import Slid from '../assets/slider1.jpeg'
const Header = () => {
  return (
    <div className='container-header'>
        <div className='wrapper-header'>
        <div className='header-images'>
                <img src={Slid} style={{width:'90%'}}/>
                <p style={{fontFamily:'Canopee', fontSize:'20px'}}>AVRO | KO</p>
                <p style={{fontFamily:'Domain'}}>AvroKO is an award-winning global design firm, established itself as a global leader in interior arcitechture for hospitality, resturant and bars</p>
            </div>

            <div className='header-text'>
                <h3 style={{alignItems:'center', fontFamily:'Canopee', justifySelf:'center', fontSize:'35px'}} >All Work</h3>
                <h5 style={{fontFamily:'Newlight', fontSize:'20px'}}>A featured selection the latest work - of the last years</h5>
                <p style={{fontFamily:'Domain', fontSize:'20px'}}>Tip: Drag sideways to scroll</p>
            </div>

            <div className='header-images'>
                <img src={Slid} style={{width:'90%'}}/>
                <p style={{fontFamily:'Canopee', fontSize:'20px'}}>AVRO | KO</p>
                <p style={{fontFamily:'Domain'}}>AvroKO is an award-winning global design firm, established itself as a global leader in interior arcitechture for hospitality, resturant and bars</p>
            </div>


            
        </div>
        
    </div>
    
  )
}

export default Header