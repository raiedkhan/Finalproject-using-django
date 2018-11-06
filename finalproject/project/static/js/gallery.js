$(function(){
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "../Images/image1.jpg",
    "../Images/image2.jpg",
    "../Images/image3.jpg",
  ];
  var i = 0;
$(document).ready(function(){
  $(".gallery").hide();
    $(".button").click(function(){
        $(".gallery").toggle();
    });
})
  setInterval(function(){
    i = (i+1) % images.length;
    galleryImage.fadeOut(function(){
        $(this).attr('src', images[i]);
        $(this).fadeIn();
    });
  }, 2500);
});

$(document).ready(function(){
    $("#card1").mouseover(function(){
        $("#card1").css("background-color", "black");
    });
    $("#card1").mouseout(function(){
        $("#card1").css("background-color", "rgba(9,35,47,0.5)");
    });
});
$(document).ready(function(){
    $("#card2").mouseover(function(){
        $("#card2").css("background-color", "black");
    });
    $("#card2").mouseout(function(){
        $("#card2").css("background-color", "rgba(9,35,47,0.5)");
    });
});
$(document).ready(function(){
    $("#card3").mouseover(function(){
        $("#card3").css("background-color", "black");
    });
    $("#card3").mouseout(function(){
        $("#card3").css("background-color", "rgba(9,35,47,0.5)");
    });
});
$(document).ready(function(){
    $("#card4").mouseover(function(){
        $("#card4").css("background-color", "black");
    });
    $("#card4").mouseout(function(){
        $("#card4").css("background-color", "rgba(9,35,47,0.5)");
    });
});
$(document).ready(function(){
    $("#card5").mouseover(function(){
        $("#card5").css("background-color", "black");
    });
    $("#card5").mouseout(function(){
        $("#card5").css("background-color", "rgba(9,35,47,0.5)");
    });
});
$(document).ready(function(){
    $("#card6").mouseover(function(){
        $("#card6").css("background-color", "black");
    });
    $("#card6").mouseout(function(){
        $("#card6").css("background-color", "rgba(9,35,47,0.5)");
    });
});

$(document).ready(function(){
    $("#1").mouseover(function(){
        $("#1").css("font-size", "40px");
    });
    $("#1").mouseout(function(){
        $("#1").css("font-size", "20px");
    });
});
$(document).ready(function(){
    $("#2").mouseover(function(){
        $("#2").css("font-size", "40px");
    });
    $("#2").mouseout(function(){
        $("#2").css("font-size", "20px");
    });
});
$(document).ready(function(){
    $("#3").mouseover(function(){
        $("#3").css("font-size", "40px");
    });
    $("#3").mouseout(function(){
        $("#3").css("font-size", "20px");
    });
});
$(document).ready(function(){
    $("#4").mouseover(function(){
        $("#4").css("font-size", "40px");
    });
    $("#4").mouseout(function(){
        $("#4").css("font-size", "20px");
    });
});
$(document).ready(function(){
    $("#5").mouseover(function(){
        $("#5").css("font-size", "40px");
    });
    $("#5").mouseout(function(){
        $("#5").css("font-size", "20px");
    });
});
$(document).ready(function(){
    $("#6").mouseover(function(){
        $("#6").css("font-size", "40px");
    });
    $("#6").mouseout(function(){
        $("#6").css("font-size", "20px");
    });
});
