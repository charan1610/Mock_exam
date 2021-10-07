// This file define the customer schema and export the model.

const mongoose = require('mongoose');

const medicineSchema = mongoose.Schema({

	medicineName: {type: String},
	quantity:{type:Number},
	diease_cure:{type:String}
	

});

const medicine = mongoose.model('medicine', medicineSchema);
module.exports = medicine;