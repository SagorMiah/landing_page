import React, { useEffect } from "react";
import homeImg from "../images/home.png";

const Home = () => {
  return (
    <div className="home section" id="home">
      <div className="home_container container grid">
        <div data-aos="fade-left" className="home_img">
          <img src={homeImg} alt="home_img" />
        </div>

        <div data-aos="fade-right" className="home_data">
          <h1 className="home_title">Send A Gift For Christmas</h1>
          <p className="home_description">
            In these end of the year holidays send a gift to your loved one and
            share the happiness at Christmas.
          </p>
          <a href="#" className="button">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
