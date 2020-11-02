// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// below adds header container to the parent element on line 36 of the HTML file
const headerContainer = document.querySelector('.header-container');


function Header() {
// giving each needed tag a designated element

    const headDiv =document.createElement("div");
    const headSpan = document.createElement("span");
    const headH1 = document.createElement("h1");
    const headSpan2 = document.createElement('span');

// adding classes to each element

headDiv.classList.add('header');
headSpan.classList.add('date');
headH1.classList.add('h1');
headSpan2.classList.add('temp');

// adding structure to the tree
headDiv.appendChild(headSpan);
headDiv.appendChild(headH1);
headDiv.appendChild(headSpan2);

// adding content 
headSpan.textContent = "SMARCH 28, 2019";
headH1.textContent = "Lambda Times";
headSpan2.textContent = "98°";  // added the little o by hitting alt 0176 per google and it worked


return headDiv

}
// below adds everything from the function to the parent container that has been declared above the start of the function
headerContainer.appendChild(Header());
