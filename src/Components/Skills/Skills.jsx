import React from 'react'

import CruosalItems from '../Caruosal'


export default function Skills() {
  return (
    <div className="skills d-sm-block py-5" id='skills'>
      <div className="container">
        <div className="row justify-content-center">
        <div className="skills-content w-100 text-center pt-5 ">
        <h2 className='fs-1 fw-bold'>Skills</h2>
        <p className='fs-5 text-muted'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text.</p>
        <div className="curser">
         <div className="container">
         <div className="row justify-content-center">
            <CruosalItems>         
            </CruosalItems>
          </div>
         </div>
        </div>
      
      </div>
        </div>
      </div>
    </div>
  )
}
