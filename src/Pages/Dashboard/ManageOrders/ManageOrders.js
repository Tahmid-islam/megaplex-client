import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slide from "react-reveal/Slide";
import useAuth from "../../../hooks/useAuth";

const ManageOrders = () => {
  const { user } = useAuth();
  const [allBookings, setAllBookings] = useState([]);
  let count = 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`https://lit-stream-42516.herokuapp.com/bookings`)
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, [user.email, allBookings]);

  const handleUpdateStatus = (id) => {
    const proceed = window.confirm("Are you sure, you want to update status?");
    if (proceed) {
      const url = `https://lit-stream-42516.herokuapp.com/updateStatus/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(allBookings),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Status Update Successful");
          }
        });
    }
  };

  //Delete
  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://lit-stream-42516.herokuapp.com/bookings/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingBookings = allBookings.filter(
              (booking) => booking._id !== id
            );
            setAllBookings(remainingBookings);
          }
        });
    }
  };

  return (
    <Slide bottom>
      <div style={{ height: "100vh" }} className="container pt-5">
        <h3 className="pb-2 text-center fw-bold text-dark">My Bookings</h3>
        <hr />
        <div className="table-responsive-sm">
          <table className="table table-light table-hover">
            <thead>
              <tr className="text-center">
                <th scope="col">Serial</th>
                <th scope="col">Movie Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Number of Tickets</th>
                <th scope="col">Total Price</th>
                <th scope="col">Booking Date</th>
                <th scope="col">Status</th>
                <th scope="col">Change Status</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {allBookings.map((booking) => (
                <tr key={booking._id} className="text-center">
                  <td>{count++}</td>
                  <td>{booking.movie_name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.quantity}</td>
                  <td>{booking.totalPrice} TK</td>
                  <td>{booking.date}</td>
                  <td>{booking.status}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleUpdateStatus(booking._id)}
                    >
                      Confirmed
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn-sm btn-danger rounded-3"
                      onClick={() => handleDeleteBooking(booking._id)}
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

export default ManageOrders;
