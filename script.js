const button = document.getElementById("button");
const icon = document.getElementById("theme-icon");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.classList.remove("bi-moon");
    icon.classList.add("bi-sun");
  } else if (!document.body.classList.contains("dark")) {
    icon.classList.remove("bi-sun");
    icon.classList.add("bi-moon");
  }
});
