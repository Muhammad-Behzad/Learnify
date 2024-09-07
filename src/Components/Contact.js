import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);
  return (
    <>
      <Navbar/>
      <div className="contacthead">
        <div className="contactheadparadiv">
          <p className="conheadpara1" data-aos="fade-down">STAYING AHEAD THE FUTURE OF WORK</p>
          <p className="conheadpara2" data-aos="fade-down">The leading global courses website for learning, self-improving, and instruction about any topic.</p>
        </div>
      </div>

      <div className="contactbox">
        <div className="consubox" id='conbox'></div>
        <div className="consubox">
          <p className="conpara1" data-aos="fade-down">Got a question ?</p>
          <p className="conpara2" data-aos="fade-down">Is there something you can't find an answer to or do you have something else you need help with? Let us know by filling out the form below!</p>

          <form action="">
            <div className='contactformdiv'>
               <input type="text"  name='myFirstName' placeholder='First Name' className='contactinput' required/>
            </div>
            <div className='contactformdiv'>
               <input type="text"  name='myLastName' placeholder='Last Name' className='contactinput' required/>
            </div>
            <div className='contactformdiv'>
               <input type="text"  name='myAddress' placeholder='Street Address' className='contactinput'/>
            </div>
            <div className='contactformdiv'>
               <input type="email"  name='myEmail' placeholder='Your Email' className='contactinput' required/>
            </div>
            <div className='contactformdiv'>
               <input type="text"  name='myNumber' placeholder='Your Phone Number' className='contactinput' required/>
            </div>
            <div className='contactformdiv'>
               <textarea name='myTextarea' cols="77" rows="6" placeholder='Your Message' className='contacttextarea' required></textarea>
            </div>
            <div className='contactformdiv'>
            <input type="submit" value='SEND' className='contactsubmit'/>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}
