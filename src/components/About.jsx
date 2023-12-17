import { useEffect } from 'react';
import './About.css';
import $ from 'jquery'; // Import jQuery

const About = () => {
  // Use useEffect to run the jQuery code after the component has mounted
  useEffect(() => {
    $(document).ready(function() {
      $('.progress .progress-bar').css('width', function () {
        return $(this).attr('aria-valuenow') + '%';
      });
    });
  }, []); // Empty dependency array ensures the useEffect runs only once after the initial render

  return (
    <section className="about">
      <div className="main-content">
        <h1>About Myself</h1>
        <p>
          I&apos;m a creative web designer based in Nairobi, who loves clean, simple & unique design. I also enjoy crafting.
        </p>
        <button className="resume-btn">
          <a href="/contact">Download Resume</a>
        </button>
        <hr className="line" />
      
      </div>
    </section>
  );
}

export default About;
