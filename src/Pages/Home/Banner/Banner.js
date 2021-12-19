import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  const bookNow = () => {
    navigate("/movies");
  };

  return (
    <div className="banner-container py-5">
      <div className="container text-white">
        <h1 className="fw-bolder mt-5">Enjoy This Winter Trend</h1>
        <p className="fs-4 pt-1 fw-bolder">
          Watch Now Latest Movies In Our Theater
        </p>
        <button className="btn btn-dark border rounded" onClick={bookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
