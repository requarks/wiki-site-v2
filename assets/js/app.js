"use strict";

jQuery( document ).ready(function( $ ) {

	// ====================================
	// Scroll
	// ====================================

	$('a').smoothScroll({
		speed: 400,
		offset: -70
	});

	// ====================================
	// Header
	// ====================================

	$('h1').on('click', (ev) => {
		window.location.assign('/');
	});

});