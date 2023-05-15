const router = require ("express").Router();
let vehical =require ("../model/vehical");


//data display

router.route("/").get((req,res)=>{
    vehical.find().then((vehical)=>{
        res.json(vehical)
    }).catch((err)=>{
        console.log(err)
    })
});
module.exports =router;