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

let heroTl;
let projectTl;
let aboutTl;

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

function animateHero() {
  heroTl = gsap.timeline({
    defaults: {
      ease: "power2.easeInOut",
    },
  });

  heroTl.fromTo(
    ".home_hero_content h1 .char",
    {
      y: "100%",
    },
    {
      y: 0,
      stagger: 0.1,
      opacity: 1,
    }
  );

  heroTl.fromTo(
    [".home_hero_skills .char", ".home_hero_socials .char"],
    {
      y: "100%",
    },
    {
      y: "0",
    }
  );
  ScrollTrigger.create({
    trigger: ".home_hero_content_info",
    start: "top center",
    once: true,
    // markers: true,
    onEnter: () => {
      heroTl.to(".home_hero_content_info .char", {
        y: 0,
      });
      heroTl.fromTo(
        ".home_hero_content_img  div",

        {
          x: "0%",
        },
        {
          x: "100%",
        },
        "-=0.5"
      );
      heroTl.fromTo(
        ".home_hero_content_img  img",

        {
          scale: "1.5",
        },
        {
          scale: "1",
          ease: "power1.out",
        },
        "-=0.5"
      );
    },
  });
}

function getHomepageInfo() {
  const topProjects = document.querySelector(".home_works_top");
  const centerProjects = document.querySelector(".home_works_center");
  const bottomProjects = document.querySelector(".home_works_bottom");
  const year = document.querySelector(".year");
  year.dataset.splitting = "chars";

  year.innerText = new Date().getFullYear();

  projects.slice(0, 3).forEach((element) => {
    const project = createWorkElement(element);

    topProjects.appendChild(project);
  });

  projects.slice(3, 5).forEach((element) => {
    const project = createWorkElement(element);
    centerProjects.appendChild(project);
  });

  projects.slice(5, 7).forEach((element) => {
    const project = createWorkElement(element);
    bottomProjects.appendChild(project);
    Splitting();
  });

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

  const homeProjects = document.querySelectorAll(".home_works_project");

  homeProjects.forEach((project) => {
    const numberChars = project.querySelectorAll(".number .char");
    const cover = project.querySelector(".home_works_project_cover div");
    const img = project.querySelector(".home_works_project_cover img");
    const info = project.querySelectorAll("h3 .char");
    const text = project.querySelectorAll("p .char");
    ScrollTrigger.create({
      trigger: project,
      start: "top center",
      once: true,
      // markers: true,
      onEnter: () => {
        projectTl = gsap.timeline({
          defaults: {
            ease: "power2.inOut",
          },
        });

        projectTl.to(numberChars, {
          y: 0,
          stagger: 0.05,
        });
        projectTl.fromTo(
          cover,
          0.75,
          {
            x: "0%",
          },
          {
            x: "100%",
          },
          "-=0.5"
        );
        projectTl.fromTo(
          img,
          0.75,
          {
            scale: "1.5",
          },
          {
            scale: "1",
          },
          "-=0.75"
        );
        projectTl.to(
          [info, text],
          {
            y: 0,
            stagger: 0.05,
          },
          "-=0.5"
        );
      },
    });
  });
}

function getAboutPageInfo() {
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

  aboutTl = gsap.timeline({
    defaults: {
      ease: "power2.inOut",
    },
  });

  aboutTl.fromTo(
    [".about_header h2 .char"],
    {
      y: "100%",
    },
    {
      y: "0",
    }
  );
  aboutTl.fromTo(
    [".about_header_left_cover a, .about_header_left_cover svg"],
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0",
      opacity: 1,
    },
    "-=0.25"
  );

  const clienLogos = document.querySelectorAll(".about_clients_logos img");

  clienLogos.forEach((logo) => {
    ScrollTrigger.create({
      trigger: logo,
      start: "top bottom-=100px",
      once: true,
      // markers: true,
      onEnter: () => {
        gsap.fromTo(
          logo,
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        );
      },
    });
  });

  ScrollTrigger.create({
    trigger: ".about_profile",
    start: "top bottom-=100px",
    once: true,
    // markers: true,
    onEnter: () => {
      aboutTl.fromTo(
        [".about_profile h4 .char, .about_profile h2 .char"],
        {
          y: "100%",
        },
        {
          y: "0",
        }
      );
    },
  });
}

barba.init({
  views: [
    {
      namespace: "home",
      beforeEnter() {
        getHomepageInfo();
        animateHero();

        ScrollTrigger.create({
          trigger: ".home_works",
          start: "top bottom-=400px",
          once: true,
          // markers: true,
          onEnter: () => {
            gsap.to(".home_works h1 .char", {
              y: 0,
            });
          },
        });
      },
    },
    {
      namespace: "about",
      beforeEnter() {
        Splitting();
        getAboutPageInfo();
      },
      beforeLeave() {},
      afterEnter() {},
    },
  ],
  transitions: [
    {
      leave(data) {
        const done = this.async();

        const tl = gsap.timeline({
          defaults: {
            ease: "power2.inOut",
          },
        });

        tl.fromTo(data.current.container, 0.75, { opacity: 1 }, { opacity: 0 });
        tl.fromTo(".page", 0.75, { y: "-100%" }, { y: "0%" });
        tl.fromTo(
          ".page_content .word span",
          0.75,
          {
            y: "100%",
          },
          {
            y: "0%",
            stagger: 0.15,
            ease: "power2.inOut",
            onComplete: done,
          }
        );
      },
      enter(data) {
        window.scrollTo(0, 0);

        const done = this.async();

        const tl = gsap.timeline({
          defaults: {
            ease: "power2.inOut",
          },
        });

        tl.fromTo(
          ".page_content .word span",
          0.75,
          {
            y: "0%",
          },
          {
            y: "-100%",
            stagger: 0.15,
            ease: "power2.inOut",
            // onComplete: done,
          }
        );
        tl.fromTo(".page", 0.75, { y: "0%" }, { y: "100%" });
        tl.fromTo(
          data.next.container,
          0.75,
          { opacity: 0 },
          {
            opacity: 1,
            // onComplete: () => {
            //   history.go(0);
            //   done;
            // },
          }
        );
        done();
        ScrollTrigger.refresh(true);
        heroTl.delay(2);
        aboutTl.delay(2);
      },
    },
  ],
});
