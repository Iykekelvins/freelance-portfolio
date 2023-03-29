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

links.forEach((link) => {
  link.addEventListener("click", (e) => e.preventDefault());
});

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
let contactTl;

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

const animateHero = () => {
  heroTl = gsap.timeline({
    defaults: {
      ease: "Expo.inOut",
    },
  });

  heroTl.to(
    ".home_hero_content h1 .char",
    // {
    //   y: "100%",
    // },
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
};

const getHomepageInfo = () => {
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

  const homeProjects = document.querySelectorAll(".home_works_project");

  homeProjects.forEach((project) => {
    const numberChars = project.querySelectorAll(".number .char");
    const cover = project.querySelector(".home_works_project_cover div");
    const img = project.querySelector(".home_works_project_cover img");
    const info = project.querySelectorAll("h3 .char");
    const text = project.querySelectorAll("p .char");
    ScrollTrigger.create({
      trigger: project,
      start: "top bottom-=200",
      once: true,
      // markers: true,
      onEnter: () => {
        projectTl = gsap.timeline({
          defaults: {
            ease: "power2.out",
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
      },
    });
    ScrollTrigger.create({
      trigger: info,
      start: "top bottom-=100",
      once: true,
      // markers: true,
      onEnter: () => {
        gsap.to(
          [info, text],
          {
            y: 0,
            stagger: 0.05,
          }
          // "-=0.5"
        );
      },
    });
  });
};
const getAboutPageInfo = () => {
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

  aboutTl = gsap.timeline({
    defaults: {
      ease: "power2.out",
    },
  });

  aboutTl.fromTo(
    ".about_header h2 .char",
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

  logos.forEach((logo) => {
    const img = document.createElement("img");
    img.src = logo;
    clientLogos.appendChild(img);
    // console.log(img);
  });

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
};
const getContactPageInfo = () => {
  contactTl = gsap.timeline({
    defaults: {
      ease: "power2.out",
    },
  });

  contactTl.fromTo(
    ".contact_header h2 .char",
    {
      y: "100%",
    },
    {
      y: "0",
    }
  );
  contactTl.fromTo(
    [".contact_header_left_cover a, .contact_header_left_cover svg"],
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
};

// menu animations
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

const menuIn = () => {
  document.body.style.position = "fixed";
  const menuTl = gsap.timeline({
    defaults: {
      ease: "power2.out",
      // oncom
    },
  });

  // menuTl.to([".navbar h2, .navbar h4, .navbar .menu-btn"], {
  //   opacity: 0,
  // });

  menuTl.to(".nav-menu", {
    clipPath: "circle(170% at 100% -10%)",
    pointerEvents: "all",
    duration: 1,
  });

  menuTl.to(
    ".nav-menu .link-cover",
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(2)",
    },
    "-=0.35"
  );

  menuTl.to(".close-btn .line-1", {
    transform: "rotate(45deg) translateX(0%)",
    opacity: 1,
  });

  menuTl.to(
    ".close-btn .line-2",
    {
      transform: "rotate(-45deg) translateX(0%)",
      opacity: 1,
    },
    "-=0.5"
  );
};

const menuOut = () => {
  document.body.style.position = "";
  const menuTl = gsap.timeline({
    defaults: {
      // ease: "power2.out",
    },
  });
  menuTl.to(".nav-menu .link-cover", {
    y: 100,
    stagger: 0.2,
    duration: 0.8,
    ease: "back.in(2)",
    opacity: 0,
  });

  menuTl.to(".close-btn .line-1", {
    transform: "rotate(45deg) translateX(-100%)",
    opacity: 0,
  });

  menuTl.to(
    ".close-btn .line-2",
    {
      transform: "rotate(-45deg) translateX(100%)",
      opacity: 0,
    },
    "-=0.5"
  );

  menuTl.to(".nav-menu", {
    clipPath: "circle(50px at 100% -10%)",
    duration: 1,
  });

  // menuTl.to([".navbar h2, .navbar h4, .navbar .menu-btn"], {
  //   opacity: 1,
  // });
};

menuBtn.addEventListener("click", menuIn);
closeBtn.addEventListener("click", menuOut);

const menuLinks = document.querySelectorAll(".nav-menu li a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.style.position = "";
    // menuOut;
  });
});

barba.init({
  views: [
    {
      namespace: "home",
      beforeEnter() {
        getHomepageInfo();
        animateHero();
      },
    },
    {
      namespace: "about",
      beforeEnter() {
        Splitting();
        getAboutPageInfo();
      },
    },
    {
      namespace: "contact",
      beforeEnter() {
        Splitting();
        getContactPageInfo();
      },
    },
  ],
  transitions: [
    {
      leave(data) {
        const done = this.async();

        const tl = gsap.timeline({
          defaults: {
            ease: "power2.out",
          },
        });

        // tl.fromTo(data.current.container, 0.75, { opacity: 1 }, { opacity: 0 });
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
            ease: "power2.out",
            onComplete: done,
          }
        );
        document.body.style.position = "";
        setTimeout(() => {
          menuOut();
        }, 100);
      },
      enter(data) {
        window.scrollTo(0, 0);

        const done = this.async();

        const tl = gsap.timeline({
          defaults: {
            ease: "power2.out",
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
            ease: "power2.out",
            // onComplete: done,
          }
        );
        tl.fromTo(".page", 0.75, { y: "0%" }, { y: "100%" });
        // tl.fromTo(
        //   data.next.container,
        //   0.75,
        //   { opacity: 0 },
        //   {
        //     opacity: 1,
        //   }
        // );
        done();
        ScrollTrigger.refresh(true);
        heroTl.delay(2);
        aboutTl.delay(2);
        contactTl.delay(2);
      },
    },
  ],
});
