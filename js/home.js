const topProjects = document.querySelector(".home_works_top");
const centerProjects = document.querySelector(".home_works_center");
const bottomProjects = document.querySelector(".home_works_bottom");

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

const heroTl = gsap.timeline({
  defaults: {
    ease: "power2.inOut",
  },
});

heroTl.to(".home_hero_content h1 .char", {
  y: 0,
  stagger: 0.1,
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
  trigger: ".home_hero_content_info",
  start: "top center",
  once: true,
  // markers: true,
  onEnter: () => {
    const heroTl = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
      },
    });
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
    start: "top center",
    once: true,
    // markers: true,
    onEnter: () => {
      const projectTl = gsap.timeline({
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
