const exspress = require("express");
const router = exspress.Router();
const User= require("../models/user")


router.post("/register",async(req, res)=>{

    console.log(req.body)

    const {name,email,password,isAdmin}=req.body

    const newuser = new User({name:name, email:email , password:password})
        try{
            const user = await newuser.save()
            res.send('User registred successefully')

        }catch(error){
            return res.status(400).json({error});
        }

});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email, password: password });
        if (user) {
            res.send(user);
        } else {
            return res.status(400).json({ message: "Login Failed" });
        }
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router