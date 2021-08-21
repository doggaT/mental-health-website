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
// Get the imput values from the form
let form = document.getElementById('contact-form');
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userPhone = document.getElementById('phone');
let userMessage = document.getElementById('message');

form.addEventListener('submit', e => {
	// Prevents the page from refreshing on submiting form
	e.preventDefault();

	checkInputs();

	// Add form information into an array to be sent to the backend
	let formData = [{ username: userName, message: userMessage, email: userEmail, phone: userPhone }];
});

function checkInputs() {
	// Removes whitespaces from the input values
	const nameValue = userName.value.trim();
	const emailValue = userEmail.value.trim();
	const phoneValue = userPhone.value.trim();
	const messageValue = userMessage.value.trim();

	if (nameValue === '') {
		setErrorFor(userName, 'Please enter your name');
	} else {
		setSuccessFor(userName);
	}

	if (emailValue === '') {
		setErrorFor(userEmail, 'Please enter your email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(userEmail, 'Please enter a valid email');
	} else {
		setSuccessFor(userEmail);
	}

	if (phoneValue === '') {
		setErrorFor(userPhone, 'Please enter your phone number');
	} else if (!isPhone(phoneValue)) {
		setErrorFor(userPhone, 'Please enter a valid phone number');
	} else {
		setSuccessFor(userPhone);
	}

	if (messageValue === '') {
		setErrorFor(userMessage, 'Please enter your message');
	} else {
		setSuccessFor(userMessage);
	}
}

// Set the error status and display the tooltip
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

// Set the success status
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// Check if the email is valid
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}

// Check if the phone has only numbers with a length of 9 or 10
function isPhone(phone) {
	return /^([0-9]){8,9}$/.test(Number(phone));
}

/* Form end */
