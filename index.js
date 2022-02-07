// const audio = document.querySelector("audio");
const player = document.querySelector(".player");
const progressBar = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const main = document.querySelector(".main");
const title = document.querySelector(".song-title");
const navPlayList = document.querySelectorAll(".nav-item");

const playBtn = document.querySelector(".play");
const audio = new Audio();
let isPlay = false;

// Song titles
const songs = ["forest", "solovey", "drozd", "zarynka", "javoronok", "slavka"];

// Default indx song
let songIndx = 0;

// Init
function loadSong(song) {
  audio.src = `assets/audio/${song}.mp3`;
  // change background img
  //  main.src = `/img/${songIndx}.jpg`;
}
loadSong(songs[songIndx]);

// Play
function playAudio() {
  //начинает всегда с начала
  // audio.currentTime = 0;
  playBtn.classList.add("pause");
  audio.play();
  isPlay = true;
}

// Pause
function pauseAudio() {
  // audio.currentTime = 0;
  playBtn.classList.remove("pause");
  audio.pause();
  isPlay = false;
}

// Play & Pause Listener
playBtn.addEventListener("click", () => {
  if (!isPlay) {
    playAudio();
  } else {
    pauseAudio();
  }
});

// ChangeImage
function changeImage(e) {
  navPlayList.forEach((e) => e.classList.remove("active"));
  e.target.classList.add("active");
  // меняем img
  main.style.backgroundImage = `url('./assets/img/${e.target.dataset.item}.jpg')`;
  audio.src = `./assets/audio/${e.target.dataset.item}.mp3`;
  playAudio();
}

navPlayList.forEach((el) => el.addEventListener("click", changeImage));
// Autoplay. Когда закончится начать сначала.
audio.addEventListener("ended", playAudio);
