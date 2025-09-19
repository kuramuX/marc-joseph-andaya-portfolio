import React, { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="ContactPage">

      {/* Top Section: Email & Phone */}
      <div className="contact-row">
        <div className="contact-card">
          <h3>
            <i className="fas fa-envelope"></i>
            Email
          </h3>
          <div className="copy-info">
            <p>andayamarcjoseph1@gmail.com</p>
            <button
              onClick={() => handleCopy("andayamarcjoseph1@gmail.com", "Email")}
              className="copy-btn"
            >
            Copy
            </button>
          </div>
          {copied === "Email" && <span className="copied-msg">Copied!</span>}
        </div>

        <div className="contact-card">
          <h3>
            <i className="fas fa-mobile-alt"></i>
            Phone
          </h3>
          <div className="copy-info">
            <p>09924623905</p>
            <button
              onClick={() => handleCopy("09924623905", "Phone")}
              className="copy-btn"
            >
            Copy
            </button>
          </div>
          {copied === "Phone" && <span className="copied-msg">Copied!</span>}
        </div>
      </div>

      {/* Social Profiles */}
      <div className="contact-row">
        <div 
          className="contact-card clickable-card"
          onClick={() => handleSocialClick("https://www.facebook.com/andayamarcjoseph1")}
        >
          <h3>
            <i className="fab fa-facebook-f"></i>
            Facebook
          </h3>
          <p>Marc Joseph Andaya</p>
          {copied === "Facebook" && <span className="copied-msg">Clicked!</span>}
        </div>

        <div 
          className="contact-card clickable-card"
          onClick={() => handleSocialClick("https://www.linkedin.com/in/marc-joseph-andaya/")}
        >
          <h3>
            <i className="fab fa-linkedin-in"></i>
            LinkedIn
          </h3>
          <p>Marc Joseph Andaya</p>
          {copied === "LinkedIn" && <span className="copied-msg">Clicked!</span>}
        </div>
      </div>

      {/* Google Maps */}
      <div className="map-container">
        <h3>
          <i className="fas fa-map-marker-alt"></i>
          My Location
        </h3>
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d598.2313323366952!2d121.40333632809288!3d14.374382077753719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smaps!5e1!3m2!1sen!2sph!4v1757168991102!5m2!1sen!2sph"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "0.75rem" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
