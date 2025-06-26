const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Swap the toggle icon
  if (body.classList.contains("dark-mode")) {
    toggle.src = "assets/images/Group.png";
  } else {
    toggle.src = "assets/images/Moon.png";
  }
});
