import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Navbar/Header";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://lit-stream-42516.herokuapp.com/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data.movies));
  }, []);

  const handleBookNow = (id) => {
    navigate(`/movies/details/${id}`);
  };

  return (
    <div>
      <Header />
      <Fade bottom>
        <div className="cars-container container mb-5 pb-5">
          <p className="fs-1 fw-bold">All Movies</p>
          <hr />
          <Row>
            {movies.map((movie) => (
              <Col xs={12} md={4} className="py-4" key={movie._id}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={movie.img}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      {movie.movieName}
                    </Card.Title>
                    <Card.Text>{movie.language}</Card.Text>
                  </Card.Body>
                  <button
                    className="btn btn-dark"
                    onClick={() => handleBookNow(movie._id)}
                  >
                    Book Now <i className="fas fa-arrow-right"></i>
                  </button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Fade>
      <Footer />
    </div>
  );
};

export default AllMovies;
