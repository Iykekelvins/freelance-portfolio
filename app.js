gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
Splitting();

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

const links = document.querySelectorAll("a");
const main = document.querySelector("main");

// cursor
function cursor(e) {
  const mouse = document.querySelector(".cursor");
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

window.addEventListener("mousemove", cursor);

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
      },
    });
    // leave animation
    tl.fromTo(main, 0.75, { opacity: 1 }, { opacity: 0 });
    tl.fromTo(".page", 0.75, { y: "-100%" }, { y: "0%" });
    tl.to(".page_content .word span", 0.75, { y: "0%", stagger: 0.15 });

    // enter animation
    tl.to(".page_content .word span", 0.75, {
      y: "-100%",
      stagger: 0.15,
      ease: "power2.inOut",
      delay: 0.25,
    });

    tl.to(".page", 0.75, {
      y: "100%",
      onComplete: () => {
        window.location.assign(e.target.href);
      },
    });

    tl.fromTo(main, { opacity: 0 }, { opacity: 1 });
  });
});
