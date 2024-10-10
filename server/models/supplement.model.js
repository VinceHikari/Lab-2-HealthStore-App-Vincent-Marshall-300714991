import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const SupplementSchema = new mongoose.Schema({

//name of supplement
name: {
type: String,
trim: true,
required: 'Name is required'
},

//supplement description
description: {
type: String,
trim: true,
required: 'Description is required'
},

//price of supplement
price: {
type: Number,
required: 'Price is required'
},

//quantity of supplement
quantity: {
type: Number,
required: 'Quantity is required'
}

});

//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('Supplement', SupplementSchema);
