console.log("connected to script.js");

const header = document.querySelector ("header");

window = addEventListener ("scroll", () => {
  header.classList.toggle ("sticky", window.scrollY > 0);
});

