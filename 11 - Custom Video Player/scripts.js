const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  toggle.textContent = this.paused ? '►' : '| |';

  // this was my solution 👇
  // if (toggle.textContent == '►') {
  //   toggle.textContent = '||';
  // } else {
  //   toggle.textContent = '►';
  // }
  // console.log(toggle.textContent);
}

function skip() {
  video.currentTime += parseInt(this.dataset.skip);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach((skipButton) => skipButton.addEventListener('click', skip));
