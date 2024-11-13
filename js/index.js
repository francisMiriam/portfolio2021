import ScrollReveal from 'scrollreveal'

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
  duration: 300,
  easing: 'cubic-bezier(0.5, 0, 0.25, 0.5)',
})
ScrollReveal().reveal('.box-img-content')
ScrollReveal().reveal('.box-portfolio-content')
ScrollReveal().reveal('.box-francis-content')