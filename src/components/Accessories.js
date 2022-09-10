import React from "react";
import accessory1 from "../images/accessory1.png";
import accessory2 from "../images/accessory2.png";
import accessory3 from "../images/accessory3.png";
import accessory4 from "../images/accessory4.png";
import accessory5 from "../images/accessory5.png";

const datas = [
  {
    img: accessory1,
    title: "Snow Globe",
    category: "Accessory",
    price: 9.45,
    icon: <i className="uil uil-heart"></i>,
  },
  {
    img: accessory2,
    title: "Candy",
    category: "Accessory",
    price: 2.52,
    icon: <i className="uil uil-heart"></i>,
  },
  {
    img: accessory3,
    title: "Angel",
    category: "Accessory",
    price: 13.15,
    icon: <i className="uil uil-heart"></i>,
  },
  {
    img: accessory4,
    title: "Sphere",
    category: "Accessory",
    price: 4.25,
    icon: <i className="uil uil-heart"></i>,
  },
  {
    img: accessory5,
    title: "Surprise gift",
    category: "Accessory",
    price: 7.99,
    icon: <i className="uil uil-heart"></i>,
  },
];

const Accessories = () => {
  return (
    <div className="accessories section" id="accessoreis">
      <div className="container">
        <h2 class="section_title">
          New Christmas <br /> Accessories
        </h2>

        <div className="accessories_container grid">
          {datas.map((data) => (
            <div
              data-aos="fade-right"
              key={data.title}
              className="accessories_data"
            >
              <img
                className="accessory_img"
                src={data.img}
                alt="accessory_image"
              />
              <h3 className="accessory_title">{data.title}</h3>
              <span className="accessory_category">{data.category}</span>
              <span className="accessory_price">{data.price}</span>
              <a className="button accessory_button" href="#">
                {data.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
