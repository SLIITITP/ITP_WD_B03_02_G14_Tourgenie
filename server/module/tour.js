const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toureSchema = new Schema ({
    title: {
        type: String,
        required: true,
        
      },

      city: {
        type: String,
        required: true,
      },
    
      address: {
        type: String,
        required: true,
      },
    
      distance: {
        type: Number,
        required: true,
      },
      photo: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      maxGroupSize: {
        type: Number,
        required: true,
      }
    

   



})

const tour = mongoose.model("Tours",toureSchema);

module.exports = tour;

