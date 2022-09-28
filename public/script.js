import styled from "daisyui/dist/styled";
import { css } from "style.css";

console.log ("Connected to script.js");



const nav = document.querySelector(".nav");
window.onscroll = () => {
  this.scrolly = window.pageYOffset;
  if (this.scrolly > 20) {
    nav.classList.add("tw-ring-color");
    nav.classList.remove("nav-transparent");
  }
  else {
    nav.classList.remove("nav-colored");
    nav.classList.add("nav-transparent");
  }

} 
