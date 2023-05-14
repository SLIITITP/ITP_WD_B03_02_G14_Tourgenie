import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import axios from "axios";
import Loader from "../components/Loader";
import Addroom from "../components/Addroom";
import jspdf from "jspdf";
import "jspdf-autotable";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

function Adminscreen() {
  return (
    <div className="mt-3 ml-3 mr-3 bs">
      <h2 className="text-center" style={{ fontSize: "30px" }}>
        <b>Admin Panel</b>
      </h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Bookings" key="1">
          <Booking />
        </TabPane>
        <TabPane tab="Rooms" key="2">
          <Rooms />
        </TabPane>
        <TabPane tab="Add Room" key="3">
          <Addroom />
        </TabPane>
        <TabPane tab="Users" key="4">
          <h1>Users</h1>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Adminscreen;

//booking component

export function Booking() {
  const [bookings, setbookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get("/api/bookings/getallbookings");
        setbookings(data.data); // Update this line
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    }
    fetchData();
  }, []);

  function generatePDF(bookings) {
    const doc = new jspdf();
    const tableColumn = [
      "No",
      "UserID",
      "room",
      "fromDate",
      "todate",
      "status",
    ];
    const tableRows = [];

    bookings
      .slice(0)
      .reverse()
      .map((book, index) => {
        const ticketData = [
          index + 1,
          book.userid,
          book.room,
          book.fromdate,
          book.todate,
          book.status,
        ];
        tableRows.push(ticketData);
      });

    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];

    doc.text("TourGenie", 14, 15).setFontSize(16); // add heading
    doc.text("Booking Details Report", 14, 23).setFontSize(10);
    doc.text(`Report Generated Date: ${dateStr}`, 14, 30).setFontSize(10);

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 7 },
      startY: 42,
    });

    doc.save(`Booking-Details-Report_${dateStr}.pdf`);
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div>
          <button className="" onClick={() => generatePDF(bookings)}>
            Download Bookings
          </button>
        </div>
        <h1>Bookings</h1>

        {loading && <Loader />}

        <table className="table table-bordered table-dark">
          <thead className="bs">
            <tr>
              <th>Booking ID</th>
              <th>User ID</th>
              <th>Room</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length &&
              bookings.map((bookings) => {
                return (
                  <tr>
                    <td>{bookings._id}</td>
                    <td>{bookings.userid}</td>
                    <td>{bookings.room}</td>
                    <td>{bookings.fromdate}</td>
                    <td>{bookings.todate}</td>
                    <td>{bookings.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

//Room component

export function Rooms() {
  const [rooms, setrooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get("/api/rooms/getallrooms");
        setrooms(data.data); // Update this line
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure you want to delete this user?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    });

    if (confirmResult.isConfirmed) {
      try {
        console.log(id);
        await axios.delete(`/api/rooms/deleteroom/${id}`);
        Swal.fire("Tour Deleted!", "", "success");
        window.location.reload();
      } catch (err) {
        console.log(err);
        Swal.fire(err.message, "", "error");
      }
    }
  };

  function generatePDF(room) {
    const doc = new jspdf();
    const tableColumn = [
      "No",
      "Name",
      "rentperday",
      "maxcount",
      "description",
      "phonenumber",
      "type",
    ];
    const tableRows = [];

    room
      .slice(0)
      .reverse()
      .map((room, index) => {
        const ticketData = [
          index + 1,
          room.name,
          room.rentperday,
          room.maxcount,
          room.description,
          room.phonenumber,
          room.type,
        ];
        tableRows.push(ticketData);
      });

    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];

    doc.text("TourGenie", 14, 15).setFontSize(16); // add heading
    doc.text("Booking Details Report", 14, 23).setFontSize(10);
    doc.text(`Report Generated Date: ${dateStr}`, 14, 30).setFontSize(10);

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 7 },
      startY: 42,
    });

    doc.save(`Booking-Details-Report_${dateStr}.pdf`);
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <div>
          <button className="" onClick={() => generatePDF(rooms)}>
            Download Bookings
          </button>
        </div>
        <h1>Rooms</h1>

        {loading && <Loader />}

        <table className="table table-bordered table-dark">
          <thead className="bs">
            <tr>
              <th>Room ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Rent per day</th>
              <th>Max count</th>
              <th>Phone number</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {rooms.length &&
              rooms.map((rooms) => {
                return (
                  <tr>
                    <td>{rooms._id}</td>
                    <td>{rooms.name}</td>
                    <td>{rooms.type}</td>
                    <td>{rooms.rentperday}</td>
                    <td>{rooms.maxcount}</td>
                    <td>{rooms.phonenumber}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          handleDelete(rooms._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link
                        className="btn btn-primary"
                        to={`/updateroom/${rooms._id}`}
                      >
                        Update
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
