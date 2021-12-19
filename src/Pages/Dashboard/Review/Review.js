import React from "react";
import Slide from "react-reveal/Slide";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Spinner } from "react-bootstrap";

const Review = () => {
  const { isLoading, user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const newData = {
      ...data,
      email: user.email,
      name: user.displayName,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Review Posted Successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <Slide bottom>
        <div style={{ height: "100vh" }} className="container pt-5">
          <h3 className="pb-2 text-center fw-bold text-dark">
            Write Movie Review
          </h3>
          <hr />
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Enter Movie Name"
                type="text"
                className="form-control"
                required
                style={{ padding: 10, marginTop: 10 }}
                {...register("movie_name", { required: true })}
              />
              <input
                placeholder="Enter Rating 1 To 5"
                type="number"
                className="form-control"
                required
                style={{ padding: 10, marginTop: 10 }}
                {...register("rating", { required: true, min: 1, max: 5 })}
              />
              <textarea
                placeholder="Write Your Review.....(Max 250 Letters)"
                type="text"
                className="form-control"
                required
                maxLength="250"
                style={{ padding: 10, marginTop: 10 }}
                {...register("review", { required: true })}
              />

              {isLoading && (
                <Spinner
                  animation="grow"
                  variant="dark"
                  className="text-center"
                />
              )}

              <button className="btn btn-dark pt-2 mt-4" type="submit">
                <i className="fas fa-mail-bulk"></i>&nbsp;Post Review
              </button>
            </form>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Review;
