import React from "react";
import "./Form.css";

const ContactForm = () => {
  return (
    <div className="form-map-container">
      <div className="map-container">
        <div className="responsive-iframe">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Dar%20es%20Salaam&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            width="100%"
            height="540"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="form-container">
        <form
          className="form"
          method="POST"
          action="https://formspree.io/f/mqkjgawz"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-control"
              placeholder="Your Company Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              required
              className="form-control"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea
              name="textarea"
              id="textarea"
              rows="5"
              required
              className="form-control"
              placeholder="Your message here"
            />
          </div>
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
