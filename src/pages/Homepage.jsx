import React from "react";
import headImg from "../assets/home-head.jpg";


function Homepage() {
  return (
    <div className="head">
        <img src={headImg} alt="Gardening" className="head-image" />
        <div className="head-content">
            <h1>Amazing Discounts <br /> on Garden Products!</h1>
            <button className="head-button">Check out</button>
        </div>
    </div>
  );
}

export default Homepage;