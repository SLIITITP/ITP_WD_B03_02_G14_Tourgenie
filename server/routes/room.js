const router = require ("express").Router();
const room = require("../module/room");
let rooms =require ("../module/room");


//data display

router.route("/").get((req,res)=>{
    rooms.find().then((rooms)=>{
        res.json(rooms)
    }).catch((err)=>{
        console.log(err)
    })
});

// count hotel
router.route("/count").get(async (_req, res) => {
    try {
      const Hcount = await rooms.countDocuments({});
      res.json({ Hcount });
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ error: "Error with fetching user count" });
    }
  });

module.exports =router;

