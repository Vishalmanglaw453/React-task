import React from "react";
import Hero from "../componets/Hero";
import { Link } from "react-router-dom";


const Page1 = () => {
  return (
    <div className="my-5">
<Link to="/" className="  text-black">
          home
        </Link>
    <h1 className=" text-center text-black">This is page hero</h1>
    </div>
  );
};

export default Page1;
