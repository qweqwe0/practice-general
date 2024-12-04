import React from "react";
import inst from '../assets/ic-instagram.png'
import WA from '../assets/ic-whatsapp.png'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h2>Contact</h2>
        <div className="q">
        <div className="footer-details">
            <div className="contact-item">
                <h3>Phone</h3>
                <p>+7 (499) 350-66-04</p>
            </div>
            <div className="contact-item">
                <h3>Socials</h3>
                    <div className="social-icons">
                    <a href="#instagram" target="_blank" >
                        <img src={inst}/>
                    </a>
                    <a href="#whatsapp" target="_blank">
                        <img src={WA}/>
                    </a>
                    </div>
            </div>
            <div className="contact-item">
                <h3>Address</h3>
                <p>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
            </div>
            <div className="contact-item">
                <h3>Working Hours</h3>
                <p>24 hours a day</p>
            </div>
        </div>

        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.6542698453923!2d37.625346426520045!3d55.72465687947057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54af44a30fb25%3A0x924e865ba648567f!2sDubininskaya%20Ulitsa%2C%2096%2C%20Moskva%2C%20Russia%2C%20115093!5e0!3m2!1sen!2sru!4v1697800000000!5m2!1sen!2sru"
            width="100%"
            height="350"
            style={{ border: 0,borderRadius: 10 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;