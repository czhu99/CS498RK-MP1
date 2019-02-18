// Code for handling the navbar resizing
window.onscroll = function() {
  navBarScroll()
};

function navBarScroll() {
  var sections = document.getElementsByClassName("nav-text");
  if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
    document.getElementById("navbar").style.height = "10vh";
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.fontSize = "24px";
    }
  } else {
    document.getElementById("navbar").style.height = "15vh";
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.fontSize = "32px";
    }
  }
}

//Code for handling navbar position


// Code for handling carousel slides
var slideIndex = 1;
document.addEventListener("DOMContentLoaded", function(event) {
  showSlides(slideIndex);
});


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
window.plusSlides = plusSlides;

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}
