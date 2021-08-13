/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

const body = document.querySelector('body');

const changeBgColor = () => {
    setTimeout(function () {body.style.backgroundColor = 'violet'; }, 5000);
}
//changeBgColor();

//array of colors
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
const changeBgColorEvery5 = () => {
    setInterval(() => {
        const currentColor = body.style.backgroundColor;
        if (currentColor === colors[colors.length -1] || !colors.includes(currentColor)) {
            body.style.backgroundColor = colors[0];
        } else {
            let currentColorPosition = colors.indexOf(currentColor);
            body.style.backgroundColor = colors[currentColorPosition + 1]
        }
    }, 500);
}

changeBgColorEvery5();
