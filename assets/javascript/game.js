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
      $("#" + enemies[i][3] + "Enemy").append('<img id="' + enemies[i][3] + '" src="' + enemies[i][2] + '" />');
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
  $(".enemies").on("click", function(){
    console.log(this.dataset.position)
    if (this.dataset.position == 2) {
      defender = jetLi;
      $("#jetLiEnemy").hide();
      $("#jetLiDefender").append('<img id="' + jetLi[3] + '" src="' + jetLi[2] + '" />');
      $("#defenderHealth").html(defender[1]);
      $("#yourCharacterHealth").html(yourCharacter[1]);
      $(".defender").show();
    } else if (this.dataset.position == 1) {
      defender = bruceLee;
      $("#bruceLeeEnemy").hide();
      $("#bruceLeeDefender").append('<img id="' + bruceLee[3] + '" src="' + bruceLee[2] + '" />');
      $("#defenderHealth").html(defender[1]);
      $("#yourCharacterHealth").html(yourCharacter[1]);
      $(".defender").show();
    } else if (this.dataset.position == 3) {
      defender = jeanClaude;
      $("#jeanClaudeEnemy").hide();
      $("#jeanClaudeDefender").append('<img id="' + jeanClaude[3] + '" src="' + jeanClaude[2] + '" />');
      $("#defenderHealth").html(defender[1]);
      $("#yourCharacterHealth").html(yourCharacter[1]);
      $(".defender").show();
    } else {
      defender = jackieChan;
      $("#jackieChanEnemy").hide();
      $("#jackieChanDefender").append('<img id="' + jackieChan[3] + '" src="' + jackieChan[2] + '" />');
      $("#defenderHealth").html(defender[1]);
      $("#yourCharacterHealth").html(yourCharacter[1]);
      $(".defender").show();
    } 

    //When Attack is
    $("#attack").on("click", function(){
      defender[1] = defender[1] - 15;
      yourCharacter[1] = yourCharacter[1] - 10;
      youWin();
      youLose();
      $("#defenderHealth").html(defender[1]);
      $("#yourCharacterHealth").html(yourCharacter[1]);
    });
  
    //If you lose
    function youLose(){
      if (yourCharacter[1] <= 0){
        $("#youLose").html("You were defeated by " + defender[0] + "...");
        defender = null;
      }
    }

    //If you win
    function youWin(){
      if (defender[1] <= 0){
        $("#youWin").html("You defeated " + defender[0] + "!");
        $(".defender").hide();
        $("#defenderHealth").hide();
      }
    }
  });
});
