import profilePhoto from './images/marc-joseph-andaya-profile-photo.jpg';
import './App.css';
import { useState } from 'react';
import BasicInfo from './components/AboutMe';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [activePage, setActivePage] = useState('basicinfo');

  const renderPage = () => {
    switch (activePage) {
      case 'basicinfo':
        return <BasicInfo />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="LandingPage">
      <div className="Profile">
        <img src={profilePhoto} alt="marc-joseph-andaya-profile-photo"/>
        <h1>Marc Joseph Andaya</h1>
        <h3 className='JobTitle'>Programmer | Game Dev <br/> Graphic Designer</h3>
        <div className="contact-info d-flex align-items-center gap-3">
          <div className="icon-wrapper d-flex justify-content-center align-items-center">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="text-content text-start">
            <span className="fw-semibold d-block">EMAIL</span>
            <p className="mb-0">andayamarcjoseph1@gmail.com</p>
          </div>
        </div>

        <div className="contact-info d-flex align-items-center gap-3">
          <div className="icon-wrapper d-flex justify-content-center align-items-center">
            <i className="fas fa-mobile"></i>
          </div>
          <div className="text-content text-start">
            <span className="fw-semibold d-block">PHONE</span>
            <p className="mb-0">(+63) 992 4623 905</p>
          </div>
        </div>

        <div className="contact-info d-flex align-items-center gap-3">
          <div className="icon-wrapper d-flex justify-content-center align-items-center">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="text-content text-start">
            <span className="fw-semibold d-block">DEGREE</span>
            <p className="mb-0">BS Information Technology</p>
          </div>
        </div>

        <div className="contact-info d-flex align-items-center gap-3">
          <div className="icon-wrapper d-flex justify-content-center align-items-center">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="text-content text-start">
            <span className="fw-semibold d-block">LOCATION</span>
            <p className="mb-0">Laguna, Philippines</p>
          </div>
        </div>
  
        <div className="social-links">
          <h4>Connect With Me</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/andayamarcjoseph1" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a> 
            <a href="https://www.linkedin.com/in/marc-joseph-andaya/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a> 
            <a href="https://github.com/kuramuX" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.behance.net/marcjosephandaya-ph" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="Pages">
        <div className="PageHeader">
          <h2 className="PageTitle">
            {{
              basicinfo: 'About Me',
              resume: 'Resume',
              portfolio: 'Portfolio',
              contact: 'Contact'
            }[activePage] || 'Page'}
          </h2>
          <nav className="Navbar">
            <ul>
              <li>
                <button
                  onClick={() => setActivePage('basicinfo')}
                  className={activePage === 'basicinfo' ? 'NavbarButton active' : 'NavbarButton'}>
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('resume')}
                  className={activePage === 'resume' ? 'NavbarButton active' : 'NavbarButton'}>
                  Resume
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('portfolio')}
                  className={activePage === 'portfolio' ? 'NavbarButton active' : 'NavbarButton'}>
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('contact')}
                  className={activePage === 'contact' ? 'NavbarButton active' : 'NavbarButton'}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
