var yourCharacter;
var enemies = [];
var defender;

//Adding Fighters and their Attributes put these in an array - was name, health, imageSource, element
var bruceLee = ["Bruce Lee", 125, 'assets/images/bruceLeeImage.jpeg', "bruceLee"]
var jetLi = ["Jet Li", 115, 'assets/images/jetLiImage.jpeg', "jetLi"]
var jackieChan = ["Jackie Chan", 100, 'assets/images/jackieChanImage.jpeg', "jackieChan"]
var jeanClaude = ["Jean Claude", 110, 'assets/images/jeanClaudeImage.jpeg', "jeanClaude"]
var allCharacters = [bruceLee, jetLi, jackieChan, jeanClaude]


$(document).ready(function() {

  //Adding Fighter picutres to DOM
  for (i = 0; i < allCharacters.length; i++ ) {
    $("#" + allCharacters[i][3] + "Pic").html('<img id="' + allCharacters[i][3] + '" src="' + allCharacters[i][2] + '" />');
  }

  //Selecting the character you will fight with
  $(".characterList").on("click", function(){
    console.log(this.dataset.position)
    if (this.dataset.position == 1) {
      yourCharacter = bruceLee;
      enemies.push(jetLi, jackieChan, jeanClaude);
      $("#jackieChanPic").hide();
      $("#jetLiPic").hide();
      $("#jeanClaudePic").hide();
      for (i = 0; i < enemies.length; i++) {
        $("#enemies").append('<img id="' + enemies[i][3] + '" src="' + enemies[i][2] + '" />');
      }
      //$("#enemy1").append('<img id="' + jackieChan[3] + '" src="' + jackieChan[2] + '" />');
      //$("#enemy2").append('<img id="' + jeanClaude[3] + '" src="' + jeanClaude[2] + '" />');
      //$("#enemy3").append('<img id="' + jetLi[3] + '" src="' + jetLi[2] + '" />');
    } else if (this.dataset.position == 2) {
      yourCharacter = jetLi;
      enemies.push(bruceLee, jackieChan, jeanClaude);
      $("#jackieChanPic").hide();
      $("#bruceLeePic").hide();
      $("#jeanClaudePic").hide();
      $("#enemy1").append('<img id="' + jackieChan[3] + '" src="' + jackieChan[2] + '" />');
      $("#enemy2").append('<img id="' + jeanClaude[3] + '" src="' + jeanClaude[2] + '" />');
      $("#enemy3").append('<img id="' + bruceLee[3] + '" src="' + bruceLee[2] + '" />');
    } else if (this.dataset.position == 3) {
      yourCharacter = jeanClaude;
      enemies.push(bruceLee, jackieChan, jetLi);
      $("#jackieChanPic").hide();
      $("#bruceLeePic").hide();
      $("#jetLiPic").hide();
      $("#enemy1").append('<img id="' + jackieChan[3] + '" src="' + jackieChan[2] + '" />');
      $("#enemy2").append('<img id="' + jetLi[3] + '" src="' + jetLi[2] + '" />');
      $("#enemy3").append('<img id="' + bruceLee[3] + '" src="' + bruceLee[2] + '" />');
    } else {
      yourCharacter = jackieChan;
      enemies.push(bruceLee, jeanClaude, jetLi);
      $("#jeanClaudePic").hide();
      $("#bruceLeePic").hide();
      $("#jetLiPic").hide();
      $("#enemy1").append('<img id="' + jeanClaude[3] + '" src="' + jeanClaude[2] + '" />');
      $("#enemy2").append('<img id="' + jetLi[3] + '" src="' + jetLi[2] + '" />');
      $("#enemy3").append('<img id="' + bruceLee[3] + '" src="' + bruceLee[2] + '" />');
    } 
    
    console.log(yourCharacter);
    console.log(enemies);
  })

  //Selecting the defender from the enemies array
  $(".enemies").on("click", function() {
    if (id = "Jet Li") {
      console.log("that actually worked");
      console.log(this);
      defender = jetLi;
      $(this).remove;
    }
  });

});
