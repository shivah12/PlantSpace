import React from "react";
import Explore from "../Assets/delivery-image.png";
import Choose from "../Assets/choose-image.png";
import Delivery from "../Assets/reach.png";

const Work = () => {
  const workInfoData = [
    {
      image: Explore,
      title: "Explore",
      text: "Browse through our carefully curated selection of plants, each chosen for its unique beauty and ability to thrive in various environments. ",
    },
    {
      image: Choose,
      title: "Pick a Plant",
      text: "Whether you're a seasoned plant parent or a beginner, you'll find a variety of plants to suit your preferences and space. ",
    },
    {
      image: Delivery,
      title: "Fast Deliveries",
      text: "Once you've selected your plants our easy-to-navigate website and secure checkout process ensure a hassle-free shopping experience. Your green companions will be on their way to your doorstep.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="ternary-subheading">Work</p>
        <h1 className="ternary-heading">How It Works</h1>
        <p className="ternary-text">
        At Plantspace, our goal is to make the process of connecting with nature and transforming your space with plants a seamless and enjoyable experience. Here's a simple guide on how Plantspace works:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
