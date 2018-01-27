$(document).ready(resizeText);
$(window).resize(resizeText);

function resizeText() {
  var fontSize = $(window).width()/20.5;
  if (fontSize > 50) { fontSize = 50;}
  $('h3').css('font-size', fontSize);
};  