$(document).ready (function() {
	$(".arrow-inner").click(function(){
		$('html, body').animate({
                scrollTop: $("#why-skysilk").offset().top
        }, 1000);
	});

	$(window).on('resize', function () {

	    if ($(window).width() > 768) {
	       
		    $(window).scroll(function(){

	       		if ($(window).scrollTop() < 200) {
	            	$('.navbar').fadeIn(300);
	        } else {

	            $('.navbar').fadeOut(300);

	        	}
    	});

	    } else {
	        
	    	$('.navbar').css("position", "static");

	    }

	});


	$(".burger-nav").on("click", function() {
		$(".menu-list").toggleClass("hidden");

	});

	$('.arrow-left').click(function() {

		var currentCloud = $('.active-cloud');
		var prevCloud = currentCloud.prev();
		var currentDot = $('.active');
		var prevDot = currentDot.prev();

		if (prevCloud.length == 0) {
			prevCloud = $('.cloud').last();
			prevDot = $('.carousel-indicators li').last();
		}


		currentCloud.removeClass('active-cloud');
		prevCloud.addClass('active-cloud');

		currentDot.removeClass('active');
		prevDot.addClass('active');
	});

	$('.arrow-right').click(function() {

		var currentCloud = $('.active-cloud');
		var nextCloud = currentCloud.next();
		var currentDot = $('.active');
		var nextDot = currentDot.next();

		if (nextCloud.length == 0) {
			nextCloud = $('.cloud').first();
			nextDot = $('.carousel-indicators li').first();
		}

		currentCloud.removeClass('active-cloud');
		nextCloud.addClass('active-cloud');

		currentDot.removeClass('active');
		nextDot.addClass('active');

	});

	$('#scroll-top').click(function() {

		$('html, body').animate({
			scrollTop: 0,

		}, 350);

	});

	if ($(window).scrollTop() > 200) {
            $('#scroll-top').fadeIn(300);
        } else {
            $('#scroll-top').fadeOut(300);
        };

});