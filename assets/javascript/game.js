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

  //function to add characters not selected to enemies <div>
  function addEnemies() {
    for (i = 0; i < enemies.length; i++) {
      $("#enemies").append('<img id="' + enemies[i][3] + '" src="' + enemies[i][2] + '" />');
      console.log(enemies)
    }
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
      addEnemies();
    } else if (this.dataset.position == 2) {
      yourCharacter = jetLi;
      enemies.push(bruceLee, jackieChan, jeanClaude);
      $("#jackieChanPic").hide();
      $("#bruceLeePic").hide();
      $("#jeanClaudePic").hide();
      addEnemies();
    } else if (this.dataset.position == 3) {
      yourCharacter = jeanClaude;
      enemies.push(bruceLee, jackieChan, jetLi);
      $("#jackieChanPic").hide();
      $("#bruceLeePic").hide();
      $("#jetLiPic").hide();
      addEnemies();
    } else {
      yourCharacter = jackieChan;
      enemies.push(bruceLee, jeanClaude, jetLi);
      $("#jeanClaudePic").hide();
      $("#bruceLeePic").hide();
      $("#jetLiPic").hide();
      addEnemies();
    } 
    
    console.log(yourCharacter);
    console.log(enemies);
  })

  //Selecting the defender from the enemies array
  $("#enemies").on("click", function() {
    console.log(this)
    if (this.id == "jetLi") {
      console.log("that actually worked");
      $("#jetLi").hide();
      defender = jetLi;
    }
  });

});
