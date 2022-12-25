import { Fireworks } from 'fireworks-js';



// Set the date we're counting down to
var countDownDate = new Date("Jan 22, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById('minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById('seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("result").innerHTML = "Chúc mừng Tết Nguyên Đán năm Quý Mão 2023";
  }

}, 1000);

var d = setInterval(function() {
  let currentOpacity = parseFloat(document.getElementById('result').style.opacity);
  currentOpacity += 0.1;
  
  if (currentOpacity <= 1) {
    document.getElementById('result').style.opacity = currentOpacity;
  }

  if (currentOpacity === 1) {
    clearInterval(d);
  }

}, 300);




const container = document.querySelector('body')
const fireworks = new Fireworks(container, { 
  autoresize: true,
  opacity: 0.5,
  acceleration: 1.05,
  friction: 0.97,
  gravity: 1.5,
  particles: 50,
  traceLength: 3,
  traceSpeed: 10,
  explosion: 5,
  intensity: 30,
  flickering: 50,
  lineStyle: 'round',
  hue: {
    min: 0,
    max: 360
  },
  delay: {
    min: 30,
    max: 60
  },
  rocketsPoint: {
    min: 50,
    max: 50
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 3
    },
    trace: {
      min: 1,
      max: 2
    }
  },
  brightness: {
    min: 50,
    max: 80
  },
  decay: {
    min: 0.015,
    max: 0.03
  },
  mouse: {
    click: true,
    move: false,
    max: 1
  }
})
fireworks.start()