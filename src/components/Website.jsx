import React from 'react'
import patch from '../assets/patch.png'
export const Website = () => {
  return (
    <div className='website-container' style={{display:'flex', height:'100vh', paddingLeft:'5%', paddingRight:'5%'}}>
        <div className='website-wrapper' style={{display:'flex', flex:'4'}}>
        <h1 style={{fontSize:'40vh', backgroundColor:'black', color:'#C3BBB2', padding:'5%', fontFamily:'Canopee'}}>Website</h1>
        </div>

        <div className='website-right' style={{display:'flex', flex:'1',paddingTop:'10%'}}>
            <img src={patch} style={{width:'100%', height:'60vh'}}/>


        </div>

        
    </div>
  )
}
