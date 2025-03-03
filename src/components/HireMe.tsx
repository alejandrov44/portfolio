import React from "react";
import "./HireMe.css";
import Image from "next/image";
import EnvelopeIcon from "@/images/icons/envelope";
import TelephoneIcon from "@/images/icons/telephone";
import CoffeeIcon from "@/images/icons/coffee";
import LinkdinIcon from "@/images/icons/linkdin";
import profilePic from "@/images/profilePic.jpg";

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <Image src={profilePic} alt="Alejandro Viana" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">Alejandro Viana</h3>
          <p className="badge-title">Software Engineer</p>
          <p className="badge-description">With 3+ years in development,</p>
          <p className="badge-description">skilled in Node.js</p>
          <p className="badge-company">Shopfully | LaSalle Universtity</p>
          <a href="https://www.linkedin.com/in/alejandro-viana/" target="_blank" rel="noopener noreferrer" className="badge-link">
            <LinkdinIcon className="linkedin-icon" alt={"Linkdin Icon"} /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <EnvelopeIcon className="contact-icon" alt={"Envelope Icon"} />
          <a href="mailto:alejandrovianalaba@gmail.com" className="contact-link">
            alejandrovianalaba@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <TelephoneIcon className="contact-icon" alt={"Telephone Icon"} />
          <a href="tel:638170457" className="contact-link">
            638170457
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <CoffeeIcon className="coffee-icon" alt={"Coffee Icon"} />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
