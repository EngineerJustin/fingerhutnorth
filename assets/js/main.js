/*
	Paradigm Shift by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

gsap.registerPlugin(ScrollTrigger);

(function($) {


	gsap.utils.toArray('.big').forEach(section => {
		gsap.from(section, {
			opacity: 0,
			duration: 0.5,
			xPercent: 10,
			ease: 'none',
			scrollTrigger: {
				trigger: section,
				start: 'top-=200 top+=250',
				end: 'bottom bottom',
				toggleActions: 'play none none reverse',
				markers: false
			}
		})
	})

	gsap.from("#five-a", {
		yPercent: -40,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#five-a',
			scrub: true,
			end: '-=20%'
		} 
	})

	gsap.from("#five-b", {
		xPercent: 40,
		opacity: 0.15,
		ease: 'none',
		scrollTrigger: {
			trigger: '#five-b',
			scrub: true,
			end: '-=45%'
		}
	})

	gsap.from("#five-c", {
		xPercent: -30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#five-c',
			scrub: true,
			end: '-=55%'
		} 
	})

	gsap.from("#five-d", {
		yPercent: 30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#five-d',
			scrub: true,
			end: '-=65%'
		} 
	})

	gsap.from("#three-b", {
		xPercent: -30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#three-b',
			scrub: true,
			end: '-=45%'
		} 
	})

	gsap.from("#three-c", {
		xPercent: 30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#three-c',
			scrub: true,
			end: '-=45%'
		} 
	})

	gsap.from("#rickybaker", {
		yPercent: -40,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#rickybaker',
			scrub: true,
			end: '-=35%'
		} 
	})
	
	gsap.from("#seven-b", {
		xPercent: -30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#seven-b',
			scrub: true,
			end: '-=55%'
		} 
	})

	gsap.from("#seven-c", {
		xPercent: 30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#seven-c',
			scrub: true,
			end: '-=45%'
		} 
	})

	gsap.from("#eyes", {
		yPercent: -30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#eyes',
			scrub: true,
			end: '-=45%'
		} 
	})

	gsap.from("#nine-b", {
		xPercent: -30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#nine-b',
			scrub: true,
			end: '-=45%'
		} 
	})

	gsap.from("#nine-d", {
		xPercent: 30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#nine-d',
			scrub: true,
			end: '-=45%'
		} 
	})

	gsap.from("#cuckoo", {
		yPercent: 30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#cuckoo',
			scrub: true,
			end: '-=55%'
		} 
	})

	gsap.from("#eleven-b", {
		xPercent: -30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#eleven-b',
			scrub: true,
			end: '-=10%'
		} 
	})

	gsap.from("#eleven-c", {
		xPercent: 30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#eleven-c',
			scrub: true,
			end: '-=10%'
		} 
	})

	gsap.from("#braids", {
		xPercent: 30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#braids',
			scrub: true,
			end: '-=35%'
		} 
	})

	gsap.from("#mow", {
		xPercent: 30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#mow',
			scrub: true,
			end: '-=35%'
		} 
	})

	gsap.from("#fourteen", {
		xPercent: 30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#fourteen',
			scrub: true,
			end: '-=35%'
		} 
	})

	gsap.from("#helmet", {
		xPercent: 30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#helmet',
			scrub: true,
			end: '-=35%'
		} 
	})

	gsap.from("#flash", {
		xPercent: 30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#flash',
			scrub: true,
			end: '-=35%'
		} 
	})

	gsap.from("#sixteen", {
		xPercent: 30,
		ease: 'none',
		opacity: 0.15,
		scrollTrigger: {
			trigger: '#sixteen',
			scrub: true,
			end: '-=35%'
		} 
	})

	// gsap.to("#fifth", {
	// 	autoAlpha: 0,
	// 	ease: 'none',
	// 	scrollTrigger: {
	// 		start: 'top top+=5%',
	// 		end: 'bottom bottom',
	// 		trigger: '#fifth',
	// 		pin: true,
	// 		scrub: true,
	// 		markers: true
	// 	}
	// })

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Hack: Enable IE workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');

	// Scrolly.
		$('.scrolly')
			.scrolly({
				offset: 100
			});

	// Polyfill: Object fit.
		if (!browser.canUse('object-fit')) {

			$('.image[data-position]').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', $this.data('position'))
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

			$('.gallery > a').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', 'center')
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

		}

	// Gallery.
		$('.gallery')
			.on('click', 'a', function(event) {

				var $a = $(this),
					$gallery = $a.parents('.gallery'),
					$modal = $gallery.children('.modal'),
					$modalImg = $modal.find('img'),
					href = $a.attr('href');

				// Not an image? Bail.
					if (!href.match(/\.(jpg|gif|png|mp4)$/))
						return;

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Lock.
					$modal[0]._locked = true;

				// Set src.
					$modalImg.attr('src', href);

				// Set visible.
					$modal.addClass('visible');

				// Focus.
					$modal.focus();

				// Delay.
					setTimeout(function() {

						// Unlock.
							$modal[0]._locked = false;

					}, 600);

			})
			.on('click', '.modal', function(event) {

				var $modal = $(this),
					$modalImg = $modal.find('img');

				// Locked? Bail.
					if ($modal[0]._locked)
						return;

				// Already hidden? Bail.
					if (!$modal.hasClass('visible'))
						return;

				// Stop propagation.
					event.stopPropagation();

				// Lock.
					$modal[0]._locked = true;

				// Clear visible, loaded.
					$modal
						.removeClass('loaded')

				// Delay.
					setTimeout(function() {

						$modal
							.removeClass('visible')

						setTimeout(function() {

							// Clear src.
								$modalImg.attr('src', '');

							// Unlock.
								$modal[0]._locked = false;

							// Focus.
								$body.focus();

						}, 475);

					}, 125);

			})
			.on('keypress', '.modal', function(event) {

				var $modal = $(this);

				// Escape? Hide modal.
					if (event.keyCode == 27)
						$modal.trigger('click');

			})
			.on('mouseup mousedown mousemove', '.modal', function(event) {

				// Stop propagation.
					event.stopPropagation();

			})
			.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
				.find('img')
					.on('load', function(event) {

						var $modalImg = $(this),
							$modal = $modalImg.parents('.modal');

						setTimeout(function() {

							// No longer visible? Bail.
								if (!$modal.hasClass('visible'))
									return;

							// Set loaded.
								$modal.addClass('loaded');

						}, 275);

					});

})(jQuery);