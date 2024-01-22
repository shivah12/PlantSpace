import React from "react";
import AboutBackground from "../Assets/about-background-image.jpg";
import AboutBackgroundImage from "../Assets/about-background.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
  
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          About PlantSpace
        </h1>
        <p className="primary-text">
        Welcome to Plantspace, where greenery meets technology to create a harmonious space for plant enthusiasts and nature lovers alike.

<h4 className="secondary-heading">Our Story</h4>
Plantspace was born out of a shared passion for plants and a commitment in 2024 to bring the beauty of nature into every home and workspace.

<h3 className="secondary-heading">Our Mission</h3>
At Plantspace, our mission is to inspire and empower individuals to cultivate a deeper connection with nature. We believe that incorporating plants into daily life enhances well-being, promotes a healthier environment.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
