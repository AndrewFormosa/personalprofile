 //ALLOW CHAGES DRIVEN BY SCROLL UP vs SCROLL DOWN

 let lastScroll;

 $(window).on('scroll', function () {
   scrollPosition = $(window).scrollTop();
   if (scrollPosition > lastScroll) {
     console.log("DOWN"); //on Scroll Down
     onScrollDown();
   } else {
     console.log("UP"); //on Scroll Up
     onScrollUp();
   }
   lastScroll = scrollPosition;
 });

 function onScrollDown() {
   //on Scroll Down actions
   $(".navbar").slideUp();
   //$(".navbar").fadeOut(1000);
 }

 function onScrollUp() {
   //on Scroll Up actions
   $(".navbar").slideDown();
   //$( ".navbar" ).fadeIn(1000);
 }