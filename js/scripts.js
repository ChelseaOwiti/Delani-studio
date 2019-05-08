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
  // COLLECTING INPUT
  $("button").click(function(event){
    
    // var name = $("#name").val();
    // $(".message").toggle();
    // $(".message").text = "fggjhgbfv";

    event.preventDefault();
    var user= document.getElementById("name").value;
    alert (user + " we have received your message. Thank-you for reaching out to us.")
  });
});
