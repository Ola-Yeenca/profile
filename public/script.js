console.log("connected to script.js");

const header = document.querySelector ("header");

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('fa-bars');
	nav.classList.toggle('fa-xmark')
};

window.onscroll = () => {
	menu.classList.remove('fa-bars');
	nav.classList.remove('fa-xmark')
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.skills,.projects,.contact',{delay:200, origin:'bottom'})
