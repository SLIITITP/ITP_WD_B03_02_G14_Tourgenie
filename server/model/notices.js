// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const packageSchema = new Schema({
//     // pid: {
//     //     type: String,
//     //     required: true
//     // },
//     Category: {
//         type: String,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     overview: {
//         type: String,
//         required: true
//     },
//     // duration: {
//     //     type: String,
//     //     required: true
//     // },
//     // itininary: {
//     //     type: String,
//     //     required: true
//     // },
//     // accomodation: {
//     //     type: String,
//     //     required: true
//     // },
//     // lprice: {
//     //     type: Number,
//     //     required: true
//     // },
//     // fprice: {
//     //     type: Number,
//     //     required: true
//     // },
//     // available: {
//     //     type: Boolean,
//     //     required: true
//     // },
//     image: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: String,
//         required: true
//     },
// });

// module.exports = mongoose.model("notices", packageSchema);



const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({
    
    Title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    
    image: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("notices", packageSchema);