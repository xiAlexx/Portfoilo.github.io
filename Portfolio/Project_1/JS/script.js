// Toggle dropdown on click
let dropdownBtn = document.querySelector('.dropbtn');
let dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdownContent.classList.toggle('show');
});

// Close dropdown if clicked outside
window.addEventListener;

//Making navbar fade in and out using scroll
window.addEventListener('scroll', function() {
  let nav = document.querySelector('.navbar');
  if (window.scrollY > document.body.scrollHeight * 0.3) {
      nav.classList.add('navbar-fixed');
  } else {
      nav.classList.remove('navbar-fixed');
  }
});





