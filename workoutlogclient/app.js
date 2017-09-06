$(document).ready(function(){	//anonymous function// When the html doc has loaded run all code
	$("#testAPI").on("click", function(){			// When the #testAPI ID is click
		console.log("It is working! Holy cow!");	// Print to the console "it works..etc"
	});

	var test = $.ajax({									// Assigns the ajax request to test
		type: "GET",									// Request for "GETTING" data
		url: "http://localhost:3000/api/test"			// Location of data
	})
	.done(function(data){								// When "test", the ajax call, is run
		console.log(data);								// Print the ajax call's data to the console
	})
	.fail(function(){									// If the ajax call request fails,
		console.log("Oh no! No data! Epic fail!")		// Print to the console "Oh no!"
	});
});
