import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import swal from "sweetalert2";
import { Divider, Space, Tag } from 'antd';

const { TabPane } = Tabs;

function Profilescreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, [user]);

  return (
    <div className="ml-3 mt-3">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key="1">
          <div className="bs">
          <h1>My profile</h1>
          <br />
          <p>Name:{user.name}</p>
          <p>Email:{user.email}</p>
          <p>Is Admin:{user.isAdmin ? "YES" : "NO"}</p>
          </div>
        </TabPane>
        <TabPane tab="Bookings" key="2">
          <MyBookings user={user} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Profilescreen;

export function MyBookings({ user }) {
  const [bookings, setbookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBookings() {
      try {
        setLoading(true);
        const data = (
          await axios.post("/api/bookings/getbookingsbyuserid", {
            userid: user._id,
          })
        ).data;
        console.log(data);
        setbookings(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchBookings();
  }, [user]);

  async function cancelBooking(bookingid, roomid) {
    try {
      setLoading(true);
      const result = (
        await axios.post("/api/bookings/cancelbooking", { bookingid, roomid })
      ).data;
      console.log(result);
      setLoading(false);
      swal
        .fire("Congrats", "Your booking has been cancelled", "success")
        .then((result) => {
          window.location.reload();
        });
      const updatedBookings = bookings.map((booking) => {
        if (booking._id === bookingid) {
          return { ...booking, status: "cancelled" };
        }
        return booking;
      });
      setbookings(updatedBookings);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
      swal.fire("Oops", "Something went wrong", "error");
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          {loading && <Loader />}
          {bookings &&
            bookings.map((booking) => {
              return (
                <div className="bs">
                  <h1>{booking.room}</h1>
                  <p>
                    <b>Booking ID</b>:{booking._id}
                  </p>
                  <p>
                    <b>CheckIn</b> :{booking.fromdate}
                  </p>
                  <p>
                    <b>Check Out</b>:{booking.todate}
                  </p>
                  <p>
                    <b>Amount</b> :{booking.totalamount}
                  </p>
                  <p>
                    <b>Status</b> :{" "}
                    {booking.status== 'cancelled' ? (<Tag color="red">CANCELLED</Tag>) :(<Tag color="green">CONFIRMED</Tag>)}
                  </p>

                  {booking.status !== "cancelled" && (
                    <div className="text-right">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          cancelBooking(booking._id, booking.roomid);
                        }}
                      >
                        CANCEL BOOKING
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
