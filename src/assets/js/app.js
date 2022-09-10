// import { reviews } from "./data";
import gsap from "gsap";
import Swiper from "swiper";
import { reviews } from "./data";
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
	slidesPerView: 2,
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
//  Reviews Swiper
var swiper = new Swiper(".swiper", {
	slidesPerView: 2,
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		850: {
			slidesPerView: 1,
		},
		1400: {
			slidesPerView: 3,
		},
		1900: {
			slidesPerView: 4,
		},
	},
});
// Defining the reviews template space
const swiper_container = document.querySelector(".swiper-wrapper");
reviews.map((review) => {
	let template = `<div class="swiper-slide">

				<div class="review">
					<svg 
						width="100%" 
						height="100%" 
						viewBox="0 0 33 27" 
						fill="none" 
						xmlns="http://www.w3.org/2000/svg">

						<path d="M16,7.9L16,7.9C15.9,3.5,12.3,0,8,0C3.6,0,0,3.6,0,8s3.6,8,8,8c0.9,0,1.7-0.1,2.5-0.4c-0.1,0.1-0.1,0.3-0.2,0.4c-3.2,5.6-9,6.8-10.2,7v4c2.1-0.3,9.7-2,13.7-9C15.9,14.2,16.1,10.4,16,7.9z M33,7.9L33,7.9C32.9,3.5,29.3,0,25,0c-4.4,0-8,3.6-8,8s3.6,8,8,8c0.9,0,1.7-0.1,2.5-0.4c-0.1,0.1-0.1,0.3-0.2,0.4c-3.2,5.6-9,6.8-10.2,7v4c2.1-0.3,9.7-2,13.7-9C32.9,14.2,33.1,10.4,33,7.9z"></path>
					</svg>

					<div class="review__card">
							<div class="review__topborder">
								</div>
							<div class="review__text">
								<span>${review.review.substring(0, 1)} </span>
								${review.review.substring(1, review.review.length)}
							</div>
							<img
							 	src="${review.image}" 
								alt="" 
								class="review__img" 
							/>
							<div class="review__profile">
								<span>${review.name} </span>
								<span>${review.position} </span>
							</div>
					</div>
				</div>
			</div>`;
	swiper_container.innerHTML += template;
});
