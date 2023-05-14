const Booking = require("../models/package_booking");

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

    const bookingCount = bookings.length; // add this line to calculate the count
    return res.status(200).json({ bookings, bookingCount});
  };


  //update a package
const updatePckgBooking = async (req, res, next) => {
  const id = req.params.id;
  const {state} = req.body;

  let packgBooking;
  try{
    packgBooking = await Booking.findByIdAndUpdate(id, {
      state       
          
      });
      packgBooking = await Booking.save();
  }
  catch(err){
      console.log(err);
  }
  if(!packgBooking){
      return res.status(404).json({message:"Unable to update!"});
  }
  return res.status(200).json({packgBooking});



}


  exports.getAllBookings = getAllBookings;
  exports.updatePckgBooking = updatePckgBooking;