
// import { reviews } from "./data";
import gsap from "gsap";
import Swiper from "swiper";

const bar = document.querySelector(".loading__bar--inner");
const counter_num = document.querySelector(".loading__counter--number");
// c equals your loading percentage value
let c = 0;


// bar interval function
let barInterval = setInterval(() => {
	bar.style.width = c + "%";

	counter_num.innerText = c + "%";
	c++;
	if (c === 101) {
		clearInterval(barInterval);
		// increment loading bar
		gsap.to(".loading__bar", {
			duration: 5,
			rotate: "90deg",
			left: "1000%",
		});
		//increment loading number
		gsap.to(".loading__text, .loading__counter", {
			duration: 0.5,
			opacity: 0,
		});
		// make the loading box into a circle 
		gsap.to(".loading__box", {
			duration: 1,
			height: "500px",
			borderRadius: "50%",
		});
		// load and rotate loading image
		gsap.to(".loading__svg", {
			duration: 10,
			opacity: 1,
			rotate: "360deg",
		});
		//get rid of loading box 
		gsap.to(".loading__box", {
			delay: 2,
			border: "none",
		});
		// turn the background transparent
		gsap.to(".loading", {
			delay: 2,
			duration: 2,
			zIndex: 0,
			background: "transparent",
			opacity: 0.5,
		});
		// continue to rotate loader after backgroung is transparent
		gsap.to(".loading__svg", {
			delay: 2,
			duration: 100,
			rotate: "360deg",
		});
	}
}, 20);
 var swiper = new Swiper(".swiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
 });