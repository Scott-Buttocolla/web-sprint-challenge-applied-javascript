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
const cardContainer = document.querySelector('.cards-container');

function articleCreator(array, obj, topic){

    //adding tags to each element
    const cardDiv = document.createElement('div');
    const headDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');


//adding class to each element
    cardDiv.classList.add('card');    
    headDiv.classList.add('headline');
    authDiv.classList.add('author');
    imgDiv.classList.add('img-container');


//adding content to each element
    headDiv.textContent = obj.headline;
    img.src = obj.authorPhoto;  // has access to pictures but not rendering. Shows that they are on local host server but not pulling
                                // down from the nodelist. Not sure why, need to research how to access the photos.
                                // could be bad links but they do work through postman and pull up the image correctly
    span.textContent = obj.authorName;

    
//adding structure to each element
    imgDiv.appendChild(img);
    authDiv.appendChild(imgDiv);
    authDiv.appendChild(span);
    cardDiv.appendChild(headDiv);
    cardDiv.appendChild(authDiv);
    console.log(cardDiv);



// adds and passes the topic related to that article for console.logs
// going to see what needs to be done, possibly needs to be added in the tabs js
// currently the structure reflects each atrticle topic correctly
    cardDiv.setAttribute('data-topic', topic); 

//pushing all the items in the function to each array    
    array.push(cardDiv);
}

// empty arrays that each bit from articleCreator adds to.

let javascriptArticles = [];
let bootstrapArticles = [];
let technologyArticles = [];
let jqueryArticles = [];
let nodejsArticles = [];

// using axios to call the data needed

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
//collecting the response for each item and adding
    response.data.articles.bootstrap.forEach((article) => {
        articleCreator(bootstrapArticles, article, 'bootstrap');
    });
   bootstrapArticles.forEach((article)=>{
       cardContainer.appendChild(article);
   })
    response.data.articles.javascript.forEach((article) => {
        articleCreator(javascriptArticles, article, "javascript");
    });
    javascriptArticles.forEach((article)=>{
        cardContainer.appendChild(article);
    })
    response.data.articles.technology.forEach((article) => {
        articleCreator(technologyArticles, article, 'technology');
    });
    technologyArticles.forEach((article)=>{
        cardContainer.appendChild(article);
    })
    response.data.articles.jquery.forEach((article) => {
        articleCreator(jqueryArticles, article, 'jquery');
    });
    jqueryArticles.forEach((article)=>{
        cardContainer.appendChild(article);
    })
    response.data.articles.node.forEach((article) => {
        articleCreator(nodejsArticles, article, 'node.js');
    });
    nodejsArticles.forEach((article)=>{
        cardContainer.appendChild(article);
    })
     console.log(nodejsArticles);

})
.catch(error => {console.log('Error! : ' + error)});

