// event listener to respond to "Show another quote" button clicks
getRandomQuote() {

}
// when user clicks anywhere on the button, the "printQuote" function is called
printQuote() {

}
// Array of objects for the quotes
var quotes = [
	{ 
		quote: "No one ever does live happily ever after, but we leave the children to find that out for temselves.", 
		source: "Stephen King", 
		cite: "Wolves of the Calla"
	},
	{
		quote: "Happiness is that state of consciousness which proceeds from the achievement of one's values.",
		source: "Ayn Rand",
		cite: "Atlas Shrugged"
	},
	{
		quote: "Happiness. Simple as a glass of chocolate or tortuous as the heart. Bitter. Sweet. Alive.",
		source: "Joanne Harris",
		cite: "Chocolat"
	},
	{
		quote: "Give a man health and a course to steer; and he'll never stop to trouble about whether he's happy or not.",
		source: "George Bernard Shaw",
		cite: "Captain Brassbound's Conversion"
	},
	{
		quote: "What we need for our happiness is often close at hand, if we knew but how to seek for it.",
		source: "Nathaniel Hawthorne",
		cite: "American Note-Books",
		date: "August 22, 1837"
	},
	{
		quote: "I kept looking for happiness, and then I realized: This is it. It's a moment, and it comes, and it boes, and it'll come back again. I yearn for things, but at the same time I'm just peaceful.",
		source: "Nicole Kidman",
		cite: "Vanity Fair",
		date: "October 2007"
	}
];

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

