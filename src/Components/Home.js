import React from "react";
import BannerImage from "../Assets/about-background.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="ellipse-container">
          <div className="text-inside-ellipse">
            <h1 className="ternary-heading">
              Plant Space
            </h1>
            <h2 className="ternary-sheading">Your one stop destination to all plant suplies!</h2>
            <p className="ternary-text">
            🌿Explore our botanical wonderland and discover the perfect green companions for your home or office. 
            </p>
          </div>
          
          <div className="circle-in-ellipse">&#8226;</div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
