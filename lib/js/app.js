var hamburgerMenu = document.querySelector(".hamburger-menu");
var container = document.querySelector(".container");

hamburgerMenu.addEventListener('click',() => {
	container.classList.toggle("active");
	
})