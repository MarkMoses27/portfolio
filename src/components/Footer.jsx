import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Email: markmoses817@gmail.com</p>
          <p>Phone: (+254) 1513 7922</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <p>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </p>
          <p>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </p>
        </div>
        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <p>
            <a href="/">
              <i className="fas fa-home"></i> Home
            </a>
          </p>
          <p>
            <a href="/about">
              <i className="fas fa-info-circle"></i> About
            </a>
          </p>
          <p>
            <a href="/contact">
              <i className="fas fa-envelope"></i> Contact
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Mark Co. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
