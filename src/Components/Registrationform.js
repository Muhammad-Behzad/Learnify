import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Registrationform() {
  return (
    <>
      <Navbar/>
      <div className="regmaindiv">
        <p className='regheading'>Register Yourself !</p>
        <div className="registerbox">
          <form action="">

            <div>
              <input type="text" placeholder='First Name' required className='reginput'/>
            </div>
            <div>
              <input type="text" placeholder='Last Name' required className='reginput'/>
            </div>
            <div>
              <input type="email" placeholder='Your Email' required className='reginput'/>
            </div>
            <div>
              <input type="text" placeholder='Your Phone number' required className='reginput'/>
            </div>
            <div>
              <select name="" id="">
              <option value="Select Course">Select Course</option>
                <option value="Web design and development">Web design and development</option>
                <option value="Graphic designing">Graphic designing</option>
                <option value="software development">software development</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="DBMS">DBMS</option>
              </select>
            </div>
            <div id='regdiv'>
              <input type="submit" className='regbtn'/> 
              <input type="reset" className='regbtn' id='regbtn2'/>
            </div>

          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}
