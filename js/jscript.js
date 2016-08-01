$(document).ready(function() {
	
	$(".arrow-inner").click(function(){
		$('html, body').animate({
                scrollTop: $("#why-skysilk").offset().top
        }, 1000);
	});

	$(window).on('resize', onResize);

	function onResize(){
		if ($(window).width() > 768) {
	    	$('.navbar').css("position", "fixed");
		    $(window).on('scroll', onScroll);
	    } else {
	    	$('.navbar').fadeIn(300);
		    $(window).off('scroll', onScroll);
	    	$('.navbar').css("position", "static");
	    }
	};

	function onScroll(){
       	if ($(window).scrollTop() < 200) {
       		console.log('scrollTop < 200');
            $('.navbar').fadeIn(300);
        } else {
       		console.log('scrollTop > 200');
            $('.navbar').fadeOut(300);
        }
	}

	onResize();

	$(".burger-nav").on("click", function() {
		$(".menu-list").toggleClass("hidden");

	});

	$('.arrow-left').click(function(event) {
		event.preventDefault();
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

	$('.arrow-right').click(function(event) {
		event.preventDefault();
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

	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 200) {
            $('#scroll-top').fadeIn(300);
        } else {
            $('#scroll-top').fadeOut(300);
        };
	});
});