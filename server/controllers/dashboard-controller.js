const Booking = require("../models/package_booking");
const Notice = require("../models/notices");
const HotelBook = require("../models/booking");


//get all package bookings
const getPackBookingsCount = async (req, res, next) => {
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
    return res.status(200).json({bookingCount});
  };


  //get  Notices count
const getNoticeCount = async (req, res, next) => {
    let notices;

    try{
        notices = await Notice.find(); 
    }
    catch (err){
        console.log(err);
    }

    if(!notices){
        return res.status(404).json({message:"No notices found!"});
    }
    const noticeCount = notices.length; // add this line to calculate the count
    return res.status(200).json({noticeCount});
};


//get hotell booking count

const getHotelBookCount = async (req, res, next) => {
    let hotelBook;

    try{
        hotelBook = await HotelBook.find(); 
    }
    catch (err){
        console.log(err);
    }

    if(!hotelBook){
        return res.status(404).json({message:"No notices found!"});
    }
    const hotelBookCount = hotelBook.length; // add this line to calculate the count
    return res.status(200).json({hotelBookCount});
};










  exports.getPackBookingsCount = getPackBookingsCount;
  exports.getNoticeCount = getNoticeCount;
  exports.getHotelBookCount = getHotelBookCount;