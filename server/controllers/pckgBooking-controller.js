const PckgBooking = require("../models/pckgBooking")

//get all packages
const getAllPBookings = async (req, res, next) => {
    let bookings;

    try{
        bookings = await PckgBooking.find(); 
    }
    catch (err){
        console.log(err);
    }

    if(!bookings){
        return res.status(404).json({message:"No packages found!"});
    }
    return res.status(200).json({bookings});
};

//get by id
const getByBId = async (req, res, next) => {
    const id = req.params.id;
    
    let booking;
    try{
        booking = await PckgBooking.findById(id);
    }
    catch(err){
        console.log(err);
    }
    if(!booking){
        return res.status(404).json({message:"No package found!"});
    }
    return res.status(200).json({booking});
};



//add a new package
const addPBooking = async (req, res, next) => {
    const { bId, pId, pName, uId, nOp } = req.body;
    let booking;
    date = new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" })
    try{
        booking = new PckgBooking ({
            bId, 
            pId,
            pName, 
            uId, 
            nOp, 
            date
        });
        await booking.save();
    }
    catch (err){
        console.log(err);
    }

    if(!booking){
        return res.status(500).json({message:"Unable to add!"});
    }
    return res.status(200).json({booking});
};

//update a package
const updatePBooking = async (req, res, next) => {
    const id = req.params.id;
    const { bId, pId, pName, uId, nOp } = req.body;

    let booking;
    try{
        booking = await PckgBooking.findByIdAndUpdate(id, {
            bId, 
            pId,
            pName, 
            uId, 
            nOp
        });
        booking = await booking.save();
    }
    catch(err){
        console.log(err);
    }
    if(!booking){
        return res.status(404).json({message:"Unable to update!"});
    }
    return res.status(200).json({booking});

};

//delete a package
const deletePBooking = async (req, res, next) => {
    const id = req.params.id;
    let booking;

    try{
        booking = await PckgBooking.findByIdAndRemove(id);
    }
    catch(err){
        console.log(err);
    }
    if(!booking){
        return res.status(404).json({message:"Unable to delete!"});
    }
    return res.status(200).json({message:"Package successfully deleted!"});
};
exports.getAllPBookings = getAllPBookings;
exports.getByBId = getByBId;
exports.addPBooking = addPBooking;
exports.updatePBooking = updatePBooking;
exports.deletePBooking = deletePBooking;