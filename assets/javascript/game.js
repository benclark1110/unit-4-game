var yourCharacter;
var enemies = [];

//Adding Fighters and their Attributes
var bruceLee = { name: "Bruce Lee",
                 health: 125,
                 imageSource: 'assets/images/bruceLeeImage.jpeg'}
var jetLi = { name: "Jet Li",
                 health: 115}
var jackieChan = { name: "Jackie Chan",
                 health: 100}
var jeanClaude = { name: "Jean Claude",
                 health: 110}


$(document).ready(function() {

  //Adding Fighter picutres to DOM
  $("#bruceLeePic").html('<img id="Bruce Lee" src="assets/images/bruceLeeImage.jpeg" />');
  $("#jetLiPic").html('<img id="Jet Li" src="assets/images/jetLiImage.jpeg" />');
  $("#jeanClaudePic").html('<img id="Jean Claude" src="assets/images/jeanClaudeImage.jpeg" />');
  $("#jackieChanPic").html('<img id="Jackie Chan" src="assets/images/jackieChanImage.jpeg" />');


  //$(".characterList").on("click", function(){
    //console.log(this);

  //})

  //If Bruce Lee is the selected fighter
  $("#bruceLeePic").on("click", function() {
    yourCharacter = bruceLee;
    console.log(yourCharacter);
    enemies.push(jetLi, jackieChan, jeanClaude);
    console.log(enemies);
    $("#jackieChanPic").hide();
    $("#jetLiPic").hide();
    $("#jeanClaudePic").hide();
    $("#enemies").append('<img id="Jackie Chan" src="assets/images/jackieChanImage.jpeg" />');
    $("#enemies").append('<img id="Jean Claude" src="assets/images/jeanClaudeImage.jpeg" />');
    $("#enemies").append('<img id="Jet Li" src="assets/images/jetLiImage.jpeg" />');
  });

  //If Jet Li is the selected fighter
  $("#jetLiPic").on("click", function() {
    yourCharacter = jetLi;
    console.log(yourCharacter);
    enemies.push(bruceLee, jackieChan, jeanClaude);
    console.log(enemies);
    $("#jackieChanPic").hide();
    $("#bruceLeePic").hide();
    $("#jeanClaudePic").hide();
    $("#enemies").append('<img id="Jean Claude" src="assets/images/jeanClaudeImage.jpeg" />');
    $("#enemies").append('<img id="Jackie Chan" src="assets/images/jackieChanImage.jpeg" />');
    $("#enemies").append('<img id="Bruce Lee" src="assets/images/bruceLeeImage.jpeg" />');
  });

  //If Jean Claude is the selected fighter
  $("#jeanClaudePic").on("click", function() {
    yourCharacter = jeanClaude;
    console.log(yourCharacter);
    enemies.push(bruceLee, jackieChan, jetLi);
    console.log(enemies);
    $("#jackieChanPic").hide();
    $("#jetLiPic").hide();
    $("#bruceLeePic").hide();
    $("#enemies").append('<img id="Jackie Chan" src="assets/images/jackieChanImage.jpeg" />');
    $("#enemies").append('<img id="Bruce Lee" src="assets/images/bruceLeeImage.jpeg" />');
    $("#enemies").append('<img id="Jet Li" src="assets/images/jetLiImage.jpeg" />');
  });

  //If Jackie Chan is the selected fighter
  $("#jackieChanPic").on("click", function() {
    yourCharacter = jackieChan;
    console.log(yourCharacter);
    enemies.push(bruceLee, jeanClaude, jetLi);
    console.log(enemies);
    $("#bruceLeePic").hide();
    $("#jetLiPic").hide();
    $("#jeanClaudePic").hide();
    $("#enemies").append('<img id="Bruce Lee" src="assets/images/bruceLeeImage.jpeg" />');
    $("#enemies").append('<img id="Jet Li" src="assets/images/jetLiImage.jpeg" />');
    $("#enemies").append('<img id="Jean Claude" src="assets/images/jeanClaudeImage.jpeg" />');
  });

  $("#enemies").on("click", function() {
    console.log(this);
  });

});
