import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

const NewMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/movies?size=4`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies);
      });
  }, []);

  return (
    <div className="container my-4">
      <p className="fs-1 fw-bold">Latest Movies</p>
      <hr />
      <Row>
        {movies.map((movie) => (
          <Col xs={12} md={4} lg={3} className="py-4">
            <Card className="h-100">
              <Card.Img variant="top" src={movie.img} />
              <Card.Body>
                <Card.Title className="fw-bold">{movie.movieName}</Card.Title>
                <Card.Text>{movie.language}</Card.Text>
              </Card.Body>
              <button className="btn btn-dark">
                Book Now <i className="fas fa-arrow-right"></i>
              </button>
            </Card>
          </Col>
        ))}
      </Row>
      <p className="text-center btn btn-dark">
        View More <i className="fas fa-chevron-right"></i>
      </p>
    </div>
  );
};

export default NewMovies;
