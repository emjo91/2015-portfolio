// This page is hooked up correctly :) tested with an alert.
  
window.onload = function(){
  // Variables
  var helloWorld = document.getElementById("helloWorld"); 
  
  var homePage = document.getElementById("home");
  var aboutPage = document.getElementById("about");
  var portfolioPage = document.getElementById("portfolio");
  var contactPage = document.getElementById("contact");
  
  var cog = document.getElementsByClassName("fa-cog");
  
  
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
  
  // Refactored scroll animation
  
  $("#home-button").click(function(){
      $("body").animate({left: '0px'});
  });
  
  $(".portfolio-button").click(function(){
      $("body").animate({left: '-100%'});
  });
  
  $("#about-button").click(function(){
      $("body").animate({left: '-200%'});
  });
  
  // // from home page
  //
  // $("#portfolio1").click(function(){
  //     $("body").animate({left: '-100%'});
  // });
  //
  // $("#about1").click(function(){
  //     $("body").animate({left: '-200%'});
  // });
  //
  // $("#contact1").click(function(){
  //     $("body").animate({left: '-300%'});
  // });
  //
  // // from portfolio page
  //
  // $("#home2").click(function(){
  //     $("body").animate({left: '0px'});
  // });
  //
  // $("#about2").click(function(){
  //     $("body").animate({left: '-200%'});
  // });
  //
  // $("#contact2").click(function(){
  //     $("body").animate({left: '-300%'});
  // });
  //
  // // from about page
  //
  // $("#home3").click(function(){
  //     $("body").animate({left: '0px'});
  // });
  //
  // $("#portfolio3").click(function(){
  //     $("body").animate({left: '-100%'});
  // });
  //
  // $("#contact3").click(function(){
  //     $("body").animate({left: '-300%'});
  // });
  //
  // // from contact page
  //
  // $("#home4").click(function(){
  //     $("body").animate({left: '0px'});
  // });
  //
  // $("#portfolio4").click(function(){
  //     $("body").animate({left: '-100%'});
  // });
  //
  // $("#about4").click(function(){
  //     $("body").animate({left: '-200%'});
  // });

});