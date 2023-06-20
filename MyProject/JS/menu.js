
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