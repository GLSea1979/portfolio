'use strict';

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
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


next.onclick = function() {
  // pauseSlideshow();
  nextSlide();
}

previous.onclick = function() {
  // pauseSlideshow();
  previousSlide();
}
