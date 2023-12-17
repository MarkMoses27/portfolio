// NavBar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome styles
import './NavBar.css';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? 'main-container' : ''} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            Mark Co
          </Link>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={click ? handleClick : null}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={click ? handleClick : null}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-links" onClick={click ? handleClick : null}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={click ? handleClick : null}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={click ? handleClick : null}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a href="tel:+254715137922" className="nav-links" onClick={click ? handleClick : null}>
                <i className="fas fa-phone"></i> +254715137922
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
