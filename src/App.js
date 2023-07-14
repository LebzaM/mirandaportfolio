import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Name from './components/Name';
import Colomn from './components/Colomn';
import { Website } from './components/Website';
import Upcoming from './components/Upcoming';
import Awards from './components/Awards';
import Pixel from './components/Pixel';
import Perfect from './components/Perfect';
import Cards from './components/Cards';
import Slider from './components/Slider';
import Email from './components/Email';
import Footer from './components/Footer';

import {React, useRef, useEffect } from 'react';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  // let tl = gsap.timeline();
  // let wrapper = useRef(null);
  // let main = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: main.current,
  //     smooth: true,
  //   });
  //   scroll.scrollTo(main.current);
  //   tl.to(wrapper.current, { y: '1vh', scale: 0.6, duration: 0 });
  //   tl.to(wrapper.current, { y: '1vh', duration: 1, delay: 1 });
  //   tl.to(wrapper.current, { y: '1vh', rotate: 360, scale: 1, duration: 0.7 });

  //   return () => {
  //     clearInterval(scroll);
  //   };
  // });
  return (
    
    <>


    <div className='bg'  >
     
      <Navbar data-scroll/>
      <Header data-scroll/>
      <Name data-scroll/>
      <Colomn data-scroll />
      <Website data-scroll/>
      <Upcoming />
      <Awards />
      <Pixel />
      <Perfect />
      <Cards />
      <Slider />
      <Email />
      <Footer />
      
      
      </div>
     </>
  );
}

export default App;
