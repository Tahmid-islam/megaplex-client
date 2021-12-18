import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Navbar/Header";

const Register = () => {
  const { registerUser, isLoading, error, signInWithGoogle, setError } =
    useAuth();

  const location = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    registerUser(data.email, data.password, data.name, location, Navigate);
    reset();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, Navigate);
  };

  return (
    <div>
      <Header />
      <div className="w-75 container mx-auto border my-4 shadow p-3 mx-3 px-3">
        <div className="text-center py-4">
          <h1>
            Register <i className="fas fa-sign-in-alt"></i>
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control my-3 p-2"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {error.name && <span>This field is required</span>}
          <input
            className="form-control my-3 p-2"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {error.email && <span>This field is required</span>}
          <input
            type="password"
            className="form-control my-3 p-2"
            placeholder="Password"
            autoComplete="password"
            {...register("password", { required: true })}
          />
          <p className="text-danger text-center fw-bold">{error}</p>
          {error.password && <span>This field is required</span>}
          <input
            className="form-control my-3 btn btn-dark p-2"
            type="submit"
            value="Sign in"
          />
        </form>
        {isLoading && (
          <Spinner animation="grow" variant="dark" className="text-center" />
        )}
        <Link
          style={{ textDecoration: "none" }}
          to="/login"
          onClick={() => setError("")}
        >
          <p className="text-dark text-center fw-bold">
            Already have an account?
          </p>
        </Link>
        <div className="text-center">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-dark text-center"
          >
            <i className="fab fa-google"></i> Google Sign In
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
