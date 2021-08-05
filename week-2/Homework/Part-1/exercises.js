/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
let content = document.querySelector("#content");

function exerciseOne(arrayOfPeople) {
  arrayOfPeople.forEach(person => {
    const nameOfPerson = document.createElement('h1');
    const jobOfPerson = document.createElement('h2');

    nameOfPerson.textContent = person.name;
    jobOfPerson.textContent = person.job;

    content.appendChild(nameOfPerson);
    content.appendChild(jobOfPerson);
    
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let list = document.createElement('ul');
  content.appendChild(list);
  list.textContent = 'Shopping List';

  shopping.forEach(item => {
    const shoppingItem = document.createElement('li');
    shoppingItem.textContent = item;
    list.appendChild(shoppingItem);

  })


  //Write your code in here
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  const listOfBooks = document.createElement('ul');
  content.appendChild(listOfBooks);

  books.forEach(book => {
    const bookCard = document.createElement('li');
    listOfBooks.appendChild(bookCard)

    //add p element
    const titleAndAuthor = document.createElement('p');
    titleAndAuthor.textContent = `${book.title} - ${book.author}`;
    bookCard.appendChild(titleAndAuthor);
    
    //add image
    const bookImg = document.createElement('img');
    bookCard.appendChild(bookImg);

    if (book.title === "The Design of Everyday Things") {
      bookImg.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mbhNiA2Q2BfwlertZB0VSwHaHa%26pid%3DApi&f=1';
    } 
    else if (book.title === "The Most Human Human"){
      bookImg.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ACZUFam6BxRcIc8PcTkGhwHaK_%26pid%3DApi&f=1'
    }
    else if (book.title === "The Pragmatic Programmer") {
      bookImg.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.KI_tsGHe4sBa0xd3WjpMyQHaJs%26pid%3DApi&f=1'
    }

    //color 

    if (book.alreadyRead === true) {
      bookCard.style.backgroundColor = 'green';
    } else {
      bookCard.style.backgroundColor = 'red';
    }

  })
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
