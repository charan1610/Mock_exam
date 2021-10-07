// This file defines all customer routes.

const medicine_detail_Cntrls = require('../Controllers/medicine_details');

module.exports = function(app){

	/*Express API creation format
	
		applicationObject.MethodName(API path, handler function);

		Handler function have two params.
		1. Request- It is having all the API request data.
		2. It have all the methods to send the response to this route.
	*/

	// Add customer route.
	app.post('/add_medicine_details', function(req, res){

		console.log("Routes: Inside '/add_medicine_details' API function.");
		medicine_detail_Cntrls.add_medicine_details(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});

	});

	// Get customers List.
	app.get('/medicine_details_list', function(req, res){
		medicine_detail_Cntrls.medicine_details_list(function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Update customer data.
	app.put('/medicine_details_update', function(req, res){
		medicine_detail_Cntrls.update_medicine_details(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Delete customer document.
	app.delete('/medicine_details_delete', function(req, res){
		// Delete customer record logic here.
		medicine_detail_Cntrls.delete_medicine_deatils
		(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	})

};








