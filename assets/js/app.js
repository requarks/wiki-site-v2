"use strict";

jQuery( document ).ready(function( $ ) {

	// ====================================
	// Scroll
	// ====================================

	$('a').smoothScroll({ speed: 'auto' });
	$('.header-learnmore').on('click', (ev) => {
		$.smoothScroll({ scrollTarget: '#features', speed: 800 });
	});

	// ====================================
	// Header
	// ====================================

	$('h1').on('click', (ev) => {
		window.location.assign('/');
	});

});