//Author: Adrian Pizarro
$(document).ready(function() {
	
	function Keys(){
		this.getAPIKey = function() {return 'AIzaSyDRkTEbRwLqTe7-GCkE3aZn8RkWVeIjV1U';}
	}
	
	$("#textInput").val("http://www.google.com/");
	

	$("#short").click(function(){

		var longurl = $("#textInput").val(); 

		if( $("#textInput").val() != ""){
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
			            $("#result").html("Short URL is: <input type='text' id='copyInput'> Ctrl+c to copy");
			            $("#copyInput").val(resp.id);
						$("#copyInput").select();
			        }
			    });
		    }); 
		}else{
			$("#result").html("write some URL please");
		}		                
	});


	$("#delete").click(function(){
	   $("#result").html("");
	   $("#textInput").val("");
	});
});