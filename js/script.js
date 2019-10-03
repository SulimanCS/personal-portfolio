$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 7500,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Computer Scientist.", 
		"Developer.", "2020 Graduate."],
		typeSpeed: 40,
		loop: true,
		startDelay: 750,
		showCursor: false
	});
	
});
