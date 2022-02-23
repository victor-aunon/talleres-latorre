import "../css/normalize.css";
import "../css/styles.scss";

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
