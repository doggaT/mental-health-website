'use strict';

/* Navbar beginning */

// Add active class to active navbar link
let navLinks = document.getElementById('navbar-links');
let links = navLinks.getElementsByClassName('nav-navbar__link-item');

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener('click', function () {
		let active = document.getElementsByClassName('active');

		if (active.length > 0) {
			active[0].className = active[0].className.replace(' active', '');
		}

		this.className += ' active';
	});
}

// Open and close side navbar
let sidebar = document.getElementById('sidebar');
let overlay = document.getElementsByClassName('overlay-content');

function toggleNavbar() {
	let name = 'hide-overlay';

	if (sidebar.style.width !== '100%') {
		overlay.className += ' ' + name;
		sidebar.style.width = '100%';
	} else {
		overlay.className -= ' ' + name;
		sidebar.style.width = '0%';
	}
}

document.onclick = function (e) {
	if (e.target.id === 'burger-menu' || e.target.tagName === 'A') {
		sidebar.style.width = '0%';
	}
};

/* Navbar end */

/* Form beginning */
let form = document.getElementById('contact-form');
let userName = document.getElementById('name').value;
let userEmail = document.getElementById('email').value;
let userPhone = document.getElementById('phone').value;
let userMessage = document.getElementById('message').innerHTML;
let formBtn = document.getElementById('form-button');

form.addEventListener('submit', function () {
	// do something
});
/* Form end */
