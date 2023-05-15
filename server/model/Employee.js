const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema ({

    username : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    name : {
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
    gender:{
        type : String,
        require : true

    },
    etype:{
        type : String,
        require : true

    },
    esalery:{
        type : String,
        require : true

    },

    image : {
        type : String,
        require :true
    }

   



})

const Employee = mongoose.model("Employee",EmployeeSchema);

module.exports = Employee;

