const router = require ("express").Router();
let Package =require ("../module/package");


//data display

router.route("/").get((req,res)=>{
    Package.find().then((package)=>{
        res.json(package)
    }).catch((err)=>{
        console.log(err)
    })
});

//count package
router.route("/count").get(async (_req, res) => {
    try {
      const Pcount = await Package.countDocuments({});
      res.json({ Pcount });
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ error: "Error with fetching user count" });
    }
  });

module.exports =router;



