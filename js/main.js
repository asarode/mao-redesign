$(document).ready(function() {

	var modalIn = function() {
		$("#modal-mask").fadeIn(50);
		$("div#registration-modal").fadeIn(50);
	};

	var modalOut = function() {
		$("#modal-mask").fadeOut(50);
		$("div#registration-modal").fadeOut(50);
	};

	$("a#registration-modal").click(function() {
		modalIn();
	});

	$(".modal-close").click(function() {
		modalOut();
	});

	$("#modal-mask").click(function() {
		modalOut();
	});

	$(".scroll-top").hide();

	var stickyTop = $(".content-wrap").offset().top;

	var popBar = function() {
		var windowTop = $(window).scrollTop();

		if (stickyTop < windowTop) {
			$(".scroll-top").fadeIn(500);
		} else {
			$(".scroll-top").fadeOut(250);
		}
	};

	popBar();

	$(window).scroll(function() {
		popBar();
	});

	$(window).resize(function() {
		stickyTop = $(".content-wrap").offset().top;
	});
});