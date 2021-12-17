import React from "react";
import Header from "../../Shared/Navbar/Header";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import NewMovies from "../NewMovies/NewMovies";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <NewMovies></NewMovies>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
