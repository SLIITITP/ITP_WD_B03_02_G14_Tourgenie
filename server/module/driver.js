const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema ({
    empid : {
        type : String,
        require : true
    },

    name : {
        type : String,
        require : true
    },
    
    email : {
        type : String,
        require : true
    },
    
    mobile_number : {
        type : String,
        require : true
    },
    NIC : {
        type : String,
        require : true
    },
    gender : {
        type : String,
        require : true
    },
    location :{
        type : String,
        require : true
    },
    license_number:{
        type : String,
        require : true
    },
    lexpire_date:{
        type : String,
        require : true
    },

    dsalery:{
        type : String,
        require : true
    },




    image:{
        type : String,
        require : true
    }

   



})

const driver = mongoose.model("driver",driverSchema);

module.exports = driver;

