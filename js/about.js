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
