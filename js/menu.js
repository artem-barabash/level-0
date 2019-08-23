$(document).ready(function(){
	
	var current = 'menu-state-open';

    $('.menuToggle').on('click', function() {

    	$(this).addClass(current);

       $('.menu-list').slideToggle(300, function(){
            if($(this).css('display') === "none"){
                $(this).removeAttr('style');
                $('.menuToggle').removeClass(current);
            }
       });

    });
});