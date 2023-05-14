const express = require("express");
const router = express.Router();

const Room = require("../models/room");

router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.send(rooms);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});


router.get("/book/:id", async(req, res) => {
  const id = req.params.id;
  console.log(id)
  await Room.findById(id)
  .then((obj)=>{
      res.json(obj);
  }).catch((err)=>{
      res.json(err.message)
  })
})

router.get("/getRoom/:id", async (req, res) => {
  const RID = req.params.id;
  try {
    const room = await Room.findById(RID);

    res.status(200).send({
      status: "User Fetched",
      room,
    });
  } catch (err) {
    res.status(404).send({
      status: "Room Not Fetched",
      error: err.message,
    });
  }
});

router.route("/updateRooms/:id").put(async (req, res) => {
  let RID = req.params.id;
  try {
    const {
      name,
      rentperday,
      maxcount,
      description,
      phonenumber,
      type,
      imageurls,
    } = req.body;

    const updateRoom = {
      name,
      rentperday,
      maxcount,
      description,
      phonenumber,
      type,
      imageurls,
    };

    const update = await Room.findByIdAndUpdate(RID, updateRoom, { new: true });

    if (!update) {
      return res.status(404).send({
        status: "Error",
        error: "Room not found",
      });
    } else {
      res.status(200).send({
        status: "Success",
        message: "Room Updated",
        data: update,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: "Error",
      error: err.message,
    });
  }
});

router.post("/addroom", async (req, res) => {
  try {
    const newroom = new Room(req.body);
    await newroom.save();

    res.send("New Rooms added successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.delete("/deleteroom/:id", async (req, res) => {
  const roomId = req.params.id;
  try {
    await Room.findByIdAndDelete(roomId);
    res.send(`Room with id ${roomId} has been deleted`);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
