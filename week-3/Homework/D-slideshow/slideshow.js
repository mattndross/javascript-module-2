// Write your code here
const img1 =
  "https://media.istockphoto.com/photos/kitten-plays-with-toy-mouse-picture-id157512060?b=1&k=20&m=157512060&s=170667a&w=0&h=zy9XGzASXjSuO3A1wzoPiz9jPKAjc-Lt48fXu4OdnQI=";
const img2 =
  "https://media.istockphoto.com/photos/british-shorthairs-kitten-cat-eats-food-picture-id1316512176?b=1&k=20&m=1316512176&s=170667a&w=0&h=gcmmhxM6axwwEmdOhEGEqBorwMKNHXr23GTQjj92S50=";
const img3 =
  "https://media.istockphoto.com/photos/sunny-cat-picture-id508030340?b=1&k=20&m=508030340&s=170667a&w=0&h=lIR673_IGN7-stwuau78q6YgoKaLI0jgNvOf8CDMBoo=";
const img4 =
  "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80";
const img5 =
  "https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80";

const kittensImages = [img1, img2, img3, img4, img5];

const backButton = document.querySelector("#back-button");
const forwardButton = document.querySelector("#forward-button");
const carousel = document.querySelector("#carousel");
const autoBackBtn = document.querySelector("#auto-back-button");
const autoForwardBtn = document.querySelector("#auto-forward-button");
const stopButton = document.querySelector("#stop-button");
let currentImgIndex = 0;
let interval;

const renderImage = () => {
  carousel.style.backgroundImage = `url(${kittensImages[currentImgIndex]})`;
};

const goBack = () => {
  if (currentImgIndex === 0) {
    currentImgIndex = kittensImages.length - 1;
  } else {
    currentImgIndex--;
  }
  renderImage();
};

backButton.addEventListener("click", () => {
  goBack();
});

const goForward = () => {
  if (currentImgIndex === kittensImages.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  renderImage();
};
forwardButton.addEventListener("click", () => {
  goForward();
});

const autoForward = () => {
  interval = setInterval(goForward, 1000);
};

const autoBack = () => {
  interval = setInterval(goBack, 1000);
};

const stopAuto = () => {
  clearInterval(interval);
};

autoBackBtn.addEventListener("click", () => {
  autoBack();
  backButton.setAttribute("disabled", true);
  forwardButton.setAttribute("disabled", true);
  autoForwardBtn.setAttribute("disabled", true);
});

autoForwardBtn.addEventListener("click", () => {
    autoForward();
    backButton.setAttribute("disabled", true);
    forwardButton.setAttribute("disabled", true);
    autoBackBtn.setAttribute("disabled", true);
});

stopButton.addEventListener("click", () => {
    stopAuto();
    backButton.removeAttribute("disabled");
    forwardButton.removeAttribute("disabled");
    autoForwardBtn.removeAttribute("disabled");
    autoBackBtn.removeAttribute("disabled");
});

renderImage();
