const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      // the below code is deprecated so instead we can attach the media stream directrly to the video source object
      // video.scr = window.URL.createObjectURL(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error(`Webcam access is denied`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    let pixels = ctx.getImageData(0, 0, width, height);
    pixels = redEffect(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 90);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  // extract data from canvas element

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'goodlooking');
  link.innerHTML = `<img src="${data}" alt="snapshot" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100;
    pixels.data[i + 1] = pixels.data[i + 1] - 50;
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
  }
  return pixels;
}

getVideo();
video.addEventListener('canplay', paintToCanvas);
