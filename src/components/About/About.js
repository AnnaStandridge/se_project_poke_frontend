import React from "react";
import "./About.css";
import Welcome from "../../images/welcome.jpg";

function About() {
  return (
    <section className="about app__section">
      <img src={Welcome} alt="about-pic" className="about__image" />
      <div className="about__content">
        <h2 className="about__title">About Me!</h2>
        <p className="about__paragraph">
          My name is Anna. I'm a Software Engineer and this is my final project
          showing my Front-end React development skills.
        </p>
      </div>
    </section>
  );
}

export default About;
