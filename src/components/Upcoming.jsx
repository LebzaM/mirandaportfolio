import React from 'react'
import '../components/Upoming.css'
import mind from '../assets/mind.jpeg'
import van from '../assets/vangogh.webp'
const Upcoming = () => {
  return (
    <div className='container-upcoming'>
        <div className='wrapper-upcoming' style={{borderRight:'1px solid'}}>
          <div className='colomn' style={{borderRight:'1px solid'}}>
          <h1 style={{fontFamily:'Canopee', fontSize:'50px'}}>UPCOMING NEXT</h1>
          <h3 style={{fontFamily:'Newlight', fontSize:'30px'}}>Fresh entry - A selected work from the latest digital releases</h3>
          <p style={{fontFamily:'Newlight'}}>TIP! Click on the image to explore</p>
          </div>

          <div className='colomn2'>
          
                <img src={van} style={{width:'80%'}}/>
                <h1 style={{fontFamily:'Canopee', fontSize:'30px'}}>UNEXPECTED TIME</h1>
                <p style={{fontFamily:'Domain'}}>AvroKO is an award-winning global design firm, established itself as a global leader in interior arcitechture for hospitality, resturant and bars</p>
            
          </div>

           <div>
            <img src={mind} style={{width:'90%', height:'100%', marginBottom:'40%'}}/>
          </div> 

        </div>

        <div className='right-wrapper'style={{paddingLeft:'2%'}}>
          <h1 style={{fontSize:'10vh', fontFamily:'Canopee'}}>Think, Create, Deliver</h1>
          <h3 style={{fontFamily:'Newlight', fontSize:'5vh'}}>A strong project is created by deep collaboration. I design, develop, and deliver websites that drive results and win awards</h3>
          <h3 style={{fontFamily:'Newlight', fontSize:'5vh'}}>Like an artisan, I like to start from raw matter and give life to an iconic product that makes your brand stand out, starting from a Visual Strategy that guide the clients vision to reality.</h3>
          <button style={{padding:'50px', borderRadius:'80%', fontSize:'50px', fontFamily:'Canopee'}}>All Work</button>
        </div>
        
    </div>
  )
}

export default Upcoming