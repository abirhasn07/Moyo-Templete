import React from "react";
import card1 from '../../images/card-1.png';
import card2 from '../../images/card-2.png';
import card3 from '../../images/card-3.png';
import "./About.css";
const About = () => {
  return (
    <section className="about"id="About">
      <h1 className="about-title">Our specialization</h1>
      <h4 className="about-subtitle">
        A minimalist approach is the only way to design a website.
      </h4>
      <div className="about-container">
          <div className="about-card">
            <img src={card1} alt="card-1" />
            <h3>Design</h3>
            <p>We've made the template fully responsive, so it looks great on all devices.</p>
          </div>
          <div className="about-card">
          <img src={card2} alt="card-1" />
            <h3>Development</h3>
            <p>Use the power of Webflow CMS to add new case studies, blog posts, categories and tags.</p>
          </div>
          <div className="about-card">
          <img src={card3} alt="card-1" />
            <h3>Ecommerce</h3>
            <p>We're always glad to help, so don’t hesitate to contact us if you have any questions.</p>
          </div>
      </div>
    </section>
  );
};

export default About;
