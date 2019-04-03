

//0. ------------------------------------------- array of objects
const quotes = [
  { quote: 'E = mc2', source: "Albert Einstein", year: 1905, tags: 'science' },
  { quote: 'Women are made to be loved, not understood.', source: 'Oscar Wilde', tags: 'poetry'},
  { quote: 'I\'m going to make him an offer he can\'t refuse', source: 'The Godfather', cite: 'The Godfather', year: 1972, tags: 'movie' },
  { quote: 'I am your father', source: 'Darth Vader', cite: 'Star Wars Episode V: The Empire Strikes Back', year: 1980, tags: 'movie' },
  { quote: 'Don\'t be afraid to give up the good to go for the great.', source: 'John D. Rockefeller', tags: 'business'}
];
// one dimensional array of strings - color names
const colors = ['black', 'yellow', 'orangered', 'coral', 'darkcyan', 'lightslategray', 'pink'];

//log quotes
console.log(quotes);

// 1. ----------------------------------------- get random quote function

function getRandomQuote() {
  //get a number
  let randomNumber = Math.floor(Math.random() * quotes.length );
  // return the number assigned to the quotes array
  return quotes[randomNumber];

}

// Random color function 
function getRandomColor() {
  let randomColor = Math.floor(Math.random() * colors.length );
  return colors[randomColor];
}


// 3. ----------------------------------------- print quote function

function printQuote(){
 let randomQuote = getRandomQuote();
 let generatedColor = getRandomColor();

  // message structure
  let message = '';
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
  const outPutDiv = document.getElementById('quote-box');
  outPutDiv.innerHTML = message;

  //target background and change it's color
  document.body.style.backgroundColor = generatedColor;
}

//4. ----------------------------------------- set time interval
setInterval(printQuote, 10000);

//5. -----------------------------------------Event listener
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
