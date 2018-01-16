// Define variable to hold the value of the array
var makeRandomQuotes = 0;


// Assign quotes to an array of objects
var quotes = [
	
			{ 	quote: 		"Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinkin' badges!",
				source: 	"Alfonso Bedoya",
				citation:   "The Treasure of the Sierra Madre",
				year: 		1948,
				tag:        "Movie: Action",   
			},
			{ 	quote: 		"Here's looking at you, kid.",
				source: 	"Humphrey Bogart",
				citation:   "Casablanca",
				year: 		1942,
				tag:        "Movie: Suspense"      
			},
			{ 	quote: 		"Fasten your seatbelts. It's going to be a bumpy night.",
				source: 	"Bette Davis",
				citation:   "All About Eve",
				tag:		"Movie: Drama",   
			},
			{ 	quote: 		"There's no place like home.",
				source: 	"Judy Garland",
				citation:   "The Wizard of Oz",
				year: 		1939,
				tag:  		"Movie: Fantasy",   
			},
			{ 	quote: 		"I'll be back.",
				source: 	"Arnold Schwarzenegger",
				citation:   "The Terminator",
				tag:        "Movie: Science Fiction",   
			},
			{ 	quote: 		"Life moves pretty fast. You don't stop and look around once in a while, you could miss it.",
				source: 	"Matthew Broderick",
				citation:   "Ferris Bueller",
				year: 		1986,
				tag:        "Movie: Comedy",   
			}
];
// event listener to respond to "Show another quote" button clicks
function getRandomQuote() {
	makeRandomQuotes = Math.floor( Math.random() * quotes.length );
	var makeQuote = quotes[makeRandomQuotes];
	return makeQuote;	
}


function printQuote() { 
	var printMakeQuote = getRandomQuote();
	var getCitation = isThereCitation(printMakeQuote.citation);
	var getYear = isThereYear(printMakeQuote.year);
	console.log(getYear);
	
	function isThereYear(objectProp) {	
		if ( objectProp !== undefined ) {
			return '<span class="year">' + objectProp + '</span>';			
		} else {
			return '';
		}		
	}

	function isThereCitation(objectProp) {	
		if ( objectProp !== undefined ) {
			return '<span class="citation">' + objectProp + '</span>';			
		} else {
			return '';
		}		
	}

	document.getElementById('quote-box').innerHTML = '<p class="quote">' + printMakeQuote.quote + '</p>'
    + '<p class="source">' + printMakeQuote.source + getCitation + getYear + '</p>';
	
	

	
	// !!! These code is commented out because it can create a span tag but could not attach a class into it. !!!
	// Create a new element and store it in a variable.
	// var newSpanEl = document.createElement('span');
	// Create a text node and store it in a variable.
	// var newCitation = document.createTextNode(printMakeQuote.citation);
	// Attach the new text node to the new element.
	// newSpanEl.appendChild(newCitation);
	// Find the position where the new element should be added.
	// var position = document.getElementsByClassName('source')[0];
	// Insert the new element into its position.
	// position.appendChild(newSpanEl).appendChild('class="citation"');

};

// when user clicks anywhere on the button, the "printQuote" function is called
 document.getElementById('loadQuote').addEventListener("click", printQuote, false);

