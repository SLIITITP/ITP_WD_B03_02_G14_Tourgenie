import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import axios from "axios";
import 'jspdf-autotable';
import "./BookingTable.css";
import Logo from  "./logo.png";
import { colors } from "@mui/material";


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


  
  
  const generatePdf = () => {
    const doc = new jsPDF();
    const logo = Logo; // company logo
    const address = '136 Hambantota, Sri Lanka'; 
    const contact = '047-390 3900'; 
  
    // Add logo, address, and contact to the PDF
    doc.addImage(logo, 'png', 30, 10, 30, 30);
    doc.setFontSize(10);
    doc.text(address, 150, 15);
    doc.text(contact, 150, 20);
  
    doc.setFontSize(16);
    doc.text("Hotel Booking Report", 80, 50);
    doc.setFontSize(12);
    const date = new Date().toLocaleDateString(); // get the current date
    doc.text(`${date}`, 150, 25);
  
    // Define table columns and rows
    const columns = ["Booking refferance ", "Hotel", "From date ", "To date", "Total days", "paymants"];
    const rows = bookings.map((booking) => [
      booking.userid,
      booking.room,
      booking.fromdate,
      booking.todate,
      booking.totaldays,
      booking.totalamount
    ]);
  
    // Create the table
    doc.autoTable({
      startY: 60,
      headStyles: { fillColor: [0, 128, 255] },
      head: [columns],
      body: rows,
    });
  
    // Save the PDF file
    doc.save(`Booking-${bookings[0]._id}.pdf`);
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
          <td>RS {booking.totalamount}</td>
         
          <td>
            {/* <button onClick={() => handleConfirmBooking(booking)}>Confirm</button>
            <button onClick={() => handleGeneratePDF(booking)}>PDF</button> */}
          <td>
            <button className="confirm-btn">Confirm</button>
            <button className="pdf-btn" onClick={() => generatePdf(booking)}>PDF</button>

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
