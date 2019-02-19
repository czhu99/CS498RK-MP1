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
document.addEventListener("DOMContentLoaded", function(event) {
  var links = document.querySelectorAll("li a");
  links[0].classList.add("highlight");
  window.addEventListener("scroll", event => {
    var scrollPos = window.scrollY;
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var section = document.querySelector(link.hash);
      if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        link.classList.add("highlight");
      } else {
        link.classList.remove("highlight");
      }
    }
  });
});

// Code for handling carousel slides
var index = 1;
document.addEventListener("DOMContentLoaded", function(event) {
  display(index);
});


function rotateSlide(n) {
  index += n;
  display(index);
}
window.rotateSlide = rotateSlide;

// Thumbnail image controls
function currentSlide(n) {
  index = n;
  display(index);
}

function display(n) {
  var slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {
    index = 1;
  }
  if (n < 1) {
    index = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[index-1].style.display = "block";
}

//Code for modals
window.onload = function() {

  var modal = document.getElementById('officer-modal');
  var imgs = document.getElementsByClassName("img-circle");
  var modalImg = document.getElementById("officer-img");
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    }
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
