var yourCharacter;
var enemies = [];
var bruceLee = { name: "Bruce Lee",
                 health: 125,
                 imageSource: "assets/images/bruceLeeImage.jpeg"}
var jetLi = { name: "Jet Li",
                 health: 115,
                 imageSource: "assets/images/jetLiImage.jpeg"}
var jackieChan = { name: "Jackie Chan",
                 health: 100,
                 imageSource: "assets/images/jeanClaudeImage.jpeg"}
var jeanClaude = { name: "Jean Claude",
                 health: 110,
                 imageSource: "assets/images/jackieChanImage.jpeg"}

var fighterList = [bruceLee, jetLi, jackieChan, jeanClaude]


$(document).ready(function() {

  for(i = 0; i < fighterList; i++)
{
    $("#bruceLeePic").html('<img src="' + [i].imageSource + '" />');
}
  
  $("#jetLiPic").html('<img id="Jet Li" src="assets/images/jetLiImage.jpeg" />');
  $("#jeanClaudePic").html("<img id='Jean Claude' src='assets/images/jeanClaudeImage.jpeg' />");
  $("#jackieChanPic").html('<img id="Jackie Chan" src="assets/images/jackieChanImage.jpeg" />');

  console.log(fighterList[2].name)

  $(".characterList").on("click", function(){
    console.log(this);

  })
/*
  $("#bruceLeePic").on("click", function() {
    yourCharacter = bruceLee;
    console.log(yourCharacter);
    enemies.push(jetLi, jackieChan, jeanClaude);
    console.log(enemies);
    $("#jackieChanPic").hide();
    //$("#enemies").appendTo('<img id="Jackie Chan" src="assets/images/jackieChanImage.jpeg" />');

    //var newDiv = $("<div>");
    //newDiv.text("Enemies Available to Attack");
   // $("#enemies").append(newDiv);


    $("#jetLiPic").hide();
    $("#jeanClaudePic").hide();
  });

  $("#jetLiPic").on("click", function() {
    yourCharacter = jetLi;
    console.log(yourCharacter);
    enemies.push(bruceLee, jackieChan, jeanClaude);
    console.log(enemies);
    $("#jackieChanPic").hide();
    $("#bruceLeePic").hide();
    $("#jeanClaudePic").hide();
  });

  $("#jeanClaudePic").on("click", function() {
    yourCharacter = jeanClaude;
    console.log(yourCharacter);
    enemies.push(bruceLee, jackieChan, jetLi);
    console.log(enemies);
    $("#jackieChanPic").hide();
    $("#jetLiPic").hide();
    $("#bruceLeePic").hide();
  });

  $("#jackieChanPic").on("click", function() {
    yourCharacter = jackieChan;
    console.log(yourCharacter);
    enemies.push(bruceLee, jeanClaude, jetLi);
    console.log(enemies);
    $("#bruceLeePic").hide();
    $("#jetLiPic").hide();
    $("#jeanClaudePic").hide();
  });

  //function addToYourCharacter()
*/
});
