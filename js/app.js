gsap.registerPlugin(ScrollTrigger);
Splitting();

gsap.to(".home_hero_content_img", {
  scrollTrigger: {
    trigger: ".home_hero_content_img",
    // markers: true,
    start: "top center",
  },
  height: "100%",
  duration: 1,
  ease: "power1.out",
});

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// home animations

gsap
  .timeline()
  .set(
    [
      ".home_hero_content h1 .word",
      ".home_hero_content h2 .word",
      ".home_hero_content p .word",
      // ".home_hero_skills p .word",
    ],
    {
      overflow: "hidden",
    }
  )
  .set(
    [
      ".home_hero_content h1 .char",
      ".home_hero_content p .char",
      ".home_hero_content h2 .char",
      ,
    ],
    {
      yPercent: 100,
    }
  )
  .set([".home_hero_skills p .char", ".home_hero_socials li .char"], {
    xPercent: 1000,
    opacity: 0,
  })
  .to(".home_hero_content h1 .char", {
    yPercent: 0,
    stagger: 0.1,
  })
  .to([".home_hero_content p .char", ".home_hero_content h2 .char"], {
    yPercent: 0,
  })
  .to([".home_hero_skills p .char", ".home_hero_socials li .char"], {
    xPercent: 0,
    stagger: 0.05,
    opacity: 1,
  })
  .set(
    ".home_works_project  .word",
    // ".home_works_center .home_works_project .number .word",
    // ".home_works_bottom .home_works_project .number .word",
    // ".home_works_project h3 .word",

    {
      overflow: "hidden",
    }
  )
  .set(".home_works_project .char", {
    yPercent: 100,
  });

ScrollTrigger.create({
  trigger: ".home_works_top",
  start: "top +=500",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".home_works_top .home_works_project .number .char", {
      yPercent: 0,
      stagger: 0.05,
      ease: "power1.out",
    });
  },
});

ScrollTrigger.create({
  trigger: ".home_works_center",
  start: "top +=500",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".home_works_center .home_works_project .number .char", {
      yPercent: 0,
      stagger: 0.05,
      ease: "power1.out",
    });
  },
});

ScrollTrigger.create({
  trigger: ".home_works_bottom",
  start: "top +=500",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.timeline().to(".home_works_bottom .home_works_project .number .char", {
      yPercent: 0,
      stagger: 0.05,
      ease: "power1.out",
    });
  },
});

ScrollTrigger.create({
  trigger: ".home_works_top .home_works_project h3",
  start: "top bottom",
  once: true,
  // markers: true,
  // scrub: true,
  onEnter: () => {
    gsap.to(".home_works_top .home_works_project h3 .char", {
      yPercent: 0,
      ease: "power1.out",
      stagger: 0.025,
    });
  },
});

ScrollTrigger.create({
  trigger: ".home_works_center .home_works_project h3",
  start: "top bottom",
  once: true,
  // markers: true,
  // scrub: true,
  onEnter: () => {
    gsap.to(".home_works_center .home_works_project h3 .char", {
      yPercent: 0,
      ease: "power1.out",
      stagger: 0.025,
    });
  },
});

ScrollTrigger.create({
  trigger: ".home_works_bottom .home_works_project h3",
  start: "top bottom",
  once: true,
  // markers: true,
  // scrub: true,
  onEnter: () => {
    gsap.to(".home_works_bottom .home_works_project h3 .char", {
      yPercent: 0,
      ease: "power1.out",
      stagger: 0.025,
    });
  },
});

ScrollTrigger.create({
  trigger: ".home_works_top .home_works_project p",
  start: "top bottom",
  once: true,
  // markers: true,
  // scrub: true,
  onEnter: () => {
    gsap.to(".home_works_top .home_works_project p .char", {
      yPercent: 0,
      ease: "power1.out",
      stagger: 0.025,
    });
  },
});

ScrollTrigger.create({
  trigger: ".home_works_center .home_works_project p",
  start: "top bottom",
  once: true,
  // markers: true,
  // scrub: true,
  onEnter: () => {
    gsap.to(".home_works_center .home_works_project p .char", {
      yPercent: 0,
      ease: "power1.out",
      stagger: 0.025,
    });
  },
});

ScrollTrigger.create({
  trigger: ".home_works_bottom .home_works_project p",
  start: "top bottom",
  once: true,
  // scrub: true,
  onEnter: () => {
    gsap.to(".home_works_bottom .home_works_project p .char", {
      yPercent: 0,
      ease: "power1.out",
      stagger: 0.025,
    });
  },
});
