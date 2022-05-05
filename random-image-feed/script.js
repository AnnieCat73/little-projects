const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 5;

for (let i = 0; i < rows * 3; i++) { //3 images per row
  const img = document.createElement('img');
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

//console.log(getRandomSize())

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}

//console.log(getRandomNr())