import React from 'react'
import '../components/Awards.css'
const Awards = () => {
  return (
    <div className='container-awards'>
        <div className='wrapper-awards'>
            <div>
            <p style={{fontSize:'3vh'}}>Site of The Day<br/><p style={{fontFamily:'Canopee'}}>AWARDS</p> <span style={{fontWeight:'bolder'}}>9</span> </p></div>
            <div><p style={{fontSize:'3vh', fontFamily:'NewLight'}}>Site of The Month<br/><p style={{fontFamily:'Canopee'}}>Winner</p> <span style={{fontWeight:'bolder'}}>1</span> </p></div>
            <div><p style={{fontSize:'3vh', fontFamily:'NewLight'}}>FWA of The Day<br/><p style={{fontFamily:'Canopee'}}>AWARDS</p> <span style={{fontWeight:'bolder'}}>6</span> </p></div>
            <div><p style={{fontSize:'3vh', fontFamily:'NewLight'}}>ACCLAIMED<br/><p style={{fontFamily:'Canopee'}}>MENTIONS</p> <span style={{fontWeight:'bolder'}}>8</span> </p></div>
            
        </div>
    </div>
  )
}

export default Awards