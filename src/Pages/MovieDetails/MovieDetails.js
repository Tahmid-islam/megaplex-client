import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Booking from "../Booking/Booking";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Navbar/Header";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetch(`https://lit-stream-42516.herokuapp.com/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, [movieId]);

  const { movieName, img, showTime, price, language } = movieData;

  return (
    <div>
      <Header />
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12">
            <h3 className="text-center text-dark fw-bolder">
              Movie Name: {movieName}
            </h3>
            <img className="img-fluid" src={img} alt={movieName} />
            <p className="pt-4">
              <span className="fw-bold">Show Time:</span> {showTime}
            </p>
            <p>
              <span className="fw-bold">Price: </span>
              {price} TK
            </p>
            <p>
              <span className="fw-bold">Language:</span> {language}
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-12">
            <Booking movieData={movieData}></Booking>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
