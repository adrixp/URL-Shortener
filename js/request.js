//Author: Adrian Pizarro
$(document).ready(function() {
	
	function Keys(){
		this.getAPIKey = function() {return 'AIzaSyDRkTEbRwLqTe7-GCkE3aZn8RkWVeIjV1U';}
	}

	var myKeys = new Keys();
	console.log(myKeys.getAPIKey());
});