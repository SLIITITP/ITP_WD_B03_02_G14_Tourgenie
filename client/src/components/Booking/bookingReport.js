import jsPDF from 'jspdf';
import 'jspdf-autotable';

const BookingPDF = ({ booking }) => {
  const formatDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString();
  };

  // Create new PDF document
  const doc = new jsPDF();

  // Set up header styles
  doc.setFillColor(63, 81, 181);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);

  // Add header to PDF document
  doc.rect(0, 0, doc.internal.pageSize.width, 50, 'F');
  doc.text(`Booking Details`, 14, 30);

  // Add content to PDF document
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  doc.autoTable({
    startY: 70,
    head: [['Name', 'Date', 'Location', 'Max Attendees', 'Transport', 'Hotel']],
    body: [[booking.name, formatDate(booking.date), booking.location, booking.maxAttendees, booking.transport, booking.hotel]],
  });

  // Download PDF
  doc.save(`${booking.name}.pdf`);

  return null;
};

export default BookingPDF;
