$( document ).ready(animateGraphic);
$( window ).focus(function(){
	clearAnimation();
	animateGraphic();
});


function clearAnimation () {
	cssAnimate($( "#jcol1" ), '', '', '', '');
	cssAnimate($( "#jcol2" ), '', '', '', '');
	cssAnimate($( "#jcol3" ), '', '', '', '');
	cssAnimate($( "#jcol4" ), '', '', '', '');
	cssAnimate($( "#jcol5" ), '', '', '', '');
}

function animateGraphic (){
	var duration = "1s";
	var timing = "linear";
	var delay = ".251s";
	var aniamtion = "tileAnimation";


	$( "#jcol1" )[0].addEventListener("animationstart", function (){
		cssAnimate($( "#jcol2" ), aniamtion, duration, timing, delay);
	});

	$( "#jcol2" )[0].addEventListener("animationstart", function (){
		cssAnimate($( "#jcol3" ), aniamtion, duration, timing, delay);
	});

	$( "#jcol3" )[0].addEventListener("animationstart", function (){
		cssAnimate($( "#jcol4" ), aniamtion, duration, timing, delay);
	});

	$( "#jcol4" )[0].addEventListener("animationstart", function (){
		cssAnimate($( "#jcol5" ), aniamtion, duration, timing, delay);
	});

	$( "#jcol5" )[0].addEventListener("animationstart", function (){
		cssAnimate($( "#jcol1" ), aniamtion, duration, timing, delay);
	});

	cssAnimate($( "#jcol1" ), aniamtion, duration, "0s"); 
}

function cssAnimate (element, aniamtion, duration, timing, delay){

	element.css("animation-duration", duration);
	element.css("animation-delay", delay);
	element.css("animation-timing-function", timing);
	element.css("animation-name", aniamtion);
	element[0].addEventListener("animationend", function(){
		element.css("animation", '');
	})
}