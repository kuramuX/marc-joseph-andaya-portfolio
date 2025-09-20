import React from "react";
import cnscLogo from "./images/cnsc_logo.png";
import mcfiLogo from "./images/mcfi_logo.png";
import sfnhsLogo from "./images/sfnhs_logo.png";
import sfesLogo from "./images/sfes_logo.png";

import btLogo from "./images/bt_logo.jpg";
import stickeroneLogo from "./images/stickerone_logo.jpg";
import happyclqLogo from "./images/happyclq_logo.jpg";
import mnlboxLogo from "./images/mnlbox_logo.jpg";

import certThumbnail1 from "./images/cert1.jpg";
import certThumbnail2 from "./images/cert2.jpg";
import certThumbnail3 from "./images/cert3.jpg";
import certThumbnail4 from "./images/cert4.jpg";
import certThumbnail5 from "./images/cert5.jpg";
import certThumbnail6 from "./images/cert6.jpg";
import certThumbnail7 from "./images/cert7.jpg";
import certThumbnail8 from "./images/cert8.jpg";

import cert1 from "./images/cert1.jpg";
import cert2 from "./images/cert2.jpg";
import cert3 from "./images/cert3.jpg";
import cert4 from "./images/cert4.jpg";
import cert5 from "./images/cert5.jpg";
import cert6 from "./images/cert6.jpg";
import cert7 from "./images/cert7.jpg";
import cert8 from "./images/cert8.jpg";

import AcademicProjects from "./academic-projects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faTools,
  faBriefcase,
  faProjectDiagram,
  faChalkboardTeacher,
  faAward
} from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (
    <div className="Resume">

      <section className="resume-section">
        <h2><FontAwesomeIcon icon={faBriefcase} /> Experience</h2>
        <div className="experience-container">

          <div className="experience-item">
            <img src={mnlboxLogo} alt="MNL box.ph" />
            <div className="experience-details">
              <a
                href="https://www.facebook.com/MNLbox.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="company-name"
              >
                <strong>MNL box.ph</strong>
              </a>
              <p className="position"><strong>Layout Artist</strong> (2025)</p>
              <p className="description">
                Handled designing box packaging for collectible toy figures, ensuring visually appealing and production-ready layouts. Developed clean, scalable vector logos tailored for vinyl sticker applications, particularly for jewelry boxes using cutter plotters.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <img src={happyclqLogo} alt="Happy-CLQ" />
            <div className="experience-details">
              <a
                href="https://www.facebook.com/happyclq"
                target="_blank"
                rel="noopener noreferrer"
                className="company-name"
              >
                <strong>Happy CLQ</strong>
              </a>
              
              <p className="position"><strong>Social Media Manager | Photo Editor</strong> (2025)</p>
              <p className="description">
                Worked as a photo editor and assistant photographer for studio sessions and event coverages, enhancing images to maintain professional quality and brand consistency. Assisted in photography setups and on-site coverage, ensuring smooth execution and high-quality results. Additionally, managed the studio's Facebook page by creating and scheduling content, engaging with the audience, and tracking performance to strengthen online visibility.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <img src={stickeroneLogo} alt="StickerOne Advertising Solutions" />
            <div className="experience-details">
              <a
                href="https://www.facebook.com/stickeroneads"
                target="_blank"
                rel="noopener noreferrer"
                className="company-name"
              >
                <strong>StickerOne Advertising Solutions</strong>
              </a>
              <p className="position"><strong>Graphic Designer | Social Media Manager</strong> (2024)</p>
              <p className="description">
                Designed and produced marketing and promotional materials, managed Facebook content and client engagement, and worked directly with clients to present proposals and close deals. Also created layouts for tarpaulins and vinyl stickers, ensuring accurate, high-quality outputs for production.
              </p>
              
            </div>
          </div>

          <div className="experience-item">
            <img src={btLogo} alt="Breakthrough" />
            <div className="experience-details">
              <a
                href="https://www.facebook.com/BreakthroughPub"
                target="_blank"
                rel="noopener noreferrer"
                className="company-name"
              >
                <strong>Breakthrough</strong>
              </a>
              <p className="position"><strong>Chief Layout Artist</strong> (2023–2024)</p>
              <p className="description">
                Worked as a layout artist and video editor, creating visual content for both print and digital platforms; designed the layout for the campus literary folio and led the layout team in producing the official school magazine, ensuring high-quality output for distribution to all students on campus.
              </p>
              
            </div>
          </div>
        </div>
      </section>
{/* Key Skill Section */}
      <section className="resume-section">
        <h2><FontAwesomeIcon icon={faTools} /> Key Skills</h2>
        
        <div className="skills-container">
          <div className="skills-group">
            <h3>Programming</h3>
            <ul className="skills-list">
              <li className="skill-badge">Java</li>
              <li className="skill-badge">VB.Net</li>
              <li className="skill-badge">Python</li>
              <li className="skill-badge">HTML/CSS</li>
              <li className="skill-badge">JavaScript</li>
              <li className="skill-badge">React.js</li>
            </ul>
          </div>

          <div className="skills-group">
            <h3>Graphic Design</h3>
            <ul className="skills-list">
              <li className="skill-badge">Adobe Photoshop</li>
              <li className="skill-badge">Adobe Illustrator</li>
              <li className="skill-badge">Adobe InDesign</li>
              <li className="skill-badge">Canva</li>
            </ul>
          </div>

          <div className="skills-group">
            <h3>Game Dev / 3D</h3>
            <ul className="skills-list">
              <li className="skill-badge">3DS Max</li>
              <li className="skill-badge">Blender</li>
              <li className="skill-badge">Unity</li>
              <li className="skill-badge">Unreal Engine</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2><FontAwesomeIcon icon={faProjectDiagram} /> Academic Projects</h2>
        <AcademicProjects/>
      </section>

      <section className="resume-section">
        <h2><FontAwesomeIcon icon={faChalkboardTeacher} /> Seminars and Trainings</h2>
          <div className="seminar-columns">
            <a
              href= {cert1}
              target="_blank"
              rel="noopener noreferrer"
              className="seminar-card"
            >
              <p>
                <span className="seminar-title">Python Programming Essentials Training</span>
                <br></br>
                <span className="seminar-meta">June 2021</span>
              </p>
              <img src={certThumbnail1} alt="Python Programming Essentials Training" />
            </a>

            <a
              href= {cert2}
              target="_blank"
              rel="noopener noreferrer"
              className="seminar-card"
            >
              <p>
                <span className="seminar-title">Interactive Youth Forum (IYF) 2023</span>
                <br></br>
                <span className="seminar-meta">March 2023</span>
              </p>
              <img src={certThumbnail2} alt="Interactive Youth Forum" />
            </a>

            <a
              href= {cert3}
              target="_blank"
              rel="noopener noreferrer"
              className="seminar-card"
            >
              <p>
                <span className="seminar-title">11th Bicol Youth Congress in Information Technology</span>
                <br></br>
                <span className="seminar-meta">April 2023</span>
              </p>
              <img src={certThumbnail3} alt="11th Bicol Youth Congress in Information Technology" />
            </a>

            <a
              href= {cert4}
              target="_blank"
              rel="noopener noreferrer"
              className="seminar-card"
            >
              <p>
                <span className="seminar-title">OSSEI National Training/Workshop on Campus Journalism</span>
                <br></br>
                <span className="seminar-meta"> September 2023</span>
              </p>
              <img src={certThumbnail4} alt="OSSEI National Training/Workshop on Campus Journalism" />
            </a>

            <a
              href= {cert5}
              target="_blank"
              rel="noopener noreferrer"
              className="seminar-card"
            >
              <p>
                <span className="seminar-title">Developing Affiliate Marketing Website</span>
                <br></br>
                <span className="seminar-meta">December 2023</span>
              </p>
              <img src={certThumbnail5} alt="Developing Affiliate Marketing Website" />
            </a>

            <a
              href= {cert6}
              target="_blank"
              rel="noopener noreferrer"
              className="seminar-card"
            >
              <p>
                <span className="seminar-title">Advancing on Open RAN in Asia (Artificial Intelligence/Machine Learning)</span>
                <span className="seminar-meta"> — October 2024</span>
              </p>
              <img src={certThumbnail6} alt="Artificial Intelligence/Machine Learning" />
            </a>

            <a
              href= {cert7}
              target="_blank"
              rel="noopener noreferrer"
              className="seminar-card"
            >
              <p>
                <span className="seminar-title">Advancing on Open RAN in Asia (AI Ethics and Governance)</span>
                <br></br>
                <span className="seminar-meta">October 2024</span>
              </p>
              <img src={certThumbnail7} alt="AI Ethics and Governance" />
            </a>

            <a
              href= {cert8}
              target="_blank"
              rel="noopener noreferrer"
              className="seminar-card"
            >
              <p>
                <span className="seminar-title">Search Engine Optimization (SEO) for Improving Public Access to Government Information</span>
                <span className="seminar-meta"> — June 2025</span>
              </p>
              <img src={certThumbnail8} alt="Communication Seminar" />
            </a>
          </div>
      </section>

      <section className="resume-section">
        <h2><FontAwesomeIcon icon={faAward} /> Academic Awards</h2>
        <div className="awards-container">
          <div className="awards-group">
            <h3>College</h3>
            <ul className="awards-list">
              <li className="awards-badge">Academic Distinction Award</li>
              <li className="awards-badge">Journalist of the Year Award</li>
              <li className="awards-badge">Dean's Lister 2022</li>
            </ul>
          </div>

          <div className="awards-group">
            <h3>Senior High School</h3>
            <ul className="awards-list">
              <li className="awards-badge">With Honors <span className="awards-time">(Grade 11 - 1st Sem)</span></li>
              <li className="awards-badge">With Honors <span className="awards-time">(Grade 11 - 2nd Sem)</span></li>
              <li className="awards-badge">With Honors <span className="awards-time">(Grade 12 - 1st Sem)</span></li>
              <li className="awards-badge">With Honors <span className="awards-time">(Grade 12 - 2nd Sem)</span></li>
            </ul>
          </div>

          <div className="awards-group">
            <h3>Junior High School</h3>
            <ul className="skills-list">
              <li className="awards-badge">With Honors <span className="awards-time">(Grade 10 - 2018)</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2><FontAwesomeIcon icon={faGraduationCap} /> Education</h2>
        <div className="education-container">
          <div className="education-item">
            <img src={cnscLogo} alt="Camarines Norte State College" />
            <p><i className="fas fa-university"></i></p>
            <p className="level">Tertiary</p>
            <p>
              <a
                href="https://www.facebook.com/cnscfutureuni"
                target="_blank"
                rel="noopener noreferrer"
                className="school-name"
              >
                <strong>Camarines Norte State College</strong>
              </a>
            </p>
            <p>BS Information Technology</p>
            <p className="year">2020 – 2024</p>
            <p>
              <a
                href="https://maps.app.goo.gl/b415bYVnppfCVSzM6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Daet, Camarines Norte
              </a>
            </p>
          </div>
          <div className="education-item">
            <img src={mcfiLogo} alt="Microsystems College Foundation, Inc." />
            <p><i className="fas fa-school"></i></p>
            <p className="level">Senior High School</p>
            <p>
              <a
                href="https://www.facebook.com/profile.php?id=100083108569911"
                target="_blank"
                rel="noopener noreferrer"
                className="school-name"
              >
                <strong>Microsystems College Foundation, Inc.</strong>
              </a>
            </p>
            <p>Computer Programming</p>
            <p className="year">2018 – 2020</p>
            <p>
              <a
                href="https://maps.app.goo.gl/RZAVt8exMLTKUWdSA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Daet, Camarines Norte
              </a>
            </p>
          </div>
          <div className="education-item">
            <img src={sfnhsLogo} alt="San Felipe National High School" />
            <p><i className="fas fa-school"></i></p>
            <p className="level">Junior High School</p>
            <p>
              <a
                href="https://www.facebook.com/profile.php?id=100089803824401"
                target="_blank"
                rel="noopener noreferrer"
                className="school-name"
              >
                <strong>San Felipe National High School</strong>
              </a>
            </p>
            <p>Secondary Education</p>
            <p className="year">2014 – 2018</p>
            <p>
              <a
                href="https://maps.app.goo.gl/eFmpPdDH27pxhXha8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Basud, Camarines Norte
              </a>
            </p>
          </div>
          <div className="education-item">
            <img src={sfesLogo} alt="San Felipe Elementary School" />
            <p><i className="fas fa-graduation-cap"></i></p>
            <p className="level">Elementary</p>
            <p>
              <a
                href="https://www.facebook.com/profile.php?id=100057457000823"
                target="_blank"
                rel="noopener noreferrer"
                className="school-name"
              >
                <strong>San Felipe Elementary School</strong>
              </a>
            </p>
            <p>Primary Education</p>
            <p className="year">2008 – 2014</p>
            <p>
              <a
                href="https://maps.app.goo.gl/TKJzo6AvNtvSGMks8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Basud, Camarines Norte
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
