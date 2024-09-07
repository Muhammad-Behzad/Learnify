import React, {useEffect} from 'react';
import {FaClock, FaFile, FaPuzzlePiece, FaGraduationCap, FaBars} from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function CoursesCards(props) {
  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);
  return (
    <>
      <div className="coursemainbox">
        <div className="CoursesBox">
            <div className="coursesubox" id='coursesubox1'>
                <img src={props.image} alt="" className='courseimages'/>
            </div>
            <div className="coursesubox" id='coursesubox2'>
                <div className="firstdiv">
                    <p className="firstdivpara1" data-aos="fade-down">{props.domain}</p>
                </div>
                <p className="coursepara1" data-aos="fade-down">{props.coursetitle}</p>
                <div className="infodiv">
                <FaClock className='coursesicons' data-aos="fade-down"/>
                <p className='iconspara' data-aos="fade-down">{props.noofweeks} Weeks</p>
                <FaBars className='coursesicons' data-aos="fade-down"/>
                <p className='iconspara' data-aos="fade-down">{props.nooflevels}</p>
                <FaFile className='coursesicons' data-aos="fade-down"/>
                <p className='iconspara' data-aos="fade-down">{props.nooflessons} Lessons</p>
                <FaPuzzlePiece className='coursesicons' data-aos="fade-down"/>
                <p className='iconspara' data-aos="fade-down">{props.noofquiz} Quiz</p>
                <FaGraduationCap className='coursesicons' data-aos="fade-down"/>
                <p className='iconspara' data-aos="fade-down">{props.noofstudent} Students</p>
                </div>
                <p className='coursepara2' data-aos="fade-down">{props.tagline}</p>
                <div className="pricediv">
                    <div className="pricediv1" data-aos="fade-down"><p>{props.price}</p></div>

                    <NavLink to='/registrationform'><button data-aos="fade-down">Register Course</button></NavLink>

                </div>
            </div>
        </div>
      </div>
    </>
  );
}
