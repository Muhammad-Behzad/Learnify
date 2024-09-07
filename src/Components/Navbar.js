import React from 'react';
import {FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter} from "react-icons/fa"
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  fixed-top">
  <div className="container-fluid">
    <NavLink to='/' className="navbar-brand">LEARNIFY</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink to='/' className="nav-link">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/courses' className="nav-link" aria-current="page">COURSES</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about' className="nav-link" aria-current="page">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/contact' className="nav-link" aria-current="page">CONTACT</NavLink>
      </li>
      </ul>
        <div className="social2">
        <FaFacebookF className='footsocialicons'/>
        </div>
        <div className="social2">
        <FaTwitter className='footsocialicons'/>
        </div>
        <div className="social2">
        <FaInstagram className='footsocialicons'/>
        </div>
        <div className="social2">
        <FaLinkedinIn className='footsocialicons'/>
        </div>
      </div>
    </div>
</nav>
    </>
  );
}
