// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}

// Automatically click on "Eat" tab by default
document.getElementById("myLink").click();

const comicBox = document.getElementById("comic-box");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const decisionBtns = document.getElementById("decisionBtns");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let state = 1;

// Initialize with Text 1
comicBox.textContent = "Text 1";

startBtn.addEventListener("click", () => {
  comicBox.textContent = "Text 2";
  startBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
  state = 2;
});

nextBtn.addEventListener("click", () => {
  if (state === 2) {
    comicBox.textContent = "Text 3";
    nextBtn.style.display = "none";
    decisionBtns.style.display = "block";
    state = 3;
  }
});

yesBtn.addEventListener("click", () => {
  comicBox.textContent = "Text 4";
  decisionBtns.style.display = "none";
});

noBtn.addEventListener("click", () => {
  comicBox.textContent = "Text 5";
  decisionBtns.style.display = "none";
});
