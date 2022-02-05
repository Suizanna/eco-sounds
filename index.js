const audio = document.querySelector("audio");
const player = document.querySelector(".player");
const progressBar = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const main = document.querySelector(".main-img");
const title = document.querySelector(".song-title");

const playBtn = document.querySelector(".play");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let isPlay = false;

// Song titles
const songs = ["Forest", "Solovey", "Drozd", "Zarynka", "Javoronok", "Slavka"];

// Default song
let songIndx = 0;

// Init
function loadSong(song) {
  title.innerHTML = song;
  audio.src = `assets/audio/${song}.mp3`;
  // change background img
  //  main.src = `img/${songIndx}.jpg`;
}
loadSong(songs[songIndx]);

// Next
function nextSong() {
  if (songIndx === songs.length - 1) {
    songIndx = 0;
  } else {
    songIndx++;
  }
  loadSong(songs[songIndx]);
  playAudio();
}
// Prev
function prevSong() {
  //   if (songIndx < 0) {
  if (songIndx === 0) {
    songs.length - 1;
  } else {
    songIndx--;
  }
  loadSong(songs[songIndx]);
  playAudio();
}
// Play
function playAudio() {
  //   audio.currentTime = 0;
  playBtn.classList.add("pause");
  audio.play();
  isPlay = true;
}
// Pause
function pauseAudio() {
  playBtn.classList.remove("pause");
  //   audio.currentTime = 0;
  audio.pause();
  isPlay = false;
}

// Play & Pause
playBtn.addEventListener("click", () => {
  if (!isPlay) {
    playAudio();
  } else {
    pauseAudio();
  }
});

// Progress bar
function updateProgress(e) {
  //   const { currentTime, duration } = e.srcElement;
  //   console.log(currentTime);
  //   console.log(duration);
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${percent}%`;
}

// Set progress
function setProgress(e) {
  const width = this.clientWidth; //вся ширина
  const clickX = e.offsetX; // куда кликнули
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// Autoplay
audio.addEventListener("ended", nextSong);

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressBar.addEventListener("click", setProgress);
