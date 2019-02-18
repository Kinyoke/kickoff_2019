// wait for the document to completely load and perform some action below
function bannerSlide(){
  var i = 0;
  setInterval(function(){ 
    i+=1;
    if (i == 1) {
      $(".slide-n3").css("display","none");
      $(".slide-n1").fadeIn(1000);
    } else if (i == 2) {
      $(".slide-n1").css("display","none");
      $(".slide-n2").fadeIn(1000);
    }else if (i == 3) {
      $(".slide-n2").css("display","none");
      $(".slide-n3").fadeIn(1000);
      i = 0;
    }
  }, 1000);
   //$(".slide-n2").animate({width:'toggle'},350);
}

$(document).ready(function() {
  // NOTE: HEADER AND NAV-BAR
	// operations for the header and navigation bar goes here
	$(document).scroll(function(){
		 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        	$("#header").css({"margin-top":"-100px","display":"none"});
        	$(".nav").css({"position":"fixed" , "margin-top":"-10","clear":"both"}); 
      		$("#kick-logo").css({"margin":"-15px 10px","transform":"scale(.65)"});
      		$("#pane-top").css({"width":"99.5%" , "border-bottom":"40px solid green"});
      		$("#pane-bottom").css({"width":"99.6%" , "border-bottom":"25px solid green","border-left":"10px solid transparent"});
          $("#home-body").css("padding-top","183px");
          $(".MenuX-top, .MenuX-top-right").css({"margin-top":"0px"})
    }else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
        	$("#header").css({"margin-top":"0px","display":"block"});
         	$(".nav").css("position","relative");  
          $("#kick-logo").css({"margin":"-35px 20px","transform":"scale(1)"});
          $("#pane-top").css({"width":"97%" , "border-bottom":"25px solid green"});
          $("#pane-bottom").css({"width":"98.1%" , "border-bottom":"40px solid green","border-left":"25px solid transparent"});
          $("#home-body").css("padding-top","0px");
    }
	});

  // NOTE: HOME BANNER
  // slider operations for home bannerSlide goes below
  bannerSlide();

	// NOTE: FOOTER
	// footer operations goes below
	$("#return").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;
	});

});




