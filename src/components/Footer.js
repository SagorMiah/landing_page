import React from "react";

const Footer = () => {
  return (
    <div className="footer section" id="footer">
      <div className="footer_container container grid">
        <div className="footer_content">
          <h3 className="footer_logo">
            <a href="#">Christmas Gift</a>
          </h3>
          <p className="footer__description">
            I sent a gift and it gives <br /> happiness
          </p>
        </div>

        <div className="footer_content">
          <h3 className="footer__title">Our Services</h3>
          <ul>
            <li>
              <a href="#" className="footer_link">
                Pricing{" "}
              </a>
            </li>
            <li>
              <a href="#" className="footer_link">
                Discounts
              </a>
            </li>
            <li>
              <a href="#" className="footer_link">
                Shipping mode
              </a>
            </li>
          </ul>
        </div>

        <div className="footer_content">
          <h3 className="footer__title">Our Company</h3>
          <ul>
            <li>
              <a href="#" className="footer_link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="footer_link">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="footer_link">
                Our mision
              </a>
            </li>
          </ul>
        </div>

        <div className="footer_content">
          <h3 className="footer__title">Social</h3>
          <a href="#" className="footer__social">
            <i className="uil uil-facebook-f"></i>
          </a>
          <a href="#" className="footer__social">
            <i className="uil uil-twitter"></i>
          </a>
          <a href="#" className="footer__social">
            <i className="uil uil-instagram-alt"></i>
          </a>
        </div>
      </div>

      <div className="copy_write">&copy; All rights reversed.</div>
    </div>
  );
};

export default Footer;
