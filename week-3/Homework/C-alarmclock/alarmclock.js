const setButton = document.querySelector('#set')
setButton.addEventListener('click', () =>{
  const alarmSet = document.querySelector('#alarmSet').value;
  document.querySelector('#timeRemining').value = alarmSet;
})
function setAlarm() {

}

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
