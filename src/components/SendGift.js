import React from "react";
import sendImg from "../images/send.png";

const SendGift = () => {
  return (
    <div className="send_gift section" id="send_gift">
      <div className="container send_container grid">
        <div data-aos="fade-up">
          <h2 className="section_title">Send Gift Now</h2>
          <p className="send_description">
            Start giving away before the holidays are over. Write the home
            address of the person who will send the gift.
          </p>

          <div className="send_form">
            <input
              className="send_input"
              type="text"
              placeholder="House address"
            />
            <a href="#" className="button">
              Send
            </a>
          </div>
        </div>

        <div data-aos="fade-down" className="send_img">
          <img src={sendImg} alt="send_img" />
        </div>
      </div>
    </div>
  );
};

export default SendGift;
