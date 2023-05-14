const router = require ("express").Router();
let Student =require ("../module/student");



router.route("/add").post ((req,res)=>{

    console.log("hi ")

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const image = req.body.image;



    const newStudent = new Student({
        name,
        age,
        gender,
        image
    })

    newStudent.save().then(()=>{
        res .json("Student Added")

    }).catch((err)=>{
        console.log(err)
    })




})

//data display

router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})


//update data

router.route("/update/:id").put(async(req,res) =>{

    let userId = req.params.id;
    const{name,age,gender}= req.body;

    const updateStudent = {
        name,
        age,
        gender,
        
    }

 await Student.findByIdAndUpdate(userId,updateStudent)
    .then(()=>{
        res.status(200).send({status: "user updateed "})

    }).catch((err)=>{
        console.log (err);
        res.status(500).send({status:"Error with updating date",error:err.message});

    })

})

//delete
router.route("/delete/:id").delete (async(req,res) =>{
    let userId = req.params.id;
    const{name,age,gender,image}= req.body;

    const updateStudent = {
        name,
        age,
        gender,
        image
    }

    const update = await Student.findByIdAndDelete(userId,updateStudent)
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
      const user = await Student.findById(userId);
      res.json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ status: "Error with fetching user", error: err.message });
    }
  });







module.exports =router;



 