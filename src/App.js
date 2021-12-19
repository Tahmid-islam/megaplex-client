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
import Review from "./Pages/Dashboard/Review/Review";
import Pay from "./Pages/Dashboard/Pay/Pay";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import ManageMovies from "./Pages/Dashboard/ManageMovies/ManageMovies";
import AddMovie from "./Pages/Dashboard/AddMovie/AddMovie";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";

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
              <Route path="/dashboard/review" element={<Review />} />
              <Route path="/dashboard/payment" element={<Pay />} />
              <Route
                path="/dashboard/makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/manageOrders"
                element={
                  <AdminRoute>
                    <ManageOrders />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/manageMovies"
                element={
                  <AdminRoute>
                    <ManageMovies />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/addMovie"
                element={
                  <AdminRoute>
                    <AddMovie />
                  </AdminRoute>
                }
              />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
