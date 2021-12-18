import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AllMovies from "./Pages/AllMovies/AllMovies";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<AllMovies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/movies/details/:movieId"
              element={
                <PrivateRoute>
                  <MovieDetails></MovieDetails>
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/myOrders" element={<MyOrders />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
