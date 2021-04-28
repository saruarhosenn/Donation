// HERO SLIDER ==================
var swiper = new Swiper('.swiper__container-1', {
	spaceBetween: 0,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
});


// PROJECT SLIDER ===============
var swiper = new Swiper('.swiper__container-2', {
	slidesPerView: 3,
	spaceBetween: 20,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-project-next',
		prevEl: '.swiper-project-prev',
	},
	breakpoints: {
		576: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 6,
			spaceBetween: 20,
		},
	}

});


// CURRENT CAMPAIGNS SLIDER ===============
var swiper = new Swiper('.swiper__container-3', {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-current-next',
		prevEl: '.swiper-current-prev',
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	}
});


// OUR ACHIVEMENT SLIDER ===============
var swiper = new Swiper('.swiper__container-4', {
	slidesPerView: 3,
	spaceBetween: 20,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-achivement-next',
		prevEl: '.swiper-achivement-prev',
	},

});



// SIDEBAR MENU SHOW & HIDE ==================
const mainMenu = document.querySelector('.main__menu');
const menuOpen = document.querySelector('.menu__show__icon');
const menuClose = document.querySelector('.menu__close__icon');

// MENU SHOW
menuOpen.onclick = function () {
	mainMenu.classList.add('active');
}

// MENU HIDE
menuClose.onclick = function () {
	mainMenu.classList.remove('active');
}

// MOBAIL MENU DROPDOWN =========================
const dropDownHover = document.querySelectorAll('.dropdown__hover__link');

dropDownHover.forEach(function (singleItem) {
	singleItem.classList.remove("active")
	singleItem.classList.add("active")
	singleItem.addEventListener('click', function () {
		let dropdownMenu = this.nextElementSibling;
		// console.log(dmenu);
		if (dropdownMenu.style.maxHeight) {
			dropdownMenu.style.maxHeight = null;
			dropdownMenu.style.padding = null;
		} else {
			dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
			dropdownMenu.style.padding = '20px';
		}
	})
})


// MIXITUP =========================
var containerEl = document.querySelector('.mix-filter');
var mixer = mixitup(containerEl);

// FOOTER ACCORDION ====================
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
	const itemToggle = this.getAttribute('aria-expanded');

	for (i = 0; i < items.length; i++) {
		items[i].setAttribute('aria-expanded', 'false');
	}

	if (itemToggle == 'false') {
		this.setAttribute('aria-expanded', 'true');
	}
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



// BACK TO TOP BUTTON =================
var mybutton = document.getElementById("up__btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.opacity = "1";
	} else {
		mybutton.style.opacity = "0";
	}
}
mybutton.addEventListener("click", topFunction);
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
