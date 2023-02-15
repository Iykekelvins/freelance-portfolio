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

  span.innerText = `0${projects.findIndex((m) => m === element) + 1}`;
  img.src = element.img;
  title.innerText = element.title;
  info.innerText = element.info;

  project.appendChild(span);
  project.appendChild(img);
  project.appendChild(title);
  project.appendChild(info);

  project.classList.add("home_works_project");

  return project;
};

projects.slice(0, 3).forEach((element) => {
  const project = createWorkElement(element);
  topImages.appendChild(project);
});

projects.slice(3, 5).forEach((element) => {
  const project = createWorkElement(element);
  centerImages.appendChild(project);
});

projects.slice(5, 7).forEach((element) => {
  const project = createWorkElement(element);
  bottomImages.appendChild(project);
});
