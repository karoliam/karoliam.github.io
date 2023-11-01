import React, {useRef} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import About from './About';
import Gallery from './gallery';
import CV from './CV';
import projectList from '../utils/projectList';
import styles from '../css/NavigationBar.module.css';
import Github from '../assets/github-mark.png';
import Linkedin from '../assets/LI-In-Bug.png';
import Image from 'react-bootstrap/Image';

const NavigationBar = () => {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const cvRef = useRef();

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'});
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className={styles.navBarContainer}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navContainer}>
          <Nav className="ml-auto">
          <div className={styles.logoContainer}>
              <a href="https://github.com/karoliam"><Image src={Github} className={styles.logo} />
              </a>
              <a href="https://www.linkedin.com/in/karoliinamultas/"><Image src={Linkedin} className={styles.logo} />
              </a>
              </div>
            <Nav.Link onClick={() => scrollToRef(aboutRef)}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToRef(projectsRef)}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToRef(cvRef)}>CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Gallery list={projectList} />
      </div>
      <div ref={cvRef}>
        <CV />
      </div>
      <button onClick={scrollToTop} className={styles.backToTop}>
        Back to Top
      </button>
    </div>
  );
};

export default NavigationBar;
