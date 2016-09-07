$(document).ready(function(){

  $("#footer-carpentry").click(function(){
    $("#carpentry").siblings().hide();
    $("#carpentry").show();
    window.scrollTo( 115, 115);
  });

  $("#footer-components").click(function(){
    $("#components").siblings().hide();
    $("#components").show();
    window.scrollTo( 115, 115);
  });

  $("#footer-cutlery").click(function(){
    $("#cutlery").siblings().hide();
    $("#cutlery").show();
    $(".navbar-toggle").click();
    window.scrollTo( 115, 115);
  });

  $("#footer-gardening").click(function(){
    $("#gardening").siblings().hide();
    $("#gardening").show();
    window.scrollTo( 115, 115);
  });

  $("#footer-hygiene").click(function(){
    $("#hygiene").siblings().hide();
    $("#hygiene").show();
    window.scrollTo( 115, 115);
  });

  $("#footer-mechanic").click(function(){
    $("#mechanic").siblings().hide();
    $("#mechanic").show();
    window.scrollTo( 115, 115);
  });

  $("#footer-n-abler, #footer-n-abler_V").click(function(){
    $("#n-abler").siblings().hide();
    $("#n-abler").show();
    window.scrollTo( 115, 115);
  });

  $("#footer-sports-gear").click(function(){
    $("#sports-gear").siblings().hide();
    $("#sports-gear").show();
    window.scrollTo( 115, 115);
  });

  $("#footer-utencils").click(function(){
    $("#utencils").siblings().hide();
    $("#utencils").show();
    window.scrollTo( 115, 115);
  });
});
