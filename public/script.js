console.log("connected to script.js");

const header = document.querySelector ("header");

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 0);
});
