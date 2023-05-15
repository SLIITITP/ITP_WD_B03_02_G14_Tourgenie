const router = require ("express").Router();
let Tour =require ("../model/tour");

//data display

router.route("/").get((req,res)=>{
    Tour.find().then((Tour)=>{
        res.json(Tour)
    }).catch((err)=>{
        console.log(err)
    })
})

// count tour
router.route("/count").get(async (_req, res) => {
    try {
      const Tcount = await Tour.countDocuments({});
      res.json({ Tcount });
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ error: "Error with fetching user count" });
    }
  });






module.exports =router;