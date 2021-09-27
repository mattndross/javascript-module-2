/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/


/* TASK 1 */
const allTheP = document.querySelectorAll('p');
console.log(allTheP.length);

const firstDiv = document.querySelector('div');
console.log(firstDiv);

const jumbotron = document.querySelector('#jumbotron-text');
console.log(jumbotron);

const allThePInPrimary = document.querySelectorAll('.primary-content p');
console.log(allThePInPrimary);

/* TASK 2 */
document.querySelector('#alertBtn').addEventListener('click', alertThanks);

function alertThanks() {
    alert("Thanks for visiting Bikes for Refugees!");
}

/* TASK 3 */
/*  EDITED IN TASK 7
document.querySelector('#bgrChangeBtn').addEventListener('click', changeBgrColour);
const body = document.querySelector('body');

function changeBgrColour(){
    if (body.className == 'bg-primary') {
        body.classList.remove('bg-primary');
    } else {
        body.classList.add('bg-primary');
    }
}
*/

/* TASK 4 */
const addTextBtn = document.querySelector('#addTextBtn');
const mainArticles = document.querySelector('#mainArticles');
addTextBtn.addEventListener('click', e => {
    console.log(e);
    addP('el texto que tu quieras')
});

function addP(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text
    mainArticles.appendChild(paragraph);
    
}

/* TASK 5 */
const allLinks = [...document.querySelectorAll('a')];
const largerLinksBtn = document.querySelector('#largerLinksBtn');
largerLinksBtn.addEventListener('click', increaseLinksFontSize);
console.log(allLinks)

function increaseLinksFontSize() {
    allLinks.map(link => link.style.fontSize = '1.3em');
}

/* TASK 6 */
const addArticleBtn = document.querySelector('#addArticleBtn');
addArticleBtn.addEventListener('click', addArticle);

function addArticle() {
    //create article element and add class
    const article = document.createElement('article');
    article.classList.add('article');


    //create p element and add class
    const paragraph = document.createElement('p');
    paragraph.classList.add('article-lead')
    
    // append childs to each parents
    article.appendChild(paragraph);
    mainArticles.appendChild(article);
    
    //get the text inside the input field
    const inputText = document.querySelector('.addArticle').value;
    paragraph.textContent = inputText.trim();
    
    //clear the input field
    document.querySelector('.addArticle').value = '';
}

/* TASK 7 */

//Create an array of 5 different colors
const fiveColours = ['bg-primary', 'bg-danger', 'bg-success', 'bg-warning', 'bg-white']

//add an event when the 'change colour' button is clicked
document.querySelector('#bgrChangeBtn').addEventListener('click', changeBgrColour);

function changeBgrColour(){
    const body = document.querySelector('body');
    let colourIndex = fiveColours.indexOf(body.className);
    if (body.className === fiveColours[fiveColours.length -1]) {
        body.classList.remove(fiveColours[fiveColours.length -1])
        body.classList.add(fiveColours[0]);
    } else {
        body.classList.remove(fiveColours[colourIndex])
        body.classList.add(fiveColours[colourIndex + 1]);
    }
    console.log(body.classList)
}