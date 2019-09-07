jQuery(document).ready(function(){
		$('.slider').slick({
        	autoplay:true,
      		autoplaySpeed:2000,
      		dots: false,
      		arrows: false
     	});

     	$('.partners-slider').slick({
     		//autoplay:true,
      		autoplaySpeed:2000,
      		dots: false,
      		arrows: false,
      		slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [{
		      breakpoint: 1025,
		      settings: {
		        slidesToShow: 4,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 769,
		      settings: {
		        slidesToShow: 3,
		        infinite: true
		     }
		 	},{
		      breakpoint: 481,
		      settings: {
		        slidesToShow: 2,
		        infinite: true
		     }
		 	},{
				breakpoint: 321,
				settings: {
				  slidesToShow: 1,
				  infinite: true
			   }
			}]
     	});
});