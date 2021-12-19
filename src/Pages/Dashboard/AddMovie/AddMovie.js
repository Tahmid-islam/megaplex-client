import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddMovie = ({ movieData }) => {
  const { isLoading } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://lit-stream-42516.herokuapp.com/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Movie Added Successfully");
          reset();
        }
      });
  };

  return (
    <div className="container pt-5">
      <h3 className="pb-2 text-center fw-bold text-dark">Add Movies</h3>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter Movie Name"
          type="text"
          className="form-control my-3 p-2"
          required
          style={{ padding: 10, marginTop: 10 }}
          {...register("movieName", { required: true })}
        />
        <input
          placeholder="Enter Image URL"
          type="text"
          className="form-control my-3 p-2"
          required
          style={{ padding: 10, marginTop: 10 }}
          {...register("img", { required: true })}
        />
        <input
          placeholder="Enter Price"
          type="number"
          className="form-control my-3 p-2"
          required
          style={{ padding: 10, marginTop: 10 }}
          {...register("price", { required: true })}
        />
        <input
          placeholder="Enter Show Time"
          type="text"
          className="form-control my-3 p-2"
          required
          style={{ padding: 10, marginTop: 10 }}
          {...register("showTime", { required: true })}
        />
        <input
          placeholder="Enter Movie Language"
          type="text"
          className="form-control my-3 p-2"
          required
          style={{ padding: 10, marginTop: 10 }}
          {...register("language", { required: true })}
        />

        {isLoading && (
          <Spinner animation="grow" variant="dark" className="text-center" />
        )}

        <button className="btn btn-dark" type="submit" sx={{ mt: 2 }}>
          <i className="fas fa-cart-plus"></i>&nbsp;Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
