'use strict';

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
// var slideInterval = setInterval(nextSlide, 2000);
// var playing = true;
// var pauseButton = document.getElementById('pause');
var next = document.getElementById('next');
var previous = document.getElementById('previous');

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide -1);
}

function goToSlide(n) {
  console.log('inside bitches');
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide showing';
}

// function pauseSlideshow() {
//   pauseButton.innerHTML = 'Play';
//   playing = false;
//   clearInterval(slideInterval);
// }

// function playSlideshow() {
//   pauseButton.innerHTML = 'Pause';
//   playing = true;
//   setInterval(nextSlide, 2000);
// }

// pauseButton.onclick = function() {
//   if(playing === true) {

// };

next.onclick = function() {
  // pauseSlideshow();
  nextSlide();
}

previous.onclick = function() {
  // pauseSlideshow();
  previousSlide();
}
