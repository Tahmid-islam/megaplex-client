import React from "react";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container py-5">
      <div className="container text-white">
        <h1 className="fw-bolder mt-5">Enjoy This Winter Trend</h1>
        <p className="fs-4 pt-1">Discover Now Latest Movies Collection</p>
        <button className="btn btn-dark border rounded">Book Now</button>
      </div>
    </div>
  );
};

export default Banner;
