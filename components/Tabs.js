// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
// ^^^^^^^ made note of this in HTML file before looking through all js files

// declaring topicsTabs to the parent element in HTML
const topics = document.querySelector('.topics');

function tabCreator(data){
    // creating the element
    const tabDiv = document.createElement('div');
    // adding class
    tabDiv.classList.add('tab');
    //adding the content as the data gets passed in
    tabDiv.textContent = data;
    //adding the structure 
    topics.appendChild(tabDiv);
}
console.log(tabCreator)
// axios is pre-loaded in the HTML file. No need to npm install axios and add import axios from "axios" for access to axios
// comment out line 11 in HTML file if axios is to be imported instead and add import line above on line 13 for readablity with proper comments

axios
.get('https://lambda-times-backend.herokuapp.com/topics') // source of array that axios accesses
.then(response => {
    response.data.topics.forEach((topic)=>{  // calling each value from topics object
        tabCreator(topic);
    });
})
 .catch(error => {console.log('Error! : ' + error)});  // catching errors with error message



