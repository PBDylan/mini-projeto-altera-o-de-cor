const button = document.querySelector("button");

button.addEventListener("click", () => {
  document.body.style.backgroundColor =
    "#" + Math.random().toString(16).slice(2, 8);
});
