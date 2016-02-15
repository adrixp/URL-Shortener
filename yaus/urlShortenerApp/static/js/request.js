//Author: Adrian Pizarro
$(document).ready(function() {
	
	function Keys(){
		this.getAPIKey = function() {return 'AIzaSyDRkTEbRwLqTe7-GCkE3aZn8RkWVeIjV1U';}
	}
	
	$("#textInput").val("http://www.google.com/");
	

	$("#short").click(function(){

		longurl = $("#textInput").val(); 
		var myKeys = new Keys();
		gapi.client.setApiKey(myKeys.getAPIKey());

		gapi.client.load('urlshortener', 'v1', function() {
		    var request = gapi.client.urlshortener.url.insert({
		        'resource': {
		            'longUrl': longurl
		        }
		    });
		    var resp = request.execute(function(resp) {
		        if (resp.error) {
		            $("#show").html('Error. ' + resp.error.message);
		        } else {
		            $("#result").html("Short URL is: <b>" + resp.id+"</b>");
		        }
		    });
	    });                   
	});


	$("#delete").click(function(){
	   $("#result").html("");
	   $("#textInput").val("");
	});
});