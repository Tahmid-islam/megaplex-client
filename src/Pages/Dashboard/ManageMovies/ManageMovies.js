import React from "react";
import Slide from "react-reveal/Slide";

const ManageProducts = () => {
  const [movies, setMovies] = React.useState([]);
  let count = 1;

  React.useEffect(() => {
    fetch(`https://lit-stream-42516.herokuapp.com/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data.movies));
  }, [movies]);

  //Delete
  const handleDeleteMovies = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://lit-stream-42516.herokuapp.com/movies/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingMovies = movies.filter((mv) => mv._id !== id);
            setMovies(remainingMovies);
          }
        });
    }
  };
  return (
    <Slide bottom>
      <div className="container pt-5">
        <h3 className="pb-2 text-center fw-bold text-dark">Manage Movies</h3>
        <hr />
        <div className="table-responsive-sm">
          <table className="table table-light table-hover">
            <thead>
              <tr className="text-center">
                <th scope="col">Serial</th>
                <th scope="col">Movie Name</th>
                <th scope="col">Poster</th>
                <th scope="col">Show Time</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id} className="text-center">
                  <td>{count++}</td>
                  <td>{movie.movieName}</td>
                  <td>
                    <img src={movie.img} className="w-25" alt="" />
                  </td>
                  <td>{movie.showTime}</td>
                  <td>
                    <button
                      className="btn-sm btn-danger rounded-3"
                      onClick={() => handleDeleteMovies(movie._id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Slide>
  );
};

export default ManageProducts;
