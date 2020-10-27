// timeNodes is by default a Nodelist. In order to convert it to an array we need to call Array.from() on it.

const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(':');
    console.log(mins, secs);
  });
