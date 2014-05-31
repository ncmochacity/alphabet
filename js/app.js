$(document).ready(function(){
	function animateLetter(str){
		$(".letter-" +str).stop(true,false).animate({top:'190px'},{easing:'easeInCirc',duration:300}).animate({opacity:2},300).animate({top:'0px'},{duration:500});
	}
	$(document).keypress(function(e){
	if(e.which >=97 && e.which <=122){

	animateLetter(String.fromCharCode(e.which));
	}
	else if (e.which==32){
		//spacebar
		$(".alert").show()
		.animate({opacity:2},500)
		.fadeOut(500);
	}

	});

})