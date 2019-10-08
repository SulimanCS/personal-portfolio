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


    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    //console.log(skillsTopOffset)

	var countUpFinished = false;	
    $(window).scroll(function() {

    	//console.log(window.pageYOffset)
    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
    
		    $('.chart').easyPieChart({
		            //your options goes here
		            easing: 'easeInOut',
		            barColor: '#fff',
		            trackColor: '#333',
		            scaleColor: false,
		            lineWidth: 6,
		            size: 152,
		            lineCap: 'round',
		            onStep: function(from, to, percent) {
		            	$(this.el).find('.percent').text(Math.round(percent));
		            }
		    });
    	}


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {

			$(".counterPlus").hide();
			$(".counterPlus").fadeIn({
				duration: 1300,
			});
		    $(".counter").each(function() {
		    	var element = $(this);
		    	var endVal = parseInt(element.text());

				element.countup(endVal);

		    });
			countUpFinished = true;
		}

    });



});
