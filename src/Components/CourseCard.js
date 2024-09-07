import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CourseCard(props) {
  return (
    <>
      <div className="card" data-aos="fade-down">
        <div className="carddiv1">
          <img src={props.image} alt="" className='img1'/>
        </div>
        <div className="carddiv2">
          <div className="subcard2">
            <div className="icon"></div>
            <p className="iconpara" id='ip1'>{props.number} Students</p>
            <div className="icon2"></div>
            <p className="iconpara" id='ip2'>{props.duration} min</p>
          </div>
          <p className="cardtitle"><NavLink to="/courses">{props.title}</NavLink></p>  
        </div>
        <div className="carddiv3">
          <div className="icon3"></div>
          <p className="card3para">{props.rating} (250)</p>
          <p className="card3para2">$ {props.price}</p>
        </div>
      </div>
    </>
  );
}
