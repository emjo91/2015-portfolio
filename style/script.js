// This page is hooked up correctly :) tested with an alert.
  
window.onload = function(){
  // Variables
  var helloWorld = document.getElementById("helloWorld");   
  
  helloWorld.addEventListener("click", helloSwap);
  
  function helloSwap(){
    if (helloWorld.innerHTML === "HELLO,") {
      helloWorld.innerHTML = "WORLD!";
    } else {
      helloWorld.innerHTML = "HELLO,";
    };
  };  
};

// JQUERY BELOW

// Cog spins

$(document).ready(function(){
  
    $("#cog1").mouseenter(function(){
        $("#cog1").addClass("fa-spin");
    });
    
    $("#cog2").mouseenter(function(){
        $("#cog2").addClass("fa-spin");
    });
    
    $("#cog3").mouseenter(function(){
        $("#cog3").addClass("fa-spin");
    });
    
    $("#cog4").mouseenter(function(){
        $("#cog4").addClass("fa-spin");
    });
    
    $("#cog5").mouseenter(function(){
        $("#cog5").addClass("fa-spin");
    });
    
    $(".fa-cog").mouseleave(function(){
        $(".fa-cog").removeClass("fa-spin");
    });
    
});

// Page Transition

$(document).ready(function(){
  
  // Refactored scroll animation left-right
  
  $(".home-button").click(function(){
      $("body").animate({left: '0px'}, 1200);
  });
  
  $(".portfolio-button").click(function(){
      $("body").animate({left: '-100%'}, 1200);
  });
  
  $(".about-button").click(function(){
      $("body").animate({left: '-200%'}, 1200);
  });
  
  $(".contact-button").click(function(){
      $("body").animate({left: '-300%'}, 1200);
  });

});