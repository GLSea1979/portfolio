'use strict';

const slides = document.querySelectorAll('#slides .slide');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const slidesEx = document.querySelectorAll('#slidesEx .slideEx');
const nextEx = document.getElementById('nextEx');
const previousEx = document.getElementById('previousEx');
const slidesPhoto = document.querySelectorAll('#slidesPhoto .slidePhoto');
const nextPhoto = document.getElementById('nextPhoto');
const previousPhoto = document.getElementById('previousPhoto');

let currentSlide = 0;
let currentPhoto = 0;
let currentEx = 0;


function nextSlide() {
  goToSlide(currentSlide + 1);
}
function nextSlideEx() {
  goToSlideEx(currentEx + 1);
}
function nextSlidePhoto() {
  goToSlidePhoto(currentPhoto + 1);
}

function previousSlide() {
  goToSlide(currentSlide -1);
}
function previousSlideEx() {
  goToSlideEx(currentEx -1);
}
function previousSlidePhoto() {
  goToSlidePhoto(currentPhoto -1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide showing';
}
function goToSlideEx(n) {
  console.log(slidesEx);
  slidesEx[currentEx].className = 'slideEx';
  currentEx = (n + slidesEx.length) % slidesEx.length;
  slidesEx[currentEx].className = 'slideEx showing';
}
function goToSlidePhoto(n) {
  console.log(slidesPhoto);
  slidesPhoto[currentPhoto].className = 'slidePhoto';
  currentPhoto = (n + slidesPhoto.length) % slidesPhoto.length;
  slidesPhoto[currentPhoto].className = 'slidePhoto showingPhoto';
}

next.onclick = function() {
  nextSlide();
}
previous.onclick = function() {
  previousSlide();
}

nextEx.onclick = function() {
  nextSlideEx();
}
previousEx.onclick = function() {
  previousSlideEx();
}

nextPhoto.onclick = function() {
  nextSlidePhoto();
}
previousPhoto.onclick = function() {
  previousSlidePhoto();
}
