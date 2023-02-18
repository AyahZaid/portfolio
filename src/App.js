import logo from './logo.svg';
import './App.css';
import 'animate.css';
import Navbar from './Components/Nvbar/Navbar';
import {Route,Routes ,BrowserRouter}from 'react-router-dom'
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Project';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useEffect } from 'react';


function App() {
  
  useEffect(()=>{
    document.querySelector('.bannerimg').classList.add('zoom-in');
    document.querySelector('.contact-img').classList.add('zoom-in');
  })
  const zoomIn = () =>{
  const contactImg=document.querySelector('.contact-img');
  const bannerImg=document.querySelector('.bannerimg');
    let positinY=window.scrollY;

    if(positinY <= 400){
      bannerImg.classList.add('zoom-in')
    }
    else if(positinY >= 1700){
      contactImg.classList.add('zoom-in')
    }
    else{
      bannerImg.classList.remove('zoom-in')
      contactImg.classList.remove('zoom-in')

    }
 };
 window.addEventListener('scroll', zoomIn);
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
