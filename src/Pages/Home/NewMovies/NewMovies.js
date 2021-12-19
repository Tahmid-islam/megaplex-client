import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://lit-stream-42516.herokuapp.com/movies?size=4`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies);
      });
  }, []);

  const handleBookNow = (id) => {
    navigate(`/movies/details/${id}`);
  };

  const viewMore = () => {
    navigate("/movies");
  };

  return (
    <div className="container my-4">
      <p className="fs-1 fw-bold">Latest Movies</p>
      <hr />
      <Row>
        {movies.map((movie) => (
          <Col xs={12} md={4} lg={3} className="py-4" key={movie._id}>
            <Card className="h-100">
              <Card.Img variant="top" src={movie.img} />
              <Card.Body>
                <Card.Title className="fw-bold">{movie.movieName}</Card.Title>
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
      <button className="text-center btn btn-dark" onClick={viewMore}>
        View More <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default NewMovies;
