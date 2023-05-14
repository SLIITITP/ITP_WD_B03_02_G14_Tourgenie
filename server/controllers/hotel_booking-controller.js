const Booking = require("../models/hotel_booking");

//get all bookings
const getAllBookings = async (req, res, next) => {
  let bookings;

  try {
    bookings = await Booking.find();
  } catch (err) {
    console.log(err);
  }

  if (!bookings) {
    return res.status(404).json({ message: "No bookings found!" });
  }
  return res.status(200).json({ bookings });
};


exports.getAllBookings = getAllBookings;
