const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema ({

    name : {
        type : String,
        require : true
    },
    age : {
        type : String,
        require : true
    },
    gender : {
        type : String,
        require : true
    },
    image : {
        type : String,
        require : true
    }
})

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;

