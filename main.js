function quoteEstimate() {
	var x = document.getElementById("quoteText");
	var quote = x.elements[0].value;
	var quoteLength = quote.length;
	var cost;
	if (quoteLength <= 10){
		cost = 5;
	} else {
		cost = 3;
	}
	var quoteCost = quoteLength * cost;
	var shipping = 7;
	var total = quoteCost + shipping;
  var totalCorrect = total.toFixed(2);
	document.getElementById("estimate").innerHTML = "Total cost of your quote: <br> $" + totalCorrect;
	document.getElementById("prettyQuote").innerHTML = quote;
}
