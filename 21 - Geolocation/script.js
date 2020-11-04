const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  console.log(data);
  // No access to geolocator simulators, so added +3 and +9
  // to speed and degree respectively to assert that geolocator is working
  speed.textContent = data.coords.speed + 3;
  arrow.style.transform = `rotate(${data.coords.heading + 90}deg)`;
}),
  (err) => {
    console.log(err);
    alert('Please allow access to geolocation');
  };
