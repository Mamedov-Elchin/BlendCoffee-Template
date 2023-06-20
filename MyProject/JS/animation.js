
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


$(document).ready(function(){
    $('.header-burger').click(function(event){
      $('.header-burger,.navbar').toggleClass('open');
      $('body').toggleClass('lock');
    })
  });