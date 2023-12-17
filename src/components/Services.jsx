import { FaDesktop, FaCode, FaPalette, FaBriefcase, FaFileAlt, FaMobileAlt } from 'react-icons/fa';
import './Services.css';
const Services = () => {
    return (
        <div className="services-container">
            <h2>What we do</h2>

            <div className="services-row">
            <div className="service">
                <h3><FaDesktop /></h3>
                <h4>Web Design</h4>
                <p>
                    We specialize in creating visually appealing and user-friendly website designs that align with your brand and business goals.
                </p>
            </div>
            <div className="service">
                <h3><FaCode /> </h3>
                <h4>Web Development</h4>
                <p>
                    Our experienced team of developers can turn your design into a fully functional website using modern web technologies and frameworks.
                </p>
            </div>
            <div className="service">
                <h3><FaPalette /> </h3>
                <h4>UI/UX Design</h4>
                <p>
                    We create intuitive and user-friendly interfaces for websites and mobile applications that enhance user experience and engagement.
                </p>
            </div>
            <div className="service">
                <h3><FaBriefcase /></h3>
                <h4>IT Consultancy</h4>
                <p>
                    We provide expert IT consultancy services to help businesses optimize their technology infrastructure and improve efficiency.
                </p>
            </div>
            <div className="service">
                <h3><FaFileAlt /> </h3>
                <h4>Resume Writing</h4>
                <p>
                    Our professional resume writers can create a compelling and tailored resume that highlights your skills and experiences effectively.
                </p>
            </div>
            <div className="service">
                <h3><FaMobileAlt /></h3>
                <h4>Online Job Application</h4>
                <p>
                    We develop custom online application solutions to streamline your business processes and enhance productivity.
                </p>
            </div>
            <div className="service">
                <h3><FaMobileAlt /></h3>
                <h4>Mobile App Design </h4>
                <p>
                    In addition to the above, we offer a range of other services to meet your specific web design and development needs.
                </p>
            </div>
            <div className="service">
                <h3><FaMobileAlt /></h3>
                <h4>Mobile App Development</h4>
                <p>
                    In addition to the above, we offer a range of other services to meet your specific web design and development needs.
                </p>
            </div>
            </div>
        </div>
    );
};

export default Services;
