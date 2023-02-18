import React from "react";
import img from "../../assets/img/contact-img.87eac2b29352fa01abb2f9510ef6ac7e.svg";
export default function () {
  const editText=()=>{
    document.getElementById("send").innerHTML="Sending..."
  }
  return (
    <div>
      <div className="contact" id="contact">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-6 mb-4 col-sm-12 d-flex justify-content-center align-items-center ">
              <img className="contact-img " src={img} />
            </div>
            <div className="col-md-6 col-sm-12">
              <h2 className="fw-bold fs-1 text-light">Get In Touch</h2>
              <form className="col-sm-12">
                <div className="row flex-md-row flex-sm-column ">
                  <div className=" px-1 col-md-6 col-sm-12">
                    <input type="text"className=" w-100" placeholder="First Name" value="" />
                  </div>
                  <div  className="px-1 col-md-6 col-sm-12">
                    <input type="text"className=" w-100" placeholder="Last Name" value="" />
                  </div>
                  <div  className="px-1 col-md-6 col-sm-12">
                    <input type="email "className=" w-100" placeholder="Email Address" value="" />
                  </div>
                  <div  className="px-1 col-md-6 col-sm-12">
                    <input type="tel" className=" w-100" placeholder="Phone No." value="" />
                  </div>
                  <div  className="px-1 col-md-12">
                    <textarea className="col-md-12  w-100"rows="6"placeholder="Message"></textarea>
                    <button className="btn bg-light text-dark position-relative  btn-light border-0 rounded-0 py-2 fs-5 fw-bold px-5" onClick={editText}>
                      <span id="send">Send</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
