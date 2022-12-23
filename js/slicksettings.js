$(".team-carousel").slick({
	autoplay: true,
	mobileFirst: true,
	arrows: false,
	autoplaySpeed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 760,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
	],
});
