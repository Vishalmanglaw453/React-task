import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <Link to="/hero" className=" text-black">
        Hero
      </Link>
      <Link to="/about" className=" text-black">
    
        About
      </Link>
    </div>
  );
};

export default About;
