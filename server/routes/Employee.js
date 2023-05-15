const router = require ("express").Router();
let Employee =require ("../model/Employee");
const bcrypt = require("bcrypt");
const saltRounds = 10;



router.route("/add").post (async (req,res)=>{

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const name = req.body.name;
    const mobile_number = req.body.mobile_number;
    const NIC = req.body.NIC;
    const gender = req.body.gender;
    const etype = req.body.etype;
     const esalery = req.body.esalery;
    const image = req.body.image;



    const hashedPassword = await bcrypt.hash(password, saltRounds);




    const newEmployee = new Employee({
        username,
        password :hashedPassword,
        email,
        name,
        mobile_number,
        NIC,
        gender,
        etype,
        esalery ,
        image
        
    })

    newEmployee.save().then(()=>{
        res .json("Employee Added")

    }).catch((err)=>{
        console.log(err)
    })




})

//data display

router.route("/").get((req,res)=>{
    Employee.find().then((Employee)=>{
        res.json(Employee)
    }).catch((err)=>{
        console.log(err)
    })
})


//update data

router.route("/update/:id").put(async(req,res) =>{

    let EmployeeId = req.params.id;
    const{username,password,email,name,mobile_number,NIC,gender,etype,esalery}= req.body;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const updateEmployee = {
        
        username,
        password :hashedPassword,
        email,
        name,
        mobile_number,
        NIC,
        gender,
        etype,
        esalery 
    }

 await Employee.findByIdAndUpdate(EmployeeId,updateEmployee)
    .then(()=>{
        res.status(200).send({status: "Employee updateed "})

    }).catch((err)=>{
        console.log (err);
        res.status(500).send({status:"Error with updating date",error:err.message});

    })

})

//delete
router.route("/delete/:id").delete (async(req,res) =>{
    let EmployeeId = req.params.id;
    const{username,password,email,name,mobile_number,NIC,gender,etype,esalery,image}= req.body;

    const updateEmployee = {
        
        username,
        password,
        email,
        name,
        mobile_number,
        NIC,
        gender,
        etype,
        esalery ,
        image
    }

    const update = await Employee.findByIdAndDelete(EmployeeId,updateEmployee)
    .then(()=>{
        res.status(200).send({status: "user deleted "})

    }).catch((err)=>{
        console.log (err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
        
    })

})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    try {
      const user = await Employee.findById(userId);
      res.json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ status: "Error with fetching user", error: err.message });
    }
  });







module.exports =router;



 