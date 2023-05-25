import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>Welcome to Shop Anything</h1>
      <Link to="goods">Go shopping -></Link>
    </>
  );
};

export default Welcome;
