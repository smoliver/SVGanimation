$( document ).ready( function(){
	var duration = "1s";
	var delay = ".26s";
	var aniamtion = "tileAnimation";


	$( "#jcol1" )[0].addEventListener("animationstart", function (){
		cssAnimate($( "#jcol2" ), aniamtion, duration, delay);
	});

	$( "#jcol2" )[0].addEventListener("animationstart", function (){
		cssAnimate($( "#jcol3" ), aniamtion, duration, delay);
	});

	$( "#jcol3" )[0].addEventListener("animationstart", function (){
		cssAnimate($( "#jcol4" ), aniamtion, duration, delay);
	});

	$( "#jcol4" )[0].addEventListener("animationstart", function (){
		cssAnimate($( "#jcol5" ), aniamtion, duration, delay);
	});

	$( "#jcol5" )[0].addEventListener("animationstart", function (){
		cssAnimate($( "#jcol1" ), aniamtion, duration, delay);
	});

	cssAnimate($( "#jcol1" ), aniamtion, duration, "0s"); 

});

function cssAnimate (element, aniamtion, duration, delay){
	element.css("animation-duration", duration);
	element.css("animation-delay", delay);
	element.css("animation-name", aniamtion);
	element[0].addEventListener("animationend", function(){
		element.css("animation-name", '');
	})
}