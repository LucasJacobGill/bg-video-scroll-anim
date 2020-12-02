const intro = document.querySelector('.intro-wrapper');
const vid = intro.querySelector('video');

//ScrollMagic
const controller = new ScrollMagic.Controller();

//Scene JS
let scene = new ScrollMagic.Scene({
  duration: 22000, // Length of video file in milliseconds
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Video Animation JS
let accelamount = .1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000; // For scrollPos back into seconds
})

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  vid.currentTime = delay;
}, 33.3); // Adjustment to make framerate look good via 1000/framerate of video
