import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Booking = ({ movieData }) => {
  const { user } = useAuth();
  const { _id, movieName, img, price, showTime } = movieData;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const newData = {
      movieId: _id,
      ...data,
      status: "Pending",
      img,
      showTime,
      price,
      totalPrice: parseInt(price) * data.quantity,
      movie_name: movieName,
    };
    console.log(newData);
    fetch("https://lit-stream-42516.herokuapp.com/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Booking Processed Successfully");
          reset();
        }
      });
  };

  return (
    <div className="pt-5">
      <h3 className="text-center text-dark fw-bold">Booking Form</h3>
      <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mt-3 form-control"
          {...register("name", { required: true })}
          placeholder="Enter Your Name"
        />
        <input
          className="mt-3 form-control"
          type="email"
          {...register("email", { required: true })}
          defaultValue={user.email}
          placeholder="Enter Your Email"
          readOnly
        />
        <input
          className="mt-3 form-control"
          type="tel"
          {...register("phone", { required: true })}
          placeholder="Enter Your Phone Number"
        />
        <input
          className="mt-3 form-control"
          type="number"
          {...register("quantity", { required: true })}
          placeholder="Number Of Tickets"
        />
        <input
          className="mt-3 form-control"
          type="date"
          {...register("date", { required: true })}
          placeholder="Enter The Date Of Current Month"
        />
        <input className="btn btn-dark mt-3" type="submit" />
      </form>
    </div>
  );
};

export default Booking;
