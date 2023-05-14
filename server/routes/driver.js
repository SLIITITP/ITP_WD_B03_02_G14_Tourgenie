const router = require ("express").Router();
let driver =require ("../module/driver");



router.route("/add").post((req,res)=>{
    const empid = req.body.empid;
    const name = req.body.name;
    const email = req.body.email;
    const mobile_number = req.body.mobile_number;
    const NIC = req.body.NIC;
    const gender = req.body.gender;
    const location =req.body.location;
    const license_number =req.body.license_number;
    const lexpire_date =req.body.lexpire_date;
    const dsalery =req.body.dsalery;
    const image =req.body.image;
    





    const newdriver = new driver({
        empid,
        name,
        email,
        mobile_number,
        NIC,
        gender,
        location,
        license_number,
        lexpire_date,
        dsalery,
        image
        
    })

    newdriver.save().then(()=>{
        res .json("driver Added")

    }).catch((err)=>{
        console.log(err)
    })




})

//data display

router.route("/").get((_req,res)=>{
    driver.find().then((driver)=>{
        res.json(driver)
    }).catch((err)=>{
        console.log(err)
    })
})


//update data

router.route("/update/:id").put(async(req,res) =>{

    let driverId = req.params.id;
    const{empid,name,email,mobile_number,NIC,gender,location,license_number,lexpire_date,dsalery}= req.body;

    const updatedriver = {
        empid,
        name,
        email,
        mobile_number,
        NIC,
        gender,
        location,
        license_number,
        lexpire_date,
        dsalery
    }

 await driver.findByIdAndUpdate(driverId,updatedriver)
    .then(()=>{
        res.status(200).send({status: "driver updateed "})

    }).catch((err)=>{
        console.log (err);
        res.status(500).send({status:"Error with updating date",error:err.message});

    })

})

//delete
router.route("/delete/:id").delete (async(req,res) =>{
    let driverId = req.params.id;
    const{empid,name,email,mobile_number,NIC,gender,location,license_number,lexpire_date,dsalery,image}= req.body;

    const updatedriver = {
        empid,
        name,
        email,
        mobile_number,
        NIC,
        gender,
        location,
        license_number,
        lexpire_date,
        dsalery,
        image
    }

    const update = await driver.findByIdAndDelete(driverId,updatedriver)
    .then(()=>{
        res.status(200).send({status: "driver deleted "})

    }).catch((err)=>{
        console.log (err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
        
    })

})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    try {
      const user = await driver.findById(userId);
      res.json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ status: "Error with fetching user", error: err.message });
    }
  })

//count drivers
router.route("/count").get(async (_req, res) => {
    try {
      const count = await driver.countDocuments({});
      res.json({ count });
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ error: "Error with fetching user count" });
    }
  });

  router.route("/day").get(async (_req, res) => {
    try {
      const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000); // get a timestamp for 2 minutes ago
      const initialCount = await driver.countDocuments({ assignedAt: { $gte: twoMinutesAgo } }); // count drivers assigned within the last 2 minutes
      res.write(`Initial Count: ${initialCount}\n`); // write the initial count to the response
      setTimeout(async () => {
        const currentCount = await driver.countDocuments({ assignedAt: { $gte: twoMinutesAgo } }); // count drivers assigned within the last 2 minutes after 2 minutes
        res.write(`Current Count: ${currentCount}\n`); // write the current count to the response
        res.end(); // end the response
      }, 2 * 60 * 1000);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ error: "Error with fetching driver count" });
    }
  });
  
  
  
  
  

module.exports =router;



 