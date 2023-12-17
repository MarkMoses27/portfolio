import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
  
      <div className="hero-content">
        <h1>Hi!, I&apos;m Mark</h1>
        <p>I&apos;m Web designers, Web developers <br/>&  Graphic Designers.</p>
        <Link to="/contact" className="border-btn hire-me-button">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
