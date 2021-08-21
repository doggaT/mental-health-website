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

/* Gallery beginning */
let zoomImage = function () {
	let copiedImage = this.cloneNode();
	copiedImage.classList.remove('image-panel__card');

	let box = document.getElementById('image-zoom');
	box.innerHTML = '';
	box.appendChild(copiedImage);

	box = document.getElementById('image-overlay');
	box.classList.add('show');
};

// Attach the clicked image into the container to zoom the image
window.addEventListener('load', function () {
	let images = document.getElementsByClassName('image-panel__img');
	if (images.length > 0) {
		for (let img of images) {
			img.addEventListener('click', zoomImage);
		}
	}

	// Close image zoom
	document.getElementById('image-overlay').addEventListener('click', function () {
		this.classList.remove('show');
	});
});
/* Gallery end */

/* Form beginning */
let form = document.getElementById('contact-form');
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userPhone = document.getElementById('phone');
let userMessage = document.getElementById('message');
let formBtn = document.getElementById('form-button');

//Check if phone is valid
function checkPhone(input) {
	const valid = /^\d+$/;

	if (valid.test(input.trim()) && input.length > 0) {
		showSucces(input);
	} else {
		showError(input, 'Please enter a valid phone number');
	}
}

// Set Error Message
function setError(input) {
	const formGroup = input.parentElement;

	formGroup.className = 'contact-form error';
}

// Set Success Message
function setSuccess(input) {
	const formGroup = input.parentElement;
	formGroup.className = 'contact-form success';
}

// Check Valid Email
function validEmail(email) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function validateForm(form) {
	if (form.name.value.trim() === '') {
		setError(form.name);
		return false;
	} else {
		setSuccess(form.name);
	}

	if (form.email.value.trim() === '' || !validEmail(form.email.value.trim())) {
		setError(form.email);
		return false;
	} else {
		setSuccess(form.email);
	}

	if (form.message.value.trim() === '') {
		setError(form.message);
		return false;
	} else {
		setSuccess(form.message);
	}

	// Add form information into an array
	let formData = [{ username: userName, message: userMessage, email: userEmail, phone: userPhone }];

	return true;
}

form.addEventListener('submit', e => {
	e.preventDefault();
});

/* Form end */
