// TOGGLING ON WHAT WE DO
$(document).ready(function(){
  $("#a").click(function(){
    $("#icon").toggle();
    $(".hidden").toggle();
  });
  $("#b").click(function(){
    $("#icon2").toggle();
    $(".hidden2").toggle();
  });
  $("#c").click(function(){
    $("#icon3").toggle();
    $(".hidden3").toggle();
  });
  // HOVER EFFECT
  $(".portfolio").hover(function(){
    $(this).children(".porti").toggle(1000);
  });
});
