import React from 'react'
import { Link } from 'react-router-dom'
import img from'../../assets/img/header-img.svg'
 import ReactTypingEffectDemo from './TaypingText.jsx'
export default function Banner() {
  return (
    <div className='banner pb-3' id='home'>
        <div className="container ">
            <div className="row ">
                <div className="col-md-7 col-sm-12 ">
                <div className="card bg-transparent border-0">
                    <div className="card-body">
                        <h5 className="card-title text-light  p-3 border border-light  fs-5 col-7 text-center colors fw-bold my-5">Welcome to my Portfolio</h5>
                        <h6 className="card-subtitle mb-2  text-light fw-bold">Hi! I'm Ayah Zaid <br/> <ReactTypingEffectDemo/></h6>
                        <p className="card-text text-secondary  my-4 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Link href="#" className="card-link text-light fs-6 fw-bold connect">Let’s Connect <i className="fa-solid fa-circle-arrow-right"></i></Link>
                    </div>
                    </div>
                </div>
                <div className="col-md-5 col-sm-12 parant-img-banner d-flex justify-content-end align-content-end">
                    <img src={img} className='bannerimg '></img>
                </div>
            </div>
        </div>
    </div>
  )
}
