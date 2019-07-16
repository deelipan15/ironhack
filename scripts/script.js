$(document).ready(function(){
	// animation
  	// var animation_elements = $('.animation_button');
  	// var testing = $(window).scrollTop();

  	// function check_visible() {
	  //   var window_height = $(window).height();
	  //   var window_top_position = $(window).scrollTop();
	  //   var window_bottom_position = (window_top_position + window_height);

	  //   $.each(animation_elements, function() {
	  //     var element = $(this);
	  //     var element_height = element.outerHeight();
	  //     var element_top_position = element.offset().top;
	  //     var element_bottom_position = (element_top_position + element_height);

	  //     if ((element_bottom_position >= window_top_position) &&
	  //       (element_top_position <= window_bottom_position)) {
	  //       $('.animation_button').css({'opacity' : (testing/690 - 0)});
	  //     }
	  //   });
	  // }
  	// $(window).on('scroll resize', check_visible);

  	// var t = $(".animation_button").offset().top;

$(document).scroll(function () {
    // if ($(window).height() + $(this).scrollTop() > t) {
    //     $(".animation_button").animate({
    //         'opacity': '1'
    //     }, 500);
    // }else{
    // 	$(".animation_button").animate({
    //         'opacity': '0.4'
    //     }, 500);
    // }
    var wh = $(window).height();


    var animation_elements = $('.animation_button');
    var window_height = $(window).height() * 0.7;
	    var window_top_position = $(window).scrollTop();
	    var window_bottom_position = (window_top_position + window_height);

	    $.each(animation_elements, function() {
	      var element = $(this);
	      var element_height = element.outerHeight();
	      var element_top_position = element.offset().top;
	      var element_bottom_position = (element_top_position + element_height) * 0.95;


	      var a = wh + window_top_position;
	      var b = a - element_top_position;
	      var c = b * 0.1;

	      if ((element_bottom_position >= window_top_position) &&
	        (element_top_position <= window_bottom_position)) {
	        	// element.addClass('opacity');
	        	element.css({'opacity' : c});
	      }	else{
	      		// element.removeClass('opacity');
	      		element.css({'opacity' : 0.4});
	      }
	    });
	});
	

	// save section effect
	$('.save ul li').click(function(){
		var element_index = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		var translate_value = -430;
		var active_translate = translate_value * element_index;
		$(this).parent('ul').children('li').css({ 'transform' : 'translateX('+active_translate+'px)' });
	});
});