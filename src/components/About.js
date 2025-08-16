import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I am passionate about building modern web applications and solving real-world
        problems with code.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;