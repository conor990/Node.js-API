const mongoose = require('mongoose');

//Sensitive Data Exposure (A3) : Transmitting the revenue data over insecure channels (using HTTP instead of HTTPS).Storing the revenue data in an improperly secured database. Allowing unrestricted access to the revenue data.
const merchantSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: [true, "Please enter the merchant's latitude"]
  },
  longitude: {
    type: Number,
    required:[true, "Please enter the merchant's longitude"]
  },
  merchantId: {
    type: Number,
    required: [true, "Please enter the merchant's Id"],
    unique: true
  },
  merchantName: {
    type: String,
    required: [true, "Please enter the merchant's Name"]
  },

  revenue: {
    type: Number,
    required: [true, "Please enter the merchant's annual revenue"]
  },

});

const Merchant = mongoose.model('Merchant', merchantSchema);

module.exports = Merchant


