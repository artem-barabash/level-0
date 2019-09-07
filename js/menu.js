jQuery(document).ready(function(){
	
	let current = 'menu-state-open';

   $('.menuToggle').on('click', function() {
        $('body').addClass('stop-scrolling');
        $('body').bind('touchmove', function(e){e.preventDefault()})

    	$(this).addClass(current);
        $('#nav .menu').toggle(300, function(){
            if($(this).css('display') === "none"){
                $(this).removeAttr('style');
                $('.menuToggle').removeClass(current);
                $('body').removeClass('stop-scrolling');
                $('body').unbind('touchmove');
            }
        });
    });


     $('#nav ul li').on('click', function(){
            let current = $('#nav ul li');

            current.removeClass('active');
		    $(this).addClass('active');
       });
});