import React from 'react';
export default function Carousel() {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" id='carousel_item'>
    <div className="divbox">
            <div className="imgbox"></div>
            <p className='para' id="para1" data-aos="fade-down">We believe in</p>
            <p className='para' id="para2" data-aos="fade-down">Lifelong Learning</p>
            <p className='para' id="para1" data-aos="fade-down">and Learnify is a great tool to learn</p>

            <button className="divboxbtn" id='btn1' data-aos="fade-down">EXPLORE WITH US</button>
            <button className="divboxbtn" id='btn2' data-aos="fade-down">TEST DEMO</button>
        </div>
      <img src="carousel-2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" id='carousel_item'>
    <div className="divbox">
            <div className="imgbox"></div>
            <p className='para' id="para1" data-aos="fade-down">We believe in</p>
            <p className='para' id="para2" data-aos="fade-down">Lifelong Learning</p>
            <p className='para' id="para1" data-aos="fade-down">and Learnify is a great tool to learn</p>

            <button className="divboxbtn" id='btn1' data-aos="fade-down">EXPLORE WITH US</button>
            <button className="divboxbtn" id='btn2' data-aos="fade-down">TEST DEMO</button>
        </div>
      <img src="carousel-1.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}
