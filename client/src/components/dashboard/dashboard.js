import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";

//package count
const Count = () => {
  const [bookings, setBookings] = useState([]);
  const [noticeCount, setNoticeCount] = useState([]);
  const [hotelBookCount, setHotelBookCount] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/packagebookings");
        console.log(response.data.bookingCount);
        setBookings(response.data.bookingCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();
  }, []);


  useEffect(() => {
    const fetchNoticeCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/notices/count");
        console.log(response.data.noticeCount);
        setNoticeCount(response.data.noticeCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNoticeCount();
  }, []);



  useEffect(() => {
    const fetchHotelBookCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/bookings/count");
        console.log(response.data.hotelBookCount);
        setHotelBookCount(response.data.hotelBookCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHotelBookCount();
  }, []);






  
  

  

  return (
    <div className="table-container">
    
    <div className="card">      
      <img src="https://cdn-icons-png.flaticon.com/128/10754/10754747.png" alt="hotels" /> 
      <h1 className="title">Hotel Bookings:{hotelBookCount}</h1>
    </div>

    <div className="card">   
    <img src="https://cdn-icons-png.flaticon.com/512/1841/1841630.png" alt="tours" />
    <h1 className="title">Tour Bookings:6</h1>
    </div>


    <div className="card">    
    <img src="https://cdn-icons-png.flaticon.com/128/2632/2632041.png" alt="packages" />  
    <h1 className="title">Package Bookings:{bookings}</h1>  

    </div>
    <div className="card">    
    <img src="https://cdn-icons-png.flaticon.com/128/10745/10745744.png" alt="transport" />
    <h1 className="title">Transport Bookings:{bookings}</h1>


    </div>
    <div className="card">    
    <img src="https://cdn-icons-png.flaticon.com/128/8864/8864908.png" alt="transport" />
    <h1 className="title">Total <br></br>Notices:{noticeCount}</h1>


    </div>
  </div>
  
  );
  
};




export default Count;
