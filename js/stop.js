$(function () {

  $( "#go" ).on( "click", function() {
    $( ".block" ).animate({ left: "+=850px" }, 5000 );
  });
   
  // Stop animation when button is clicked
  $( "#stop" ).on( "click", function() {
    $( ".block" ).stop();
  });
   
  // Start animation in the opposite direction
  $( "#back" ).on( "click", function() {
    $( ".block" ).animate({ left: "-=850px" }, 5000 );
  });

  // 2° div
  $( "#vai" ).on( "click", function() {
    $( ".bleck" ).animate({ left: "+=400px" }, 5000 );
  });
   
  // Stop animation when button is clicked
  $( "#parar" ).on( "click", function() {
    $( ".bleck" ).stop();
  });
   
  // Start animation in the opposite direction
  $( "#voltar" ).on( "click", function() {
    $( ".bleck" ).animate({ left: "-=400px" }, 5000 );
  });

  // 3° div
  $( "#v" ).on( "click", function() {
    $( ".bluck" ).animate({ left: "-=420px" }, 5000 );
  });
   
  // Stop animation when button is clicked
  $( "#p" ).on( "click", function() {
    $( ".bluck" ).stop();
  });
   
  // Start animation in the opposite direction
  $( "#vol" ).on( "click", function() {
    $( ".bluck" ).animate({ left: "+=420px" }, 5000 );
  });

});