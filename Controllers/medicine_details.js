// This file carries all the customer related APIs handler methods.
const medicine_details_model = require('../Models/medicine_details');


module.exports = {

	/*
		methodNameForAPI: annamousFunction(dataObject, calllbackFunction);
	*/

	// Add new customer.
	add_medicine_details: function(data, cb){

		console.log("Controllers: Inside add_medicine_details function.");

		medicine_details_model(data).save(function(err, res){
			if(err){
				cb(err, null);
			}else{
				let resp = {
					message: "medicine_daetails_created scuccessfully.",
					savedUserObject: res,
					author: "charan kumar",
					date: new Date()
				};
			
			}
		});
	},

	// Get all the medicine list in the DB.
	medicine_details_list: function(cb){

		var queryObj = {};

		medicine_details_model.find(queryObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});
	},

	// Update medicine record.
	update_medicine_details: function(data, cb){
		// Here is the logic to update the medicine data which is already there in our database.
		let queryObj = {
			_id: data.medicineId
		};

		medicine_details_model.findOneAndUpdate(queryObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				let resp = {
					message: "medicine_details record updated successfully.",
					data: res
				}
				cb(null, resp);
			}
		});
	},

	// Delete customer record.
	delete_medicine_deatils: function (data, cb){
		// write the DB query to delete the customer reord from the collection.
		let queryObj = {
			_id: data.medicineId
		};
		medicine_details_model.deleteOne(queryObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				let resp = {
					message: "medicine record deleted successfully.",
					data: res
				}
				cb(null, resp);
			}
		});
	}

};













