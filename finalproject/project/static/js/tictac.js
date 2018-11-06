$(document).ready(function(){
  $("#hiderule").hide();
  $("#rulebook").hide();
  $("#showrule").click(function(){
      $("#rulebook").show(1000);
      $("#hiderule").show(1000);
    });
})
function hiderule() 
{
  $(document).ready(function(){
      $("#rulebook").hide(1000);
      $("#hiderule").hide(1000);
  });
}


var xwon=0;
var owon=0;
var draw=0;
var move = 0;
var turn=1;
var play = true;
$("#board").hide();
$("#scoreboard").hide();
$("#exit").hide();
$("#reset").hide(); 
$("#x").hide();
$("#o").hide();
$(document).ready(function()
{
  $("#reset").click(function() {
    $( "#board td" ).each(function() {
      $( this ).empty();
      $(this).css({"background-color": "black"});
    });
    if(turn%2==1)
    {
      move=1;
      play=true;
      $("#x").show();
      $("#o").hide();
      turn++;
    }
    else
    {
      move=2;
      play=true;
      $("#o").show();
      $("#x").hide();
      turn++;
    }
  });
})


$(document).ready(function()
{
  $("#start").click(function(){
    $("#start").hide(1000);
    $("#x").show(1000);
    $("#board").show(1000);
    $("#scoreboard").show(1000);
    $("#exit").show(1000);
    $("#reset").show(1000);
    turn=1;
    move=1;
    xwon=0;
    draw=0;
    play=true;
    owon=0;
  });
})
$(document).ready(function()
{
  $("#board tr td").click(function()
  {
    if ($(this).text()=="" && play) 
    {
      if ((move%2)==1)
      {
        $(this).append("X");
        $("#x").hide();
        $("#o").show();
        $(this).css({"background-color": "red"});
      } 
      else
      {
        $(this).append("O"); 
        $("#o").hide();
        $("#x").show();
        $(this).css({"background-color": "green"});
      }
      if(move>=9)
      {
        draw++;
        document.getElementById("draw").innerHTML =draw;
        alert("The Match is Draw");
      }
      move++;
      if (checkForWinner()!=-1 && checkForWinner()!="") 
      { 
        if (checkForWinner()=="X")
        {
          alert("Player 1 wins!");
          xwon++;
          document.getElementById("xwon").innerHTML = xwon;
        }
        else
        {
          alert("Player 2 wins!");
          owon++;
          document.getElementById("owon").innerHTML = owon;
        }
        play = false; 
      }
    }
  });
  function checkForWinner() 
  {
    var val1 = $("#col1").text();
    var val2 = $("#col2").text();
    var val3 = $("#col3").text();
    var val4 = $("#col4").text();
    var val5 = $("#col5").text();
    var val6 = $("#col6").text();
    var val7 = $("#col7").text();
    var val8 = $("#col8").text();
    var val9 = $("#col9").text();
    // check rows
    if((val1==val2) && (val2==val3)) { return val3; }
    else if ((val4==val5) && (val5==val6)) { return val6; } 
    else if ((val7==val8) && (val8==val9)) { return val9; }
    // check columns
    else if ((val1==val4) && (val4==val7)) { return val7; }
    else if ((val2==val5) && (val5==val8)) { return val8; }
    else if ((val3==val6) && (val6==val9)) { return val9; }
    // check diagonals
    else if ((val1==val5) && (val5==val9)) { return val9; }
    else if ((val3==val5) && (val5==val7)) { return val7; }
    // no winner
    return -1;
  }
});


$(document).ready(function()
{
  $("#exit").click(function(){
    $("#xwon").empty();
    $("#owon").empty(); 
    $("#draw").empty();
    $( "#board td" ).each(function() {
      $( this ).empty();
      $(this).css({"background-color": "black"});
    });
    $("#start").show(1000); 
    $("#x").hide(1000);
    $("#o").hide(1000);
    $("#board").hide(1000);
    $("#scoreboard").hide(1000);
    $("#exit").hide(1000);
    $("#reset").hide(1000); 
  });
})