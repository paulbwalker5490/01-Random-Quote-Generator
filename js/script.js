// Define variable to hold the value of the array
var makeRandomQuotes = 0;
var makeQuote;

// Assign quotes to an array of objects
var quotes = [
	
			{ 	quote: 		"Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinkin' badges!",
				source: 	"Alfonso Bedoya",
				citation:   "The Treasure of the Sierra Madre",
				year: 		1948,
				tag:        "Movie: Action",   
			},
			{ 	quote: 		"All the world's a stage, and all the men and women merely players.",
				source: 	"William Shakespeare",
				citation:   "As You Like It",
				tag:        "Shakespeare"      
			},
			{ 	quote: 		"The worst loneliness is not to be comfortable with yourself.",
				source: 	"Mark Twain",
				tag:		"Famous Author",   
			},
			{ 	quote: 		"Success is not final; failure is not fatal: It is the courage to continue that counts.",
				source: 	"Winston S. Churchill",
  				tag:		"Famous Politician",   
			},
			{ 	quote: 		"That's what I love most about writers--they're such lousy actors.",
				source: 	"Vincent H. O'Neil",
				citation:   "Death Troupe",
				tag:        "Actors",   
			},
			{ 	quote: 		"Life moves pretty fast. You don't stop and look around once in a while, you could miss it.",
				source: 	"Matthew Broderick",
				citation:   "Ferris Bueller",
				year: 		1986,
				tag:        "Movie: Comedy",   
			}
];


// Anonymous function used to make random quote from the quotes object.
function getRandomQuote() {
// Using the Math.random Method to generate the random numbers in the quotes array length 0 to 5.
	makeRandomQuotes = Math.floor( Math.random() * quotes.length ) + 1;
// Assign the global variable and get the number that's generated and the object that's assigned to that number.
	makeQuote = quotes[makeRandomQuotes];
	return makeQuote;	
}


function printQuote(setBgColor) { 
// Assign local variable that getRandomQuote() function when its called.
	var printMakeQuote = getRandomQuote();
// If there is a citation property on the quotes property it will display this variable.
	var getCitation = isThereCitation(printMakeQuote.citation);
// If there is a year property with a year, it will display this variable.
	var getYear = isThereYear(printMakeQuote.year);

	var getTags = getTagQuotes(printMakeQuote.tag);
// Anonymous function to be used if object propery year is in the quote.
	function isThereYear(objectProp) {	
		if ( objectProp !== undefined ) {
			return '<span class="year">' + objectProp + '</span>';			
		} else {
			return '';
		}		
	}
// Anonymous fuction to be used if object propery citation is in the quote.
	function isThereCitation(objectProp) {	
		if ( objectProp !== undefined ) {
			return '<span class="citation">' + objectProp + '</span>';			
		} else {
			return '';
		}		
	}

	function getTagQuotes(objectProp) {
		if ( objectProp !== undefined ) {
			return '<h2>' + objectProp + '</2>';
		} else {
			return '';
		}
		
	}

 
// Return this code to the .addEventListener when the button is clicked
	document.getElementById('quote-box').innerHTML = getTags + '<p class="quote">' + printMakeQuote.quote + '</p>'
    + '<p class="source">' + printMakeQuote.source + getCitation + getYear + '</p>';	


     function bgColor() {
     	var colors = [ 'maroon','blue', 'orange', 'teal', 'gray', 'purple' ];
    	var getRandomColor = Math.floor( Math.random() * colors.length ) + 1;
    	var makeColor = colors[getRandomColor];
    	return document.body.style.backgroundColor = makeColor;
    } 

 	setInterval(bgColor, 30000);
};


// when user clicks anywhere on the button, the "printQuote" function is called
 document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Display different quote every 3 seconds
setInterval(printQuote, 30000);


