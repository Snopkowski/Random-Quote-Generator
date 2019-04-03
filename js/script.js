// 0. declared variables
var quotes;
var randomNumber;
var message;



//array of objects
quotes = [
  { quote: 'E = mc2', source: "Albert Einstein", year: 1905 },
  { quote: 'Women are made to be loved, not understood.', source: 'Oscar Wilde' },
  { quote: 'I\'m going to make him an offer he can\'t refuse', source: 'The Godfather', cite: 'The Godfather', year: 1972 },
  { quote: 'I am your father', source: 'Darth Vader', cite: 'Star Wars Episode V: The Empire Strikes Back', year: 1980 },
  { quote: 'Don\'t be afraid to give up the good to go for the great.', source: 'John D. Rockefeller'}
];

//log quotes
console.log(quotes);

// 1. get random number function

function getRandomNumber() {
  //get a number
  randomNumber = Math.floor(Math.random() * quotes.length );
  // return the number assigned to the quotes array
  return quotes[randomNumber];

}


// 3. print quote function
function printQuote(){
  var randomQuote = getRandomNumber();

  // message structure
  message = '';
  message += '<p class = "quote">' + randomQuote.quote + '</p>';
  message += '<p class = "source">' + randomQuote.source;
  //add cite property if any available
  if (randomQuote.cite){
    message += '<span class="citation">' + randomQuote.cite + '</span>';
  }
  // add year property if available 
  if (randomQuote.year){
    message += '<span class="year">' + randomQuote.year + '</span>';
  }
  //add closing tag
  message += '</p>';


  //target output and amend html
  var outPutDiv = document.getElementById('quote-box');
  outPutDiv.innerHTML = message;
}

//Event listener

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
