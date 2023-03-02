// Splitting();

// ScrollTrigger.create({
//   trigger: ".home_hero",
//   start: "bottom center",
//   // markers: true,
//   scrub: true,
//   onEnter: () => {
gsap.to(".skill_svg", {
  duration: 5,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1,
  repeatDelay: 2,
  motionPath: {
    path: ".line_path",
    align: ".line_path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
    start: 1,
    end: 0,
  },
});
// },
// });
