window.onload = init;
function init(evt) {
	console.log('Page loaded DOM is ready.');
	
	$('#flex-container').hide();
	$('#flex-container').fadeIn(1400);

	$('.header').hide();
	$('.header').fadeIn(1400);
}


$(window).scroll(function() {
	let scroll = $(this).scrollTop();

/* $('#logo-wrap').css({
	'transform' : 'translate(0px, '+ scroll /2.5 +'%)'});
*/
	
	
}); 

$('.bent').mouseenter(function() {
	$(this).css('-webkit-transform', 'rotate(0deg)');
	});
$('.bent').mouseout(function() {
	$(this).css('-webkit-transform', 'rotate(-10deg)');
	});
	

	$(".in-right-left").mousedown(function() {
		$(".choice-box-left").removeClass("shadow").addClass("down-shadow position");
		
	})
		.mouseup(function() {
		$(".choice-box-left").addClass("shadow").removeClass("down-shadow position");
	});

	$(".in-right-center")
	.mousedown(function() {
    $(".choice-box-center").removeClass("shadow").addClass("down-shadow position");
})
	.mouseup(function() {
    $(".choice-box-center").addClass("shadow").removeClass("down-shadow position");
});

$(".in-right-right")
	.mousedown(function() {
    $(".choice-box-right").removeClass("shadow").addClass("down-shadow position");
})
	.mouseup(function() {
    $(".choice-box-right").addClass("shadow").removeClass("down-shadow position");
});


		

