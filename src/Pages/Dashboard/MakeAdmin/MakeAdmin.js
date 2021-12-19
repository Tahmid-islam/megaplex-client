import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Slide from "react-reveal/Slide";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          setSuccess(true);
        }
      });
    reset();
  };

  return (
    <div className="container pt-5">
      <Slide bottom>
        <h3 className="pb-2 text-center fw-bold text-dark">Make Admin</h3>
        <hr />
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          <input
            placeholder="Enter Email Address"
            type="email"
            className="form-control"
            required
            style={{ padding: 10, marginTop: 10 }}
            {...register("email", { required: true })}
          />

          {success && alert("Made Admin Successfully!")}

          <button type="submit" className="btn btn-dark mt-3">
            <i className="fas fa-user-cog"></i>&nbsp; Make Admin
          </button>
        </form>
      </Slide>
    </div>
  );
};

export default MakeAdmin;
