// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


// needing to create a function that allows me to acces the data in an array where each object is another array.
// will need to break down the each array into a seperate array for access
//first step is to create the parent variable that will be returned at the end
// second step pull the api address to inspect the data
// third step is to create a function that will add all the items to the arrays
// calling the parameters as needed. We will be calling 
// fourth step is to create an array for each area of the area to eventually put the data, .push is how we add items to an emtpy array.

// creating the variable to later append to for the parent
const cardContainer = document.querySelector('.card-container')

function articleCreator(array, obj){

// giving each needed tag an element
    const mainDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const spanName = document.createElement('span');

// giving each element class
    mainDiv.classList.add('card');
    titleDiv.classList.add('headline');
    authDiv.classList.add('author');
    imgDiv.classList.add('img-container')

    // giving structure
    
}

