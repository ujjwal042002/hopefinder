import React from "react";

import "../AppointmentModal/style.css";
import { FaUserAlt, FaCalendarAlt } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone, AiOutlineClose } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

function index({ closeModal }) {
  return (
    <div className="offset">
      <div className="modal-container">
        <AiOutlineClose
          className="btn-modal-close"
          onClick={() => closeModal(false)}
        />
        <h2 className="modal-heading underline">Book an appointment</h2>
        <form className="appointment-form">
          <div className="appointment-form-user-name-container">
            <div className="appointment-icon-container">
              <FaUserAlt className="appointment-icons" />
            </div>
            <input type="text" className="user-name" placeholder="Your Name" />
          </div>

          <div className="appointment-form-phone-number-container">
            <div className="appointment-icon-container">
              <AiOutlinePhone className="appointment-icons" />
            </div>
            <input
              type="text"
              className="phone-number"
              placeholder="Your Phone"
            />
          </div>

          <div className="appointment-form-email-container">
            <div className="appointment-icon-container">
              <AiOutlineMail className="appointment-icons" />
            </div>
            <input type="email" className="email" placeholder="Your Email" />
          </div>

          <div className="appointment-form-date-container">
            <div className="appointment-icon-container">
              <FaCalendarAlt className="appointment-icons" />
            </div>
            <input type="date" className="date" />
          </div>

          <div className="appointment-form-time-container">
            <div className="appointment-icon-container">
              <BiTimeFive className="appointment-icons" />
            </div>
            <input type="time" name="appointment-time" id="appointment-time" />
          </div>

          <button type="submit" className="book-now-btn">
            Book now
          </button>
        </form>
      </div>
    </div>
  );
}

export default index;
