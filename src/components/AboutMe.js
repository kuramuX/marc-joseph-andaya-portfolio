import React from 'react';
import './components-css.css';
import './components-responsive-css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faGamepad, faPaintBrush, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="Intro">
        <strong><p className="Hi">Hi, I’m Marc Joseph!</p></strong>
        <p className="Introduction"> A Freelance Programmer & Graphic Designer with a BSIT degree from Bicol, Philippines. I create functional programs, creative graphics, and polished photo edits—combining creativity with technical skill to bring ideas to life. Always open to new opportunities and collaborations.</p>
      </div>

      <div className="WhatIDo">
        <h2 className="sectionTitle">What I Do</h2>
        <div className="serviceBoxes">
          <div className="serviceBox">
            <FontAwesomeIcon icon={faCode} />
            <div className="serviceContent">
              <h3>Software Development</h3>
              <p>With my proficiency in VB.NET and Java, I am confident in building DBMS software and other types of programs.</p>
            </div>
          </div>
          <div className="serviceBox">
            <FontAwesomeIcon icon={faLaptopCode} />
            <div className="serviceContent">
              <h3>Web Development</h3>
              <p>I have experience developing websites using PHP, ReactJS, and WordPress.</p>
            </div>
          </div>
          <div className="serviceBox">
            <FontAwesomeIcon icon={faGamepad} />
            <div className="serviceContent">
              <h3>Game Development</h3>
              <p>I designed and developed both 2D and 3D games for my undergraduate projects using C# and Java.</p>
            </div>
          </div>
          <div className="serviceBox">
            <FontAwesomeIcon icon={faPaintBrush} />
            <div className="serviceContent">
              <h3>Multimedia Arts</h3>
              <p>I do graphic design work including posters, magazine layouts, logo and mockup designs, as well as freelance video editing.</p>
            </div>
          </div>
        </div>
      </div>

{/* Testimonial Section */}

      <div className="Testimonials">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonial-grid">
        <a
          href="https://www.linkedin.com/in/marclesteracunin/"
          target="_blank"
          rel="noopener noreferrer"
          className="testimonial-card"
          title="Open LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faUser} className="testimonial-photo" />
          <h3 className="testimonial-name">Marc Lester Acunin</h3>
          <p className="testimonial-position">College Instructor<br></br>Camarines Norte State College</p>
          <p className="testimonial-text">
            Marc Joseph has consistently proven to be a reliable and dedicated team member. During his time in college, he not only delivered project tasks on time but also balanced his responsibilities with various student organization responsibilities. His ability to manage multiple priorities without compromising on quality makes him a valuable asset to any team.
          </p>
        </a>

        <a
         href="https://www.facebook.com/delmajean"
          target="_blank"
          rel="noopener noreferrer"
          className="testimonial-card"
          title="Open Facebook Profile"
        >
          <FontAwesomeIcon icon={faUserTie} className="testimonial-photo" />
          <h3 className="testimonial-name">Dr. Delma Jean V. Abad</h3>
          <p className="testimonial-position">College Professor<br></br>Camarines Norte State College</p>
          <p className="testimonial-text">
            Mr. Andaya played a key role at Breakthrough, leading the magazine layout team and designing the literary folio with creativity and precision. He also contributed to publication materials, video editing for news coverage, and the design of uniforms and lanyards, leaving a strong impact on our publication.
          </p>
        </a>

        <a
          href="https://www.facebook.com/nelsonzate"
          target="_blank"
          rel="noopener noreferrer"
          className="testimonial-card"
          title="Open Facebook Profile"
        >
          <FontAwesomeIcon icon={faUser} className="testimonial-photo" />
          <h3 className="testimonial-name">Nelson Zate Cabrera</h3>
          <p className="testimonial-position">Proprietor<br></br>StickerOne Advertising Solutions</p>
          <p className="testimonial-text">
            Marc was a reliable and hardworking intern at StickerOne. He quickly learned our design and printing process, assisted with layouts, and showed great attention to detail in sticker and signage production. His creativity and professionalism made a positive impact during his stay with us.
          </p>
        </a>
      </div>
      </div>
    </div>
  );
}

export default AboutMe;