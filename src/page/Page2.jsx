import React from "react";
import About from "../componets/About";
import Page1 from "./Page1";
import { Link } from "react-router-dom";
const Page2 = () => {
  return (
    <div className="my-1">
      <h1 className=" text-center text-black">This is page About</h1>
      <Link to="/" className="  text-black">
        home
      </Link>
    </div>
  );
};

export default Page2;
