import React from "react";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="container text-white">
        <h1 className="fw-bolder mt-5">Enjoy This Winter Trend</h1>
        <p className="fs-4 pt-1">Discover Now Latest Collection</p>
        <button className="btn btn-light border rounded">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
