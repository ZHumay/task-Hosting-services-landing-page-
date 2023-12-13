import React from 'react'
import "./navbar.css"
import SectionOne from '../SectionOne/SectionOne'
function Navbar() {
  return (
    <div className='nav'>
    <div className='part-1'>
       <p>Host Beta </p>
    </div>
    <div className='part-2'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Testimonials</li>
        </ul>
    </div>
    <div className='part-3'>
      <div className='border'>
      <p className='contact'>
            Contact us
        </p>
      </div>
      
    </div>
    </div>
   
  )
}

export default Navbar
