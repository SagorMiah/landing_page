import React from "react";
import shareImg from "../images/shared.png";

const Share = () => {
  return (
    <div className="share section" id="share">
      <div className="share_container container grid">
        <div data-aos="fade-left" className="share_data">
          <h1 className="section_title">
            Sharing Is The Best Gift <br /> You Can Give
          </h1>
          <p className="share_description">
            In these end of the year holidays send a gift to your loved one and
            share the happiness at Christmas.
          </p>
          <a href="#" className="button">
            Send a Gift
          </a>
        </div>
        <div data-aos="fade-right" className="share_img">
          <img src={shareImg} alt="share_img" />
        </div>
      </div>
    </div>
  );
};

export default Share;
