import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import axios from "axios";
import 'jspdf-autotable';
import { toast } from 'react-toastify';
import "./BookingTable.css";


const Pack_bookingTable = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/packagebookings");
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
  
    // Add logo
    const logoImg = document.getElementById(<img id="app-logo" src="https://example.com/my-logo.png" alt="My App Logo" />);
    const logoWidth = 50;
    const logoHeight = (logoImg.height * logoWidth) / logoImg.width;
    doc.addImage(logoImg, "PNG", frameX + 15, frameY + 15, logoWidth, logoHeight);
  
    // Draw frame
    doc.rect(frameX, frameY, frameWidth, frameHeight);
  
    // Add content
    doc.rect(frameX, frameY, frameWidth, frameHeight);
    doc.text(`Booking Details`, frameX + 15, frameY + 75);
    doc.text(`Customer Name: ${booking.userid}`, frameX + 10, frameY + 90);
    doc.text(`Hotel: ${booking.room}`, frameX + 10, frameY + 100);
    doc.text(`Starting Date: ${booking.fromdate}`, frameX + 10, frameY + 110);
    doc.text(`End Date: ${booking.todate}`, frameX + 10, frameY + 120);
    doc.text(`Total Days: ${booking.totaldays}`, frameX + 10, frameY + 130);
    doc.text(`Payments: ${booking.transactionId}`, frameX + 10, frameY + 140);
    doc.save(`Booking-${booking._id}.pdf`);
  };
  
  


  //confirm the booking 
  const handleConfirm = async (bookingId) => {
    try {
      await axios.put(`http://localhost:5000/packagebookings/${bookingId}`, { confirmed: true });
      setBookings(prevBookings => prevBookings.map((booking) => {
        if (booking._id === bookingId) {
          return { ...booking, confirmed: true };
        }
        return booking;
      }));
      toast.success("Booking confirmed successfully!");

    } catch (error) {
      console.error(error);
    }
  };



  

  return (
    <div className="table-container">
      
      <div style={{ width:"90%", marginLeft: '50px', marginTop:'100px', boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)', borderRadius: '10px', padding: '10px' }}>
  <table style={{ width: '100%' ,marginLeft:'0px' }}>
    <thead>
      <tr>
        <th>Custemor</th>
        <th>Package</th>
        <th>Date</th>        
        <th>Total Participation</th>  
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {bookings.map((booking) => (
        <tr key={booking._id}>
          <td>{booking.uId}</td>
          <td>{booking.pName}</td>
          <td>{booking.date}</td>          
          <td>{booking.nOp}</td>               
          <td>


           {/* check confirmation */}
          {booking.confirmed ? (
        <span className="confirmed-message">Confirmed</span>
      ) : (
        <>
          <button className="confirm-btn" onClick={() => handleConfirm(booking._id)}>Confirm</button>
          
        </>

        
      )}

      <button className="pdf-btn" onClick={() => handleGeneratePDF(booking)}>PDF</button>
    </td>
  </tr>
))}
    </tbody>
  </table>
</div>



    </div>
  );
};

export default Pack_bookingTable;
