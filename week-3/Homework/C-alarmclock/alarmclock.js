let count = 0;


function setAlarm() {
  const title = document.querySelector("#timeRemaining");
}

function startTimer(duration, display) {
  let timer = duration,
    minutes, seconds;
  const interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = `Time Remaining: ${minutes}:${seconds}`;

    if (--timer < 0) {
      timer = 0;
      clearInterval(interval);
      playAlarm();
    }

    console.log('timer', timer)
  }, 1000);

  

}

document.querySelector("#set").addEventListener("click", (e) => {
  e.preventDefault();
  const userInput = parseInt(document.querySelector("#alarmSet").value);
  count = userInput;
  const displayCount = document.querySelector("#timeRemaining");
  startTimer(count, displayCount);
})


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
