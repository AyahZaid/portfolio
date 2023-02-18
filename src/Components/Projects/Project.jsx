import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

export default function Project() {
  
  useEffect(()=>{
    let tabs = document.querySelectorAll('.tab');
  if (tabs.length) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
      tabs.forEach((tab) => {
        tab.classList.remove('colors');
      });
      tab.classList.add('colors');
    });
  });
  }
  },[])
  return (
    <div>
      <div className="projects bg-black pt-5 pb-5 " id='projects'>
        <div className="container">
          <div className="row justify-content-center">
            <h1 className='text-center fw-bold mb-3'>Projects</h1>
            <p className='w-50 text-center text-muted fw-bold fs-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="projects-content w-100  text-center my-3 ">
              <div className=" d-flex justify-content-center flex-column align-items-center">
                  <ul class="nav justify-content-center">
                  <li class="nav-item">
                    <Link class="nav-link colors border  rounded-start rounded-0 py-3 px-md-4 px-sm-3 text-light  fs-5 tab" aria-current="page" to="/Tab1">Tab1</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link btn border rounded-0 py-3 px-md-4 px-sm-3 text-light fs-5 tab" to="/Tab2">Tab2</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link border rounded-end rounded-0 py-3 px-md-4 px-sm-3 text-light fs-5 tab" to="/Tab3">Tab3</Link>
                  </li>
                </ul>
                  <div className=' text-center w-100'>
                    <Routes>
                    <Route path='/' element={<Tab1/>}/>
                    <Route  path='/Tab1' element={<Tab1/>}/>
                    <Route path='/Tab2' element={<Tab2/>}/>
                    <Route path='/Tab3' element={<Tab3/>}/>
                  </Routes>
                  </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
