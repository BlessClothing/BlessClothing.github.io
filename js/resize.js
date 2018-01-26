$(document).ready(resizeText);
$(window).resize(resizeText);

function resizeText() {
	var fontSize = $(window).width()/20.5;
  $('h3').css('font-size', fontSize);
};  