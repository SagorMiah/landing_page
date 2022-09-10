import React from "react";
import decoration1 from "../images/decoration1.png";
import decoration2 from "../images/decoration2.png";
import decoration3 from "../images/decoration3.png";

const datas = [
  {
    img: decoration1,
    title: "Christmas Bells",
    buttonText: "Go Shopping",
  },
  {
    img: decoration2,
    title: "Christmas Candies",
    buttonText: "Go Shopping",
  },
  {
    img: decoration3,
    title: "Christmas Trees",
    buttonText: "Go Shopping",
  },
];

const Decorations = () => {
  return (
    <div className="decoration section" id="decoration">
      <div className="container">
        <h2 className="section_title">
          Give Christmas Decorations <br /> For Your Home
        </h2>
        <div className="decoration_container grid">
          {datas.map((data) => (
            <div
              data-aos="fade-left"
              key={data.title}
              className="decoration_data"
            >
              <img
                className="decoration_img"
                src={data.img}
                alt="decoration_image"
              />
              <h3 className="docoration_title">{data.title}</h3>
              <a href="#" className="button button_link">
                {data.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Decorations;
