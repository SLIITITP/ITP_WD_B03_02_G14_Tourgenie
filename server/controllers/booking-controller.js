const Booking = require("../models/booking");

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

//get by id
const getBookingById = async (req, res, next) => {
  const id = req.params.id;

  let booking;
  try {
    booking = await Booking.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!booking) {
    return res.status(404).json({ message: "No booking found!" });
  }
  return res.status(200).json({ booking });
};

//add a new booking
const addBooking = async (req, res, next) => {
  const { name, date, location, maxAttendees, transport, hotel } = req.body;
  let booking;
  try {
    booking = new Booking({
      name,
      date,
      location,
      maxAttendees,
      transport,
      hotel
    });
    await booking.save();
  } catch (err) {
    console.log(err);
  }

  if (!booking) {
    return res.status(500).json({ message: "Unable to add booking!" });
  }
  return res.status(200).json({ booking });
};

//update a booking
const updateBooking = async (req, res, next) => {
  const id = req.params.id;
  const { name, date, location, maxAttendees, transport, hotel } = req.body;

  let booking;
  try {
    booking = await Booking.findByIdAndUpdate(id, {
      name,
      date,
      location,
      maxAttendees,
      transport,
      hotel
    });
    booking = await booking.save();
  } catch (err) {
    console.log(err);
  }
  if (!booking) {
    return res.status(404).json({ message: "Unable to update booking!" });
  }
  return res.status(200).json({ booking });
};

//delete a booking
const deleteBooking = async (req, res, next) => {
  const id = req.params.id;
  let booking;

  try {
    booking = await Booking.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!booking) {
    return res.status(404).json({ message: "Unable to delete booking!" });
  }
  return res.status(200).json({ message: "Booking successfully deleted!" });
};

exports.getAllBookings = getAllBookings;
exports.addBooking = addBooking;
exports.getBookingById = getBookingById;
exports.updateBooking = updateBooking;
exports.deleteBooking = deleteBooking;
