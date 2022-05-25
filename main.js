const playBtn = document.getElementById("play");
const iframe = document.getElementById("iframe2");
let timer = 0;
let playY;

const playVideo = playBtn.addEventListener("click", () => {
  if (timer == 0) {
    playY = iframe.src += "?autoplay=1";
    timer = 1;
  }
});
