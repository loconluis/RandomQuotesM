var quotes = [
	{
		"quote" : "The only sin is ignorance",
		"source" : "Christopher Marlowe"
	},
	{
		"quote" : "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true",
		"source" : "Demosthenes"
	},
	{
		"quote" : "A lie can travel halfway around the world while the truth is putting on its shoes",
		"source" : "Mark Twain"
	},
	{
		"quote" : "Great minds discuss ideas; average minds discuss events; small minds discuss people",
		"source" : "Eleanor Roosevelt"
	},
	{
		"quote" : "If you have a garden and a library, you have everything you need",
		"source" : "Marcus Tullius Cicero"
	},
	{
		"quote" : "Truth comes out in wine",
		"source" : "Pliny the Elder"
	},
	{
		"quote" : "Everything in the universe is within you. Ask all from yourself",
		"source" : "Rumi"
	},
	{
		"quote" : "When I get a little money I buy books; and if any is left I buy food and clothes",
		"source" : "Desiderius Erasmus"
	}
]
var showQ =  document.getElementById('quote');
var showA = document.getElementById('author');
var twt = document.getElementById('twtshare');
var data = [];
function getQuote(){
	var rn = quotes[Math.floor(Math.random()*quotes.length)];
	showQ.innerText = rn.quote;
	data[0] = rn.quote;
	showA.innerText = rn.source;
	data[1] = rn.source;
}

getQuote();

document.querySelector("button").addEventListener('click', getQuote);
document.getElementById('twtshare').setAttribute("href", 'https://twitter.com/intent/tweet?hashtags=quote&text= "' + data[0]+'"'+' -'+data[1]);
