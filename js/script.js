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

	$('.owl-carousel').owlCarousel({
	    loop: false,
	    items: 10,
	    nav: true,
	    pagination: false,
	    dots: false,
	    responsive:{
	        0:{
	            items: 1
	        },
	        480:{
	            items: 2
	        },
	        768:{
	            items: 3
	        },
	        1000:{
	            items: 4
	        }
	    }
	});
	
});
