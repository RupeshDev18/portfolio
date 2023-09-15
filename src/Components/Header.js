import React from 'react'
import Typed from "react-typed"
export default function Header() {
  return (
    <div className='header-wraper' id='header'>
      <div className="main-info">
        <h1> Web Development </h1>
        <Typed
        className='typed-text'
        strings={['Web Design','Web Development','Google Ads','Custom Backend Development']}
        typeSpeed={40}
        backSpeed={60}
        loop
        />
        <a href="#contactme" className='btn-main-offer'>Contact Me</a>
      </div>
    </div>
  )
}
