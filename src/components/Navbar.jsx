import React from 'react'
import '../components/Navbar.css'
import logo from '../assets/logo.svg'
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className='container-nav'>
        <div><p style={{fontFamily:'Domain'}}>Amsterdam, NL</p></div>
        <img src={logo} alt='logo' style={{width:'10%'}}/>
        <div><AiOutlineMenu style={{justifyContent:'center', display:'flex', paddingTop:'18px', paddingRight:'30px'}}/></div>
        
    
    </div>
  )
}

export default Navbar