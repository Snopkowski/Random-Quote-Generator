// 0. declared variables - probably shouldn't declare them here because they become 'global variables' and it's easier to mess things up, right? 
var quotes;
var randomNumber;
var message;
var randomQuote;



//array of objects
quotes = [
  { quote: 'E = mc2', source: "Albert Einstein", year: 1905, tags: 'science' },
  { quote: 'Women are made to be loved, not understood.', source: 'Oscar Wilde', tags: 'poetry'},
  { quote: 'I\'m going to make him an offer he can\'t refuse', source: 'The Godfather', cite: 'The Godfather', year: 1972, tags: 'movie' },
  { quote: 'I am your father', source: 'Darth Vader', cite: 'Star Wars Episode V: The Empire Strikes Back', year: 1980, tags: 'movie' },
  { quote: 'Don\'t be afraid to give up the good to go for the great.', source: 'John D. Rockefeller', tags: 'business'}
];

//log quotes
console.log(quotes);

// 1. ----------------------------------------- get random number function

function getRandomNumber() {
  //get a number
  randomNumber = Math.floor(Math.random() * quotes.length );
  // return the number assigned to the quotes array
  return quotes[randomNumber];

}


// 3. ----------------------------------------- print quote function
function printQuote(){
 randomQuote = getRandomNumber();

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
  if (randomQuote.tags) {
    message += ' -' + randomQuote.tags;
  }
  //add closing tag
  message += '</p>';


  //target output and amend html
  var outPutDiv = document.getElementById('quote-box');
  outPutDiv.innerHTML = message;
}

//4. ----------------------------------------- set time interval
setInterval(printQuote, 10000);

//5. -----------------------------------------Event listener
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
