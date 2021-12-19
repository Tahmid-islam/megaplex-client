import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import Rating from "react-rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetch(`https://lit-stream-42516.herokuapp.com/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  return (
    <div className="container py-4 mb-4">
      <Fade bottom>
        <p className="fs-1 fw-bold">Movies Review</p>
        <Slider {...settings}>
          {reviews.map((review) => {
            return (
              <React.Fragment key={review._id}>
                <Card className="fw-bold my-4 mx-3">
                  <Card.Header>{review.movie_name}</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <Rating
                        initialRating={review.rating}
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star text-warning"
                        readonly
                      ></Rating>
                    </Card.Title>
                    <Card.Text>Given By: {review.name}</Card.Text>
                    <Card.Text>{review.review}</Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </Slider>
      </Fade>
    </div>
  );
};

export default Reviews;
