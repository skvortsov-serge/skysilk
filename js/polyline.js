;(function(){
	function Polyline(el){
		// svg elements positioning
		this.el = el;
		this.animating = false;
		this.polyline = this.el.querySelector('path');
		this.circles = this.el.querySelectorAll('circle');
		this.labels = this.el.querySelectorAll('.icon-description');

		window.addEventListener('resize', this.positionPolyline.bind(this));
		window.addEventListener('scroll', this.onScroll.bind(this));
		this.positionPolyline();

		this.clearPolyline();
		this.onScroll();
	};

	Polyline.prototype = {
		constructor: Polyline,
		onScroll: function(){
			var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			// console.log('scrollTop', document.body.scrollTop + window.innerHeight, 'el bottom', this.el.offsetTop + this.el.offsetHeight);
			if (!this.animating) {
				if (bodyScrollTop + window.innerHeight > this.el.offsetTop + this.el.offsetHeight) {
					// console.log('inside if');
					this.animate();
					this.el.addEventListener('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', this.animateEnd.bind(this));

					window.removeEventListener('scroll', this.onScroll.bind(this));
				};
			};
		},
		animate: function(){
			this.animating = true;

			this.clearPolyline();
			// Define our transition
			this.polyline.style.transition = 
			this.polyline.style.msTransition = 
			this.polyline.style.MozTransition = 
			this.polyline.style.WebkitTransition = 'stroke-dashoffset 3s ease-in-out';
			// Go!
			this.polyline.style.strokeDashoffset = '0';
		},
		animateEnd: function(){
			this.animating = false;
			this.el.removeEventListener('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', this.animateEnd.bind(this));
		},
		clearPolyline: function(){
			this.length = this.polyline.getTotalLength();
			this.polyline.style.transition = 
			this.polyline.style.msTransition = 
			this.polyline.style.MozTransition = 
			this.polyline.style.WebkitTransition = 'none';

			this.polyline.style.strokeDasharray = this.length + ' ' + this.length;
			this.polyline.style.strokeDashoffset = this.length;

			this.polyline.getBoundingClientRect();
		},
		positionPolyline: function(){
			var points = this.polyline.getAttribute('d').toString().split(' L ');
			// console.log('points', points);
			var width = window.innerWidth,
				length = this.polyline.getTotalLength(),

				point0 = points[0],
				point1Y = points[1].split(' ')[1],
				point2Y = points[2].split(' ')[1],
				point3Y = points[3].split(' ')[1],
				point4Y = points[4].split(' ')[1],
				point5Y = points[5].split(' ')[1],
				xCenters = [],
				self = this;

			this.polyline.style.strokeDasharray = length + ' ' + length;
			this.polyline.style.strokeDashoffset = '0';

			[].forEach.call(this.labels, function(el, i){
				var centerX = el.getBoundingClientRect().left + document.body.scrollLeft + el.offsetWidth / 2;
				xCenters.push(centerX);
				self.circles[i].setAttribute('cx', centerX);
			});

			this.polyline.setAttribute('d', [
				point0,
				'L ' + xCenters[0] + ' ' + point1Y,
				'L ' + xCenters[1] + ' ' + point2Y,
				'L ' + xCenters[2] + ' ' + point3Y,
				'L ' + xCenters[3] + ' ' + point4Y,
				'L ' + width 		+ ' ' + point5Y].join(' ') );
		}
	};

	[].forEach.call(document.querySelectorAll('[data-polyline]'), function(el){
		new Polyline(el);
	});
})();