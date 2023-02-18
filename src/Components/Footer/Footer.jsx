import React from 'react'
import { Link } from 'react-router-dom'
import img from'../../assets/img/logo.svg'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="align-items-center row">
          <div className="subscribe col-md-12 ">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-5 ">
              <h3 className='text-dark col-7 m-5 fw-bold fs-2'>Subscribe to our Newsletter<br/> & Never miss latest updates</h3>
              </div>
              <div className="col-md-7 d-flex justify-content-center">
              <form>
                <div class="new-email-bx ">
                  <input type="email" placeholder="Email Address" value=""/>
                  <button type="submit">Submit</button>
                  </div>
                  </form>
              </div>
            </div>
          </div>
            <div className="footer-bottom col-md-12 d-flex align-content-center">
                <div className="col-md-6">
                  <img src={img} alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-end flex-column ">
                  <div className="social2 row mb-3 ">
                  <Link className='icon position-relative border d-flex justify-content-center align-items-center rounded-circle me-1' to="https://www.facebook.com/"><i className="fa-brands  fa-facebook text-light"></i></Link>
                  <Link className='icon position-relative border d-flex justify-content-center align-items-center rounded-circle me-1' to="https://www.facebook.com/"><i className="fa-brands fa-linkedin text-light"></i></Link>
                  <Link className='icon position-relative border d-flex justify-content-center align-items-center rounded-circle me-1' to="https://www.facebook.com/"><i className="fa-brands fa-instagram text-light"></i></Link>
                  </div>
                <p className='fw-bold text-muted text-end'>Copyright 2022. All Rights Reserved</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
