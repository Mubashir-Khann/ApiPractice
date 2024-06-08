import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <ul>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Home">HOME</Link>
        </li>
      </ul>
    </div>
  );
};
export default Contact;
