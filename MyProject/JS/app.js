var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active')
        })
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active')
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

var repeat = function (activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 7000);
    }
    repeater()
}
repeat();



const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));








var counterElements = Array.from(document.getElementsByClassName("counter-item"));
var targetValues = [140, 125, 10567,980]; 
var durations = [6000, 6000, 6000, 6000]; 
var startTimes = [null, null, null, null];
var animationFrameId;


function updateCounter(timestamp) {
  var allCountersFinished = true;
  counterElements.forEach(function (element, index) {
    if (!startTimes[index]) startTimes[index] = timestamp;
    var progress = timestamp - startTimes[index];
    var startValue = 0; 
    var endValue = targetValues[index];
    var duration = durations[index];
    var currentValue = Math.round(easeInOutCubic(progress, startValue, endValue - startValue, duration));
    element.innerText = currentValue;

    if (progress < duration) {
      allCountersFinished = false;
    }
  });

  if (!allCountersFinished) {
    animationFrameId = requestAnimationFrame(updateCounter);
  }
}


function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}


function handleScroll() {
  var counterPosition = counterElements[0].getBoundingClientRect().top;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

 
  if (counterPosition - windowHeight <= 0) {
    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(updateCounter);
    }
  } else {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
    startTimes = [null, null, null, null];
    counterElements.forEach(function (element) {
      element.innerText = "0";
    });
  }
}

window.addEventListener("scroll", handleScroll);
  


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('defaultOpen').click();
});

function openTab(evt, tabName) {
  var i, tabContent, tabButtons;


  tabContent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

 
  tabButtons = document.getElementsByClassName('tab-button');
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active');
  }

  
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}


$(document).ready(function(){
  $('.header-burger').click(function(event){
    $('.header-burger,.navbar').toggleClass('open');
    $('body').toggleClass('lock');
  })
});