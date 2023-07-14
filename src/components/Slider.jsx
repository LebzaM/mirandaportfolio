import React from 'react'
import '../components/Header.css'
const Slider = () => {
  return (
    <div className='container-header'>
        <div className='wrapper-header'>
        <div className='header-images'>
                <img src='https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/647dc0777b1a5df29f8e5a58_thumbnail-small.webp?' style={{width:'90%'}}/>
                <p style={{fontFamily:'Canopee', fontSize:'20px'}}>AVRO | KO</p>
                <p style={{fontFamily:'Domain'}}>AvroKO is an award-winning global design firm, established itself as a global leader in interior arcitechture for hospitality, resturant and bars</p>
            </div>

            <div className='header-text'>
                <h3 style={{alignItems:'center', fontFamily:'Canopee', justifySelf:'center', fontSize:'35px'}} >All Work</h3>
                <h5 style={{fontFamily:'Newlight', fontSize:'20px'}}>A featured selection the latest work - of the last years</h5>
                <p style={{fontFamily:'Domain', fontSize:'20px'}}>Tip: Drag sideways to scroll</p>
            </div>

            <div className='header-images'>
                <img src='https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/647dc0777b1a5df29f8e5a58_thumbnail-small.webp?' style={{width:'90%'}}/>
                <p style={{fontFamily:'Canopee', fontSize:'20px'}}>AVRO | KO</p>
                <p style={{fontFamily:'Domain'}}>AvroKO is an award-winning global design firm, established itself as a global leader in interior arcitechture for hospitality, resturant and bars</p>
            </div>

            
        </div>
        
    </div>
  )
}

export default Slider

