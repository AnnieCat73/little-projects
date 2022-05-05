const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = "We Love Programming!";
let index = 1; //the index starts at 1
let speed = 1000;//300 or whichever no you prefer



function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;//go to 2, 3 etc
  if (index > text.length) {
    index = 1;//resets to 1 if reaches the end
  }
  setTimeout(writeText, speed)
}
writeText();

speedEl.addEventListener('input', (e) => speed = 1000 / e.target.value);
