import React from 'react';
import Comments from './Comments';

export default function Testimonial() {
  return (
    <>
<section className="section7">
        <div className="sec5head">
          <p className="sec5headpara1" data-aos="fade-down">TESTIMONIAL</p>
          <p className="sec5headpara2" data-aos="fade-down">What Our Students Says</p>
        </div>
 <div className="testimonial">
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel"> 
       <div className="carousel-inner">
         <div className="carousel-item active">

            <Comments 
            comment="As someone new to web development, I found the Web Development Fundamentals course to be incredibly helpful. The lessons were well-structured and easy to follow, with plenty of practical exercises" 
            name='Daniyal Hasan'/>

            <img src="blankimg.png" className="d-block w-100" alt="..." id='test1' />
         </div>
         <div className="carousel-item">

            <Comments 
            comment="The Advanced Graphic Design course on Learnify exceeded my expectations. The in-depth tutorials on advanced techniques and tools were exactly what I needed to take my skills to the next level" 
            name='Muhammad Behzad'/>

            <img src="blankimg.png" className="d-block w-100" alt="..." id='test1' />
         </div>
         <div className="carousel-item">

            <Comments comment="I just completed the Data Science Bootcamp on Learnify, and I couldn't be happier with the experience! The course material was comprehensive and up-to-date, and the hands-on projects really helped solidify my understanding" 
            name='Muhammd Suhaib' />

            <img src="blankimg.png" className="d-block w-100" alt="..." id='test1' />
         </div>
       </div>
       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
      </div>
   </div>
</section>
    </>
  );
}
