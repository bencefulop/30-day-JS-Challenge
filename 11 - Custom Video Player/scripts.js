const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenButton = player.querySelector('.fullscreen-toggle');

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function toggleFullScreen() {
  // plays video on fullscreen however with standard chrome controls
  // could preserve custom controls if function toggled a CSS class to set the height/width to 100%
  video.webkitRequestFullscreen();
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

function handleChangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((skipButton) => skipButton.addEventListener('click', skip));
fullScreenButton.addEventListener('click', toggleFullScreen);

ranges.forEach((range) => range.addEventListener('change', handleChangeUpdate));
ranges.forEach((range) =>
  range.addEventListener('mousemove', handleChangeUpdate)
);
