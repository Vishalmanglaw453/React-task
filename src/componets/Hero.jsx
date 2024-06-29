import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {

  return (
    <div>
      <h1 className="text-center">this is home page</h1>
      <div className=" d-flex gap-5">
        <Link to="/page1" className="  text-black">
          Hero
        </Link>
        <Link to="/page2" className="  text-black">
          About
        </Link>
      </div>


    </div>
  );
};

export default Hero;
