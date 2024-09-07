import React from 'react';
import Navbar from './Navbar';
import CoursesCards from './CoursesCards';
import CoursesCardsData from './CoursesCardsData';
import Footer from './Footer';

export default function Courses() {
  const coursescards = (courseval)=>{
    return(
      <CoursesCards
      image={courseval.image}
      domain={courseval.domain}
      coursetitle={courseval.coursetitle}
      noofweeks={courseval.noofweeks}
      nooflevels={courseval.nooflevels}
      nooflessons={courseval.nooflessons}
      noofquiz={courseval.noofquiz}
      noofstudents={courseval.noofstudents}
      tagline={courseval.tagline}
      price={courseval.price}/>
    )
  }
  return (
    <>
    <Navbar/>
    <div className="coursesheadiv">
      <div className="courseheading">
        <p className="heading">Courses</p>
      </div>
      {CoursesCardsData.map(coursescards)}
    </div>
    <Footer/>
    </>
  );
}
