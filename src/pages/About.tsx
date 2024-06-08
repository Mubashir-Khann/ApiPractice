import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          <Link to="/Home">HOME</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default About;
