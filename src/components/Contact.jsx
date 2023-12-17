import './Contact.css';
import 'font-awesome/css/font-awesome.min.css';

const Contact = () => {
  return (
    <section className="footer_get_touch_outer">
      <div className="container">
        <div className="footer_get_touch_inner grid-70-30">
          <div className="colmun-70 get_form">
            <div className="get_form_inner">
              <div className="get_form_inner_text">
                <h3>Get In Touch</h3>
              </div>
              <form action="#">
                <div className="grid-50-50">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                  <input type="email" placeholder="Email" />
                  <input type="tel" placeholder="Phone" />
                </div>
                <div className="grid-full">
                  <textarea placeholder="About Your Project" cols="30" rows="10"></textarea>
                  <input type="message" value="Send Message" />
                </div>
              </form>
            </div>
          </div>
          <div className="colmun-30 get_say_form">
            <h5>Say Hi!</h5>
            <ul className="get_say_info_sec">
              <li>
                <i className="fa fa-envelope"></i>
                <a href="mailto:markmoses817@gmail.com">markmoses817@gmail.com</a>
              </li>
              <li>
       <i className="fa fa-whatsapp"></i>
      <a href="tel:+254715137922">+254 1513 7922</a>
       </li>
              <li>
                <i className="fa fa-phone"></i>
                <a href="#">+254715137922</a>
              </li>
            </ul>
            <ul className="get_say_social-icn">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
