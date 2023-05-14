import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import axios from "axios";
import 'jspdf-autotable';
import "./BookingTable.css";


const BookingTable = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/bookings");
        console.log(response);
        setBookings(response.data.bookings);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();
  }, []);

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString();
  };


  //pdf generate

  const handleGeneratePDF = (booking) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const frameWidth = pageWidth * 0.8;
    const frameHeight = pageHeight * 0.8;
    const frameX = (pageWidth - frameWidth) / 2;
    const frameY = (pageHeight - frameHeight) / 2;
  
    // Draw frame
    doc.rect(frameX, frameY, frameWidth, frameHeight);
  
    // Add content
    doc.rect(frameX, frameY, frameWidth, frameHeight);
    doc.text(`Booking Details`, frameX + 15, frameY + 15);
    doc.text(`Customer Name: ${booking.userid}`, frameX + 10, frameY + 30);
    doc.text(`Hotel: ${booking.room}`, frameX + 10, frameY + 40);
    doc.text(`Starting Date: ${booking.fromdate}`, frameX + 10, frameY + 50);
    doc.text(`End Date: ${booking.todate}`, frameX + 10, frameY + 60);
    doc.text(`Total Days: ${booking.totaldays}`, frameX + 10, frameY + 70);
    doc.text(`Payments: ${booking.transactionId}`, frameX + 10, frameY + 80);
    doc.save(`Booking-${booking._id}.pdf`);
  };
  
  


  

  return (
    <div className="table-container">      
      
      <div style={{ width:"95%", marginLeft: '8px', marginTop:'30px', boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)', borderRadius: '10px', padding: '10px' }}>
  <table style={{ width: '100%' ,marginLeft:'0px' }}>
    <thead>
      <tr>
        <th>Custermor</th>
        <th>Hotel</th>
        <th>fromdate</th>
        <th>todate</th>
        <th>Totaldays</th>
        <th>Payments</th>
       
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {bookings.map((booking) => (
        <tr key={booking._id}>
          <td>{booking.userid}</td>
          <td>{booking.room}</td>
          <td>{booking.fromdate}</td>
          <td>{booking.todate}</td>
          <td>{booking.totaldays}</td>
          <td>{booking.transactionId}</td>
         
          <td>
            {/* <button onClick={() => handleConfirmBooking(booking)}>Confirm</button>
            <button onClick={() => handleGeneratePDF(booking)}>PDF</button> */}
          <td>
            <button className="confirm-btn">Confirm</button>
            <button className="pdf-btn" onClick={() => handleGeneratePDF(booking)}>PDF</button>

          </td>


          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



    </div>
  );
};

export default BookingTable;
