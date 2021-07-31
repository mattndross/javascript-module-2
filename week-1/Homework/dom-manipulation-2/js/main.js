/* PART 1 */
const jumbotron = document.querySelector('.jumbotron');
const donateABike = document.querySelector('#donate-btn');
const volunteer = document.querySelector('#volunteer-btn');
// BLUE
const blueBtn = document.querySelector('#blueBtn');
blueBtn.addEventListener('click', changeColoursBlue);

function changeColoursBlue() {
    jumbotron.style.backgroundColor = `#588fbd`;
    donateABike.style.backgroundColor = `#ffa500`;
    volunteer.style.backgroundColor = 'black';
    volunteer.style.color = 'white';
}

//ORANGE
const orangeBtn = document.querySelector('#orangeBtn');
orangeBtn.addEventListener('click', changeColoursOrange);

function changeColoursOrange() {
    jumbotron.style.backgroundColor = `#f0ad4e`;
    donateABike.style.backgroundColor = `#5751fd`;
    volunteer.style.backgroundColor = `#31b0d5`;
    volunteer.style.color = 'white';
}

//GREEN 
 const greenBtn = document.querySelector('#greenBtn');
 greenBtn.addEventListener('click', changeColoursGreen);

 function changeColoursGreen() {
    jumbotron.style.backgroundColor = `#87ca8a`;
    donateABike.style.backgroundColor = 'black';
    volunteer.style.backgroundColor = `#8c9c08`;
}

/* PART 2 */
document.querySelector('form').addEventListener('submit', validateForm);
const inputEmail = document.querySelector('#exampleInputEmail1');
const inputYourName = document.querySelector('#example-text-input');
const inputDescribeYourself = document.querySelector('#exampleTextArea');

function validateForm(){
    event.preventDefault();
    removeRed();
    if (inputEmail.value.length > 0 &&
        inputEmail.value.includes('@') &&
        inputYourName.value.length > 0 &&
        inputDescribeYourself.value.length > 0) {
        alert('Thank you for filling out the form :)');
        blankOut();
    } else {
        redEmail();
        redYourName();
        redDescribeYourself();        
    }
}

function redEmail(){
    if (inputEmail.value.length <= 0) {
        turnRed(inputEmail);
        
    }
};

function redYourName(){
    if (inputYourName.value.length <= 0) {
        turnRed(inputYourName);
        
    }
};

function redDescribeYourself(){
    if (inputDescribeYourself.value.length <= 0) {
        turnRed(inputDescribeYourself);
        
    }
};


function removeRed() {
    inputEmail.classList.remove('bg-danger');
    inputYourName.classList.remove('bg-danger');
    inputDescribeYourself.classList.remove('bg-danger');

}

function blankOut() {
    inputEmail.value = '';
    inputYourName.value = '';
    inputDescribeYourself.value = '';
}

function turnRed(input) {
    input.classList.add('bg-danger');
}