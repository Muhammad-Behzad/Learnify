import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import CourseCard from './CourseCard';
import CourseData from './CourseData';
import Testimonial from './Testimonial';
import Footer from './Footer';
import SignUp from './SignUp';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Index() {

  const CourseDatafunc = (val)=>{
    return(
      <CourseCard number = {val.number}
      duration = {val.duration} 
      title = {val.title}
      rating = {val.rating}
      price = {val.price}
      image = {val.image}/>
    )
  }
  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);

  return (
    <>
      <Navbar/>
      <Carousel/>

      <section className="section3">
        <div className="sec3div" id='sec3divid'>
            <p className="sec3p" data-aos="fade-down">Find courses</p>
            <p className="sec3p" id='sec3responsive1' data-aos="fade-down">on almost any</p>
            <p className="sec3p" id='sec3responsive2' data-aos="fade-down">topic</p>
            <p className="sec3p2" data-aos="fade-down">Build your library for your career</p>
            <p className="sec3p2" data-aos="fade-down">and personal growth</p>
            <p className="sec3p3" data-aos="fade-down">BEST COURSES</p>
        </div>
        <div className="sec3div" id='sec3divid2'>
            <div className="sec3subdiv" id='subdiv1'></div>
            <div className="sec3subdiv" id='subdiv2'></div>
            <div className="sec3subdiv" id='subdiv3'>
                <NavLink to="/courses" className="paras"><p id='paragraph' data-aos="fade-down">BROWSE</p></NavLink>
                <NavLink to="/courses" className="paras"><p id='paragraph' data-aos="fade-down">OTHER</p></NavLink>
                <NavLink to="/courses" className="paras"><p id='paragraph' data-aos="fade-down">COURSES</p></NavLink>
            </div>
            <div className="sec3subdiv" id='subdiv4'></div>
        </div>
      </section>
      <section className="section4">
        <p className="sec4p1" data-aos="fade-down">Popular Courses</p>
        <p className="sec4p2" data-aos="fade-down">Aspire and Accomplish! Find your interests by browsing our online</p>
        <p className="sec4p2" data-aos="fade-down">courses. Upgrade your skills, level up in life, secure future.</p>
        <p className="sec4p2" data-aos="fade-down">Courses from Rs 30,000 ends September 14.</p>
      </section>

      <section className="section5">
        <div className="sec5head">
          <p className="sec5headpara1" data-aos="fade-down">COURSES</p>
          <p className="sec5headpara2" data-aos="fade-down">Our Popular Courses</p>
        </div>
        <div className="cardbox">
           {CourseData.map(CourseDatafunc)}
        </div>
      </section>

      <SignUp/>

      <Testimonial/>
      <Footer/>
    </>
  );
}
