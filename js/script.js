

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

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
 return randomNumber = Math.floor(Math.random() * 5 );
}
// call the function
getRandomNumber();
console.log(randomNumber);

// 3. print quote function
function printQuote() {
  document.getElementById('quote-box').innerHTML = message;
};
printQuote();
message = quotes[randomNumber];
console.log(message);


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.