$(document).ready(function() {

	$('.tabs .tab-links a').on('click', function(event)  {

		var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
   	    $('.tab-content ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
       	$(this).parent('li').addClass('active').siblings().removeClass('active');

       	event.preventDefault();
        
    });

    // JS for sticky Nav

    var stickyNavTop = $('nav').offset().top; 

	$(window).scroll(function() {
	   	
		var stickyNav = function(){
			//calculate how far I am scrolled down on the page
			var scrollTop = $(window).scrollTop();
	      

			if (scrollTop > stickyNavTop) { 
	   			$('nav').addClass('sticky');
			} else {
				console.log(scrollTop, stickyNavTop);
	   			$('nav').removeClass('sticky');
			}
		};
	 
		stickyNav();
	});

	$('nav a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top-140
	    }, 600);
	    return false;
	    $('#dropdown').removeClass('visible');

	});

	$('.mbl-nav').click(function() {
  		$('#dropdown').addClass('visible');

  		var scrollTop = $(window).scrollTop();
  		$('#dropdown').css('top', 85 + scrollTop);

	});

});