import React,{useEffect} from 'react';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    useEffect(()=>{
        Aos.init({duration: 1000});
      },[]);
  return (
    <>
    <Navbar/>

    <section className="aboutsection">
        <div className="aboutsecdiv">
            <p className="aboutheadpara" data-aos="fade-down">
                ABOUT US
            </p>
        </div>
    </section>
    <section className="aboutsection2">
        <div className="aboutdiv" id='aboutdivid1'></div>
        <div className="aboutdiv" id='aboutdivid'>
            <p className='aboutpara1' data-aos="fade-down">ABOUT US</p>
            <p className='aboutpara2' data-aos="fade-down">Innovative Way To Learn</p>
            <p className='aboutpara3' data-aos="fade-down">At Learnify, we're dedicated to revolutionizing online education by offering accessible, high-quality courses that fit seamlessly into your busy life. Our platform features expert-designed courses across a variety of fields, from technology and business to creative arts and personal development. With a focus on flexibility, engaging content, and a supportive learning community, we empower you to gain valuable skills and achieve your goals at your own pace. Join us and unlock your potential with Learnify</p>
        </div>
    </section>

    <SignUp/>
    <Testimonial/>
    <Footer/>
    </>
  );
}
