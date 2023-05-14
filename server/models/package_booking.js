const mongoose = require('mongoose');

const Pack_bookingSchema = new mongoose.Schema({
  bId: {
    type: String,
    required: true
  },
  pId: {
    type: String,
    required: true
  },
  pName: {
    type: String,
    required: true
  },
  uId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  nOp: {
    type: Number,
    required: true
  },
  state: {
    type: String,    
    required: true
  },
 email: {
    type: String,    
    required: true
  }
});

module.exports = mongoose.model('pckgbookings', Pack_bookingSchema);


