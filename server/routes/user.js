<<<<<<< HEAD
import express from "express";
const router = express.Router();

import { signin, signup, deleteUser, updateUser } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);

router.patch("/:id", updateUser); 
router.delete("/:id", deleteUser);

export default router;
=======
const router = require ("express").Router();
let user =require ("../module/user");




//data display

router.route("/").get((req,res)=>{
    user.find().then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })
})




//delete
router.route("/delete/:id").delete (async(req,res) =>{
    let userId = req.params.id;
    const{email,password,name}= req.body;

    const updateuser = {
        email,
        password,
        name
        
       
        
    }

    const update = await user.findByIdAndDelete(userId,updateuser)
    .then(()=>{
        res.status(200).send({status: "user deleted "})

    }).catch((err)=>{
        console.log (err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
        
    })

})


router.route("/count").get(async (_req, res) => {
    try {
      const Ucount = await user.countDocuments({});
      res.json({ Ucount });
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ error: "Error with fetching user count" });
    }
  });




module.exports =router;



 
>>>>>>> a00876d90ad433b8956840caedcf738a8b4bf058
