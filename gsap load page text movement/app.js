//timeline setup, the defaults is how long does the animation lasts

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// GSAP snags a starting value, an ending value and then interpolates between them 60 times per second.
// now we can animate different elements as we want, and we have to hide the text in css (.hide) by setting its background to black and display to stransparent
// stagger makes the elements appear one by one and the -=1 delays the start a little
tl.to('.text', { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
