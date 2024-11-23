import ScrollReveal from 'scrollreveal'

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("image-img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

const options = {
  delay: 200,
  opacity: 0,
  // distance: '100px',
  scale: 0.9,
  duration: 600,
  easing: 'cubic-bezier(0.5, 0, 0.25, 0.5)',
}

ScrollReveal(options);

ScrollReveal().reveal('.box-bio-content', {
  delay: 90,
  opacity: 0,
  // distance: '20px',
  scale: 0.9,
  duration: 600,
  easing: 'cubic-bezier(0.5, 0, 0.25, 0.5)',
})
ScrollReveal().reveal('.box-img-content')
// ScrollReveal().reveal('.image-img')
ScrollReveal().reveal('.box-portfolio-content')
ScrollReveal().reveal('.box-francis-content')

