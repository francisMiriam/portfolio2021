import ScrollReveal from 'scrollreveal'

const options = {
  delay: 700,
  opacity: 0,
  // distance: '100px',
  scale: 0.9,
  duration: 900,
  easing: 'cubic-bezier(0.5, 0, 0, 0.5)',
}

ScrollReveal(options);

ScrollReveal().reveal('.francis-portrait',{
  delay: 100,
  // opacity: 0,
  // distance: '20px',
  duration: 300,
  easing: 'cubic-bezier(0.5, 0, 0.25, 0.5)',
} )
ScrollReveal().reveal('.image')
ScrollReveal().reveal('.image-vita')