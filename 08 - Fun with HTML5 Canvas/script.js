const canvas = document.getElementById('draw');

const ctx = canvas.getContext('2D');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#dde938';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;

let lastX = 0;
let lastY = 0;
