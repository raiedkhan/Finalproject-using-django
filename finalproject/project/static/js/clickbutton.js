$(document).ready(function(){
  $("#hiderule").hide();
  $("#rulebook").hide();
    $("#showrule").click(function(){
      $("#rulebook").show(1000);
      $("#hiderule").show(1000);
	});
})
function hiderule() {
  $(document).ready(function(){
    $("#rulebook").hide(1000);
      $("#hiderule").hide(1000);
  });
}

  function time()
  {
          var time = $(".time").text();
      var interval = setInterval(function() {
        var count = time.split(':');
        var min = count[0];
        var sec = count[1];
        var counter = $(".timer").find("span");
        counter.eq(0).text(min);
        counter.eq(1).text(sec);
        if (min == 0) {
          $(".timer").css("color","red");
        }
        if (sec == 0) {
          if (min != 0) 
          {
            counter.eq(0).text(min--);
            sec = 59;
          }
          else if (min == 0) {
            counter.eq(0).text(min--);
            counter.eq(1).text(sec = 59);
            sec = 59;
          }
          else if (min == 0 && sec == 0) {
            counter.eq(2).text(0);
          }
          if (min == 0) {
            $(".timer").css("color","red");
          }
        }
        counter.eq(0).text(min);
        counter.eq(1).text(--sec);
        time = counter.eq(0).text()+":"+counter.eq(1).text();
        if (min == 0 && sec == 0)
        {
          clearInterval(interval);
          alert("Time Up");
        }
      },1000);
  }
 var clicks = 0;
   function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

$(document).ready(function(){
$("#start").hide();
$(".timer-wrap").hide();
$("#endgame").hide();
$("#playagain").hide();
  $("#button").hide();
  $("#result").hide();
    $("#play").click(function(){
      clicks=0;
      time();
      $("#result").show("slow");
      $(".timer-wrap").show("slow");
      $("#start").show("slow");
        $("#button").show();
        $("#playagain").show("slow");
        $("#endgame").show("slow");
        $('#button').delay(30000).fadeOut();
    });
})

function playagain() {
  $(document).ready(function(){
$("#clicks").empty();
      time();
    clicks=0;
$("#button").show(500);
$('#button').delay(30000).fadeOut();
  });
}

function exit() {
  $(document).ready(function(){
$("#clicks").empty();
$(".timer-wrap").hide("slow");
    clicks=0;
$("#start").hide("slow");
$("#playagain").hide("slow");
  $("#button").hide();
  $("#result").hide("slow");
$("#endgame").hide();
  });
}