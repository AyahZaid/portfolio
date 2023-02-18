import React, { useState } from 'react'
import { NavLink , Link } from "react-router-dom";
import img from'../../assets/img/logo.svg'

export default function Navbar() {
const [colorChange, setColorchange] = useState(false);

const changeNavbarColor = () =>{
   if(window.scrollY >= 80){
     setColorchange(true);
   }
   else{
     setColorchange(false);
   }
};
window.addEventListener('scroll', changeNavbarColor);

  const links = document.querySelectorAll('.navs');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      
      link.classList.add('active');
    });
  });
}

  return (
    <nav  className={colorChange ? 'navbar colorChange navbar-expand-lg  position-fixed w-100 top-0' : 'navbar navbar-expand-lg bg-transparent position-fixed w-100 top-0'}>
        <div className="container ">
            <Link className="navbar-brand text-light fw-bold fs-2" to="/home"><img src={img} className='logo-img'></img></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
            <div className="collapse navbar-collapse " id="collapsibleNavbar">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100  d-flex justify-content-end align-items-center">
                <li className="nav-item">
                <a className= ' nav-link me-5 fw-bold text-muted navs active'  href='#home'  >Home</a>
                </li>
                <li className="nav-item ">
                <a className="nav-link me-5 fw-bold text-muted navs"  href='#skills' >Skills</a>
                </li>
                <li className="nav-item ">
                <a className="nav-link me-5 fw-bold text-muted navs" href='#projects'>Projects</a>
                </li>
                <li className="nav-item d-flex text-light social">
                  <Link className='icon position-relative  border d-flex justify-content-center align-items-center rounded-circle me-1' to="https://www.facebook.com/"><i className="fa-brands  fa-facebook text-light"></i></Link>
                  <Link className='icon position-relative border d-flex justify-content-center align-items-center rounded-circle me-1' to="https://www.facebook.com/"><i className="fa-brands fa-linkedin text-light"></i></Link>
                  <Link className='icon position-relative border d-flex justify-content-center align-items-center rounded-circle me-1' to="https://www.facebook.com/"><i className="fa-brands fa-instagram text-light"></i></Link>
                </li>
                <li className="nav-item  connect-li">
                <a href='#contact'> <button  class="btn btn-outline-light connect fw-bold px-5 py-3 rounded-0 ms-3 position-relative"><span>Let's Connect</span></button></a>
                </li>
              </ul>
            
            </div>
        </div>
</nav>
    
  )
}
