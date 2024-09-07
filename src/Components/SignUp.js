import React from 'react';

export default function SignUp() {
  return (
    <>
      <section className="section6">
        <div className="sec6box">
          <p className="sec6boxpara1" data-aos="fade-down">NEED ANY COURSES</p>
          <p className="sec6boxpara2" data-aos="fade-down">30% Off For New Students</p>
          <p className="sec6boxpara3" data-aos="fade-down">Are you ready to take the next step in your personal or professional journey? Our online courses offer a flexible, convenient, and engaging way to expand your knowledge and skills. Whether you're looking to enhance your career or achieve personal growth, our expertly designed courses have something for everyone</p>
          <ul>
            <li data-aos="fade-down">✔️ Expert Instructors</li>
            <li data-aos="fade-down">✔️ Flexible Learning</li>
            <li data-aos="fade-down">✔️ Community Support</li>
          </ul>
        </div>
        <div className="sec6box" id='sign'>
          <div className="signup">
            <div className="head1">
              <p data-aos="fade-down">Sign Up Now</p>
            </div>
            <div className="form">
              <form action="" className="form2">
                <input type="text" placeholder='Your name' className='inputs' name='myName' required/>
                <input type="email" placeholder='Your email' className='inputs' name='myEmail' required/>
                
            <select name="" className='inputs'>
                <option value="Select a course">Select a course</option>
                <option value="Web Development">Web Development</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="DBMS">DBMS</option>
            </select>
                <input type="submit" className='inputs' value="Sign Up Now" name='mySubmit' id='inputbtn'/>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
