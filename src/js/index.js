import "../css/normalize.css";
import "../css/styles.scss";
import "../css/wap_styles.css";
import "../css/insta_styles.css";
import "./wapMain.js";
import "./cookie_consent.js";

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

  // Image comparison
  const sliders = document.querySelectorAll(".comparison-img-slider");
  if (sliders.length > 0) {
    const images = document.querySelectorAll(".comparison-img-overlay");
    const tooltips = document.querySelectorAll(".comparison-tooltip");
    const tooltipObservers = [];
    // Put slider and images at 50%
    for (let i = 0; i < sliders.length; i++) {
      images[
        i
      ].style.clipPath = `polygon(0 0,${sliders[i].value}% 0,${sliders[i].value}% 100%, 0 100%)`;

      // Set function when moving the slider
      sliders[i].oninput = () => {
        images[
          i
        ].style.clipPath = `polygon(0 0,${sliders[i].value}% 0,${sliders[i].value}% 100%, 0 100%)`;
      };

      // Hide the tooltips when they are visible
      const observer = new window.IntersectionObserver(
        (entry) => {
          if (entry[0].isIntersecting) {
            setTimeout(() => {
              tooltips[i].style.animation =
                "element_disappear 1.5s linear forwards";
            }, 1800);
          } else {
            tooltips[i].style.animation = "pulse 2s infinite";
          }
        },
        {
          threshold: 1,
          root: null,
          rootMargin: "0px 0px 50px 0px",
        }
      );
      observer.observe(tooltips[i]);
      tooltipObservers.push(observer);
    }
  }

  // Replace copyright year
  const copyYear = document.querySelector("#copyright-year");
  const now = new Date();
  copyYear.textContent = now.getFullYear();
});
