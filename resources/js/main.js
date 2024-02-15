//  isotope not working with this code 
// (function($){
//     "use strict";
//     jQuery(document).ready(function($){
//         $('.project-list-menu li').on('click',  function(){ 
//              $selector = $(this).attr('data-filter');
//              $('.project-lists').isotope({
//                 filter: $selector
//              });
//         });  
//     });
//     jQuery(window).load(function(){
//        $('.project-lists').isotope({
//             // // options
//         });
//     });
// }(jQuery));

   
// paralex effect js script 
(function($){
"use strict";
jQuery(document).ready(function($){
    var s = skrollr.init({
    render:function(data){
        //Debuggin - log the current scroll position
        //console.log(data.curTop);
    }
  });
});

jQuery(window).load(function(){

})

}(jQuery));

// $(document).ready(function () {
// 	//STIKY MANU

// 	$(".js--services-section").waypoint(function (direction) {

// 		if (direction == "down") {
// 			$("nav").addClass("sticky");
// 		} else {
// 			$("nav").removeClass("sticky");
// 		}
// 	});




// 	//ACTIVE LINK

// 	$("nav ul li a").click(function () {
// 		$("nav ul li a").removeClass("active");
// 		$(this).addClass("active");

// 	});
// 	$("nav a img.logo").click(function () {
// 		$("nav ul li a").removeClass("active");
// 		$("nav ul li :first-child a")
// 			.addClass("active");

// 	});




// 	//MIXITUP(PORTFOLIO SECTION)
// 	var mixer = mixitup('.container');

// 	//	SMOOTH SCHROLL FOR IE /EDGE/SAFARI

// 	$("a").on('click', function (event) {
// 		if(this.hash !== "") {
// 			event.preventDefault();
// 			var hash = this.hash;
// 			$('html,body').animate({
// 				scrollTop: $(hash).offset().top
// 			}, 800,function() {
// 				window.location.hash = hash;
// 			});
// 		}
// 	});






// });


// function openNav() {
// 	document.getElementById("myNav").style.width = "100%";
// }

// function closeNav() {
// 	document.getElementById("myNav").style.width = "0%";
// }
