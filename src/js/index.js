import "../css/normalize.css";
import "../css/styles.scss";

const pages = {
  index: "index-link",
  galeria: "gallery-link",
  servicios: "services-button",
};

// Display services links in the navigation bar
const servicesBtn = document.querySelector("#services-button");
servicesBtn.addEventListener("click", () => {
  document.querySelector("#services-dropdown").classList.toggle("show");
});

window.onclick = (event) => {
  if (event.target.id !== "services-button") {
    const dropdown = document.querySelector("#services-dropdown");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
};

// Events when the document is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Insert a symbol before the link of the current page
  for (const page in pages) {
    if (window.location.pathname.includes(page)) {
      const navLink = document.querySelector(`#${pages[page]}`);
      navLink.classList.toggle("current");
    } else if (window.location.pathname === "/") {
      const navLink = document.querySelector(`#${pages.index}`);
      navLink.classList.toggle("current");
    }
  }
  // Animating cover image
  const coverImage = document.querySelector("#home-image");

  if (coverImage) {
    coverImage.style.animationName = "element_appear";
    coverImage.style.opacity = 1;

    // Appear title after 1 second
    const coverTitle = document.querySelector("#home-title");
    setTimeout(() => {
      coverTitle.style.display = "block";
      coverTitle.style.animationName = "element_appear";
    }, 1000);

    // Appear subtitle after 1.6 second
    const coverSubtitle = document.querySelector("#home-subtitle");
    setTimeout(() => {
      coverSubtitle.style.display = "block";
      coverSubtitle.style.animationName = "element_appear";
    }, 1600);
  }
});
