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

const topImages = document.querySelector(".home_works_top");
const centerImages = document.querySelector(".home_works_center");
const bottomImages = document.querySelector(".home_works_bottom");

const projects = [
  {
    img: "/assets/images/project_1.png",
    title: "Smoking photos",
    info: "Smoke",
  },
  {
    img: "/assets/images/project_2.png",
    title: "Night City",
    info: "Night",
  },
  {
    img: "/assets/images/project_3.png",
    title: "Night City View",
    info: "City",
  },
  {
    img: "/assets/images/project_4.png",
    title: "Motion Portrait",
    info: "Portrait",
  },
  {
    img: "/assets/images/project_5.png",
    title: "Human Skin",
    info: "Skin",
  },
  {
    img: "/assets/images/project_6.png",
    title: "Ghost Rider",
    info: "Smoke",
  },
  {
    img: "/assets/images/project_7.png",
    title: "Black and White Photo of Young Human",
    info: "Portrait",
  },
];

const createWorkElement = (element) => {
  const project = document.createElement("div");

  const span = document.createElement("span");
  const img = document.createElement("img");
  const title = document.createElement("h3");
  const info = document.createElement("p");
  const div = document.createElement("div");
  const cover = document.createElement("div");

  span.innerText = `0${projects.findIndex((m) => m === element) + 1}`;
  img.src = element.img;
  title.innerText = element.title;
  info.innerText = element.info;

  span.dataset.splitting = "chars";
  title.dataset.splitting = "chars";
  info.dataset.splitting = "chars";

  div.appendChild(img);
  div.appendChild(cover);
  project.appendChild(span);
  project.appendChild(div);
  project.appendChild(title);
  project.appendChild(info);

  project.classList.add("home_works_project");
  span.classList.add("number");
  div.classList.add("home_works_project_cover");

  return project;
};

projects.slice(0, 3).forEach((element) => {
  let project = createWorkElement(element);

  topImages.appendChild(project);
});

projects.slice(3, 5).forEach((element) => {
  let project = createWorkElement(element);
  centerImages.appendChild(project);
});

projects.slice(5, 7).forEach((element) => {
  let project = createWorkElement(element);
  bottomImages.appendChild(project);
});

// home animations

const animateHome = () => {
  gsap
    .timeline()
    .set(
      [
        ".home_hero_content h1 .word",
        ".home_hero_content h2 .word",
        ".home_hero_content p .word",
        ".home_works_project  .word",
        ".connect  .word",
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
        ".connect  .char",
      ],
      {
        yPercent: 100,
      }
    )
    .set([".home_hero_skills p .char", ".home_hero_socials li .char"], {
      xPercent: 1000,
      opacity: 0,
    })
    .to(".home_hero_content h1 .word .char", {
      yPercent: 0,
      stagger: 0.1,
    })
    .to(
      [".home_hero_content p .char", ".home_hero_content h2 .char"],
      {
        yPercent: 0,
      },
      "-=0.5"
    )
    .to(
      [".home_hero_skills p .char", ".home_hero_socials li .char"],
      {
        xPercent: 0,
        stagger: 0.02,
        opacity: 1,
      },
      "-=0.5"
    )
    .fromTo(
      ".home_hero_content_img  div",
      0.85,
      {
        x: "0%",
        ease: "power1.out",
      },
      {
        x: "100%",
        ease: "power1.out",
      }
    )
    .fromTo(
      ".home_hero_content_img  img",
      0.85,
      {
        scale: "1.5",
        ease: "power1.out",
      },
      {
        scale: "1",
        ease: "power1.out",
      },
      "-=2"
    )
    .set(".home_works_project .char", {
      yPercent: 100,
    });

  ScrollTrigger.create({
    trigger: ".home_works_top",
    start: "top center",
    once: true,
    // markers: true,
    onEnter: () => {
      gsap.to(".home_works_top .home_works_project .number .char", {
        yPercent: 0,
        stagger: 0.05,
        ease: "power1.out",
      });
      gsap.fromTo(
        ".home_works_top .home_works_project_cover div",
        0.85,
        {
          x: "0%",
          ease: "power1.out",
        },
        {
          x: "100%",
          ease: "power1.out",
        }
      );
      gsap.fromTo(
        ".home_works_top .home_works_project_cover img",
        0.85,
        {
          scale: "1.5",
          ease: "power1.out",
        },
        {
          scale: "1",
          ease: "power1.out",
        }
      );
    },
  });

  ScrollTrigger.create({
    trigger: ".home_works_center",
    start: "top center",
    once: true,
    // markers: true,
    onEnter: () => {
      gsap.to(".home_works_center .home_works_project .number .char", {
        yPercent: 0,
        stagger: 0.05,
        ease: "power1.out",
      });
      gsap.fromTo(
        ".home_works_center .home_works_project_cover div",
        0.85,
        {
          x: "0%",
          ease: "power1.out",
        },
        {
          x: "100%",
          ease: "power1.out",
        }
      );
      gsap.fromTo(
        ".home_works_center .home_works_project_cover img",
        0.85,
        {
          scale: "1.5",
          ease: "power1.out",
        },
        {
          scale: "1",
          ease: "power1.out",
        }
      );
    },
  });

  ScrollTrigger.create({
    trigger: ".home_works_bottom",
    start: "top center",
    once: true,
    // markers: true,
    onEnter: () => {
      gsap.to(".home_works_bottom .home_works_project .number .char", {
        yPercent: 0,
        stagger: 0.05,
        ease: "power1.out",
      });
      gsap.fromTo(
        ".home_works_bottom .home_works_project_cover div",
        0.85,
        {
          x: "0%",
          ease: "power1.out",
        },
        {
          x: "100%",
          ease: "power1.out",
        }
      );
      gsap.fromTo(
        ".home_works_bottom .home_works_project_cover img",
        0.85,
        {
          scale: "1.5",
          ease: "power1.out",
        },
        {
          scale: "1",
          ease: "power1.out",
        }
      );
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
    scrub: true,
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

  ScrollTrigger.create({
    trigger: ".connect",
    start: "top center",
    once: true,
    // markers: true,
    // scrub: true,
    onEnter: () => {
      gsap.to(".char", {
        yPercent: 0,
        ease: "power1.out",
        // stagger: 0.025,
      });
    },
  });
};

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

// about page

// cursor

const mouse = document.querySelector(".cursor");
function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

window.addEventListener("mousemove", cursor);

// page transitions
barba.init({
  views: [
    {
      namespace: "home",
      beforeEnter() {
        animateHome();
      },
      beforeLeave() {},
    },
    {
      namespace: "about",
      beforeEnter() {
        const clientLogos = document.querySelector(".about_clients_logos");

        const logos = [
          "/assets/images/airbnb.png",
          "/assets/images/amazon.png",
          "/assets/images/fedex.png",
          "/assets/images/microsoft.png",
          "/assets/images/google.png",
          "/assets/images/ola.png",
        ];

        // append client logos
        logos.forEach((logo) => {
          const img = document.createElement("img");
          img.src = logo;
          clientLogos.appendChild(img);
          // console.log(img);
        });
      },
      beforeLeave() {},
    },
  ],
  transitions: [
    {
      leave() {
        let done = this.async();
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.fromTo(".page", 0.75, { y: "-100%" }, { y: "0%" });
        tl.fromTo(
          ".page_content .word span",
          0.75,
          { y: "100%" },
          { y: "0%", stagger: 0.15, onComplete: done }
          // "-0.25"
        );
        // document.body.style.position = "fixed";s
      },
      enter() {
        window.scrollTo(0, 0);
        let done = this.async();
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.fromTo(
          ".page_content .word span",
          { y: "0%" },
          { y: "-100%", stagger: 0.15, ease: "power1.inOut", delay: 0.25 }
        );
        tl.fromTo(".page", 0.75, { y: "0%" }, { y: "100%", onComplete: done });
        // document.body.style.position = "";
      },
    },
  ],
});
