import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { Option } from "antd/es/mentions";

const { RangePicker } = DatePicker;

function Homescreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();
  const [duplicaterooms, setduplicaterooms] = useState([]);

  const [searchkey, setsearchkey] = useState("");
  const [type, settype] = useState("all");

  useEffect(() => {
    (async function () {
      try {
        setloading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;

        setrooms(data);
        setduplicaterooms(data);
        console.log(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.log(error);
        setloading(false);
      }
    })();
  }, []);

  function filterByDate(dates) {
    if (!dates || dates.length !== 2) {
      return;
    }

    const [start, end] = dates;

    if (!start || !end) {
      return;
    }

    const startDate = moment(start.format("DD-MM-YYYY"), "DD-MM-YYYY");
    const endDate = moment(end.format("DD-MM-YYYY"), "DD-MM-YYYY");

    setfromdate(moment(start.format("DD-MM-YYYY"), "DD-MM-YYYY"));
    settodate(moment(end.format("DD-MM-YYYY"), "DD-MM-YYYY"));

    const tempRooms = duplicaterooms.filter((room) => {
      for (const booking of room.currentbookings) {
        const bookingStartDate = moment(booking.fromdate, "DD-MM-YYYY");
        const bookingEndDate = moment(booking.todate, "DD-MM-YYYY");
        if (
          (startDate.isBetween(bookingStartDate, bookingEndDate) ||
            endDate.isBetween(bookingStartDate, bookingEndDate) ||
            startDate.isSame(bookingStartDate) ||
            endDate.isSame(bookingEndDate)) &&
          (bookingStartDate.isBetween(startDate, endDate) ||
            bookingEndDate.isBetween(startDate, endDate) ||
            bookingStartDate.isSame(startDate) ||
            bookingEndDate.isSame(endDate))
        ) {
          return false;
        }
      }
      return true;
    });

    setrooms(tempRooms);
  }

  function filterBySearch() {
    const temprooms = duplicaterooms.filter((room) =>
      room.name.toLowerCase().includes(searchkey.toLowerCase())
    );
    setrooms(temprooms);
  }

  function filterByType(e) {
    settype(e);

    if (e !== "all") {
      const temprooms = duplicaterooms.filter(
        (room) => room.type.toLowerCase() === e.toLowerCase()
      );
      setrooms(temprooms);
    } else {
      setrooms(duplicaterooms);
    }
  }

  return (
    <div className="container">
      <div className="row mt-5 bs">
        <div className="col-md-3">
          <RangePicker
            format="DD-MM-YYYY"
            onChange={filterByDate}
            disabledDate={(current) =>
              current && current < moment().startOf("day")
            }
          />
        </div>

        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="search rooms"
            value={searchkey}
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            onKeyUp={filterBySearch}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-control"
            value={type}
            onChange={(e) => {
              filterByType(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="delux">Delux</option>
            <option value="non-delux">Non-Delux</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-2">
                <Room room={room} fromdate={fromdate} todate={todate} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
