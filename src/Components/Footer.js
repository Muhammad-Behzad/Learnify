import React from 'react';
import {FaPhoneAlt, FaEnvelope, FaLocationArrow, FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter} from "react-icons/fa"

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footdiv1">
          <div className="footdivbox" id='footdivbox1'>
              <h2 className='foothead'>GET IN TOUCH</h2>
              <FaLocationArrow className='footicons'/>
              <p className="footpara">123 Street, Karachi, Pakistan</p>
              <FaPhoneAlt className='footicons'/>
              <p className="footpara">+92 345 2315667</p>
              <FaEnvelope className='footicons'/>
              <p className="footpara">info@gmail.com</p>
              <div className="footsocial">
                <div className="social">
                <FaFacebookF className='footsocialicons'/>
                </div>
                <div className="social">
                <FaTwitter className='footsocialicons'/>
                </div>
                <div className="social">
                <FaInstagram className='footsocialicons'/>
                </div>
                <div className="social">
                <FaLinkedinIn className='footsocialicons'/>
                </div>
              </div>
          </div>
          <div className="footdivbox" id='footdivbox1'>
            <h2 className='foothead'>OUR COURSES</h2>
               <ul>
                <li>Web Design</li>
                <li>Graphic Design</li>
                <li>Cloud Computing</li>
                <li>Artificial Intelligence</li>
                <li>DBMS</li>
              </ul>
          </div>
          <div className="footdivbox" id='footdivbox2'>
            <h2 className='foothead'>NEWSLETTER</h2>
            <p className="newspara">
              Sign up for our newsletter and be the first to hear about new online courses, exclusive learning tips, and special promotions. Whether you're looking to advance your career or pick up a new skill, we've got you covered with exciting updates
            </p>
            <form action="">
              <input type="email" placeholder='Your Email Address' className='newsinput' required/>
              <input type="submit" value={'Sign Up'} className='newsinput2'/>
            </form>
          </div>
        </div>
        <div className="footdiv2">
          <p className='footdiv2para'>© Learnify. All Rights Reserved</p>
        </div>
      </section>
    </>
  );
}
