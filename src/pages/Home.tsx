import React from "react";
import RouteFile from "./Routers";
import { Link } from "react-router-dom";
import About from "./About";

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
      <ul>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
