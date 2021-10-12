import React from 'react'
import nehal from '../img/nehalbg.png';
import { NavLink } from 'react-router-dom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Navbar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={nehal} alt="" />
        </div>

        <div className="icons">
          <a href="https://github.com/nehalagrawal20" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a href="https://www.linkedin.com/in/nehal-agrawal-4b32b31b3/" className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </a>
          <a href="http://twitter.com/NehalAgrawal20" className="icon-holder">
            <FontAwesomeIcon icon={faTwitter} className="icon tw" />
          </a>
          <a href="https://instagram.com/_nehal20_" className="icon-holder">
            <FontAwesomeIcon icon={faInstagram} className="icon it" />
          </a>
          <a href="https://codepen.io/nehal20" className="icon-holder">
            <FontAwesomeIcon icon={faCodepen} className="icon cp" />
          </a>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              About
                      </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/education" exact activeClassName="active">
              Education
                      </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/skills" exact activeClassName="active">
              Skills
                      </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" exact activeClassName="active">
              Projects
                      </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/experience" exact activeClassName="active">
              Experience
                      </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/experiments" exact activeClassName="active">
              Experiments
                      </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
                      </NavLink>
          </li>
        </ul>

        <footer className="footer">
          <p>
            @2021 Nehal Agrawal
                  </p>
        </footer>
      </nav>

    </div>
  )
}

export default Navbar;
