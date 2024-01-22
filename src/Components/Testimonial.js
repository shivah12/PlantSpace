import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <div className="testimonial">
        <iframe
          src="https://i.pinimg.com/originals/88/00/b9/8800b95c0e6fd715de02a8f5ddfb046b.gif"
          width="500"
          height="490"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Giphy"
        ></iframe>
      
        </div>
        <p className="ternary-subheading">Testimonial</p>
        
        <h1 className="ternary-heading">What They Are Saying</h1>
        <p className="ternary-text">
          Let's breeze through them...
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          As a nature lover, Plantspace is a dream come true. The mission to inspire a deeper connection with nature truly reflects in the quality of their plants. The virtual plant consultations and personalized care plans are innovative additions that set Plantspace apart. Highly recommended!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Grace T. - Plant Enthusiast</h2>
        
      </div>
    </div>
  );
};

export default Testimonial;
