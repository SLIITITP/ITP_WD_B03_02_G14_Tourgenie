import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import axios from "axios";
import 'jspdf-autotable';
import "./BookingTable.css";


const RoomForm = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/hotel");
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
    const pageWidth = doc.internal.pageSize.width; // Get page width
    const pageHeight = doc.internal.pageSize.height; // Get page height
    const frameWidth = pageWidth * 0.8; // Set frame width to 80% of page width
    const frameHeight = pageHeight * 0.8; // Set frame height to 80% of page height
    const frameX = (pageWidth - frameWidth) / 2; // Calculate x position of frame
    const frameY = (pageHeight - frameHeight) / 2; // Calculate y position of frame
  
    // Draw frame
    doc.rect(frameX, frameY, frameWidth, frameHeight);
  
    // Add content
    doc.text(`Booking Details`, frameX + 10, frameY + 10);
    doc.text(`Name: ${booking.name}`, frameX + 10, frameY + 20);
    doc.text(`Date: ${formatDate(booking.date)}`, frameX + 10, frameY + 30);
    doc.text(`Location: ${booking.location}`, frameX + 10, frameY + 40);
    doc.text(`Max Attendees: ${booking.maxAttendees}`, frameX + 10, frameY + 50);
    doc.text(`Transport: ${booking.transport}`, frameX + 10, frameY + 60);
    doc.text(`Hotel: ${booking.hotel}`, frameX + 10, frameY + 70);
    doc.save(`Booking-${booking._id}.pdf`);
  };
  


  

  return (
    <div className="table-container">
       <div>
      <h1>Bookings</h1>      
      </div>
      
      <div style={{ width:"70%", marginLeft: '390px', marginTop:'100px', boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)', borderRadius: '10px', padding: '10px' }}>
  <table style={{ width: '100%' ,marginLeft:'0px' }}>
    <thead>
    <tr>
              <th>Name</th>
              <th>Max Count</th>
              <th>Phone Number</th>
              <th>Rent Per Day</th>
              <th>Type</th>
              <th>Description</th>
              <th>Action</th>
            </tr>

    </thead>
    <tbody>
      {bookings.map((booking) => (
        <tr key={booking._id}>
          <td>{booking.name}</td>
          <td>{booking.maxcount}</td>
          <td>{booking.phonenumber}</td>
          <td>{booking.rentperday}</td>
          <td>{booking.type}</td>
          <td>{booking.description}</td>
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

export default RoomForm;
