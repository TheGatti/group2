// david test
$(document).ready(function(){
  joust.init();
})

var joust = {
  myChar: {},
  myHorse: {},
  enemy: {},
  enemyHorse: {},

  init: function() {
    joust.styling();
    joust.events();
    horseObject.init();
  },

  styling: function() {

  },

  events: function() {
    joust.title();
  },

  title: function() {
    //start new game
    $('#newGame').on('click', function(event){
      event.preventDefault();
      $('.titleInWindow').fadeIn().css({"-webkit-transform":"translate(0,-600px)"});
    })
    //to char page
    $('.toCharPage').on('click', function(event){
      event.preventDefault();
      $('.titleInWindow').fadeOut().css({"-webkit-transform":"translate(0,-600px)"});
      joust.chooseChar();
    })

  },

  chooseChar: function() {
    // show inputs for name and lance, and horses
      $('.username').on('click', function(event){
            event.preventDefault();
            var $username = $('input[name="name"]').val();
            console.log($username);
            var createChar = charObject.init();
            myChar = createChar($username);
            $(".username").fadeOut();
          });
    // logs lance, fades lance button, fades in continue button
      $('.lancename').on('click', function(event){
            event.preventDefault();
            var $lancename = $('input[name="lance"]').val();
            console.log($lancename);
            $(".lancename").fadeOut();
            $(".toLancePage").fadeIn();
          });
    // selects horse
      $('.horse-img').on('click', function(){
        $('.charPage .horse-img').siblings().removeClass('selected');
        event.preventDefault();
        var horse = this.classList[0];
        console.log(this.classList[0]);
        this.classList.add('selected');
        console.log(this);

        if(horse === 'penelope') {
          myHorse = horseObject.penelope;
        } else if (horse === 'hector') {
          myHorse = horseObject.hector;
        } else {
          myHorse = horseObject.mrEd;
        };
        console.log("this is my horse: ", myHorse)
      });

      // fades out char page and sends to lance page
      $('.toLancePage').on('click', function(){
        event.preventDefault();
        $('.charPage').fadeOut();
        joust.lancePage();
      })
  },
  trashTalk: function(){
    var trashStr = prompt("time to trash talk!")
    myChar.trashBoating(trashStr);
    $('.trashTalk').fadeIn();
  },
  showBoating: function(){
    var showBoatStr = prompt("time to Showboat!")
    myChar.trashBoating(showBoatStr);
  },
  fight: function(){
    // choose attack
    // calculate health
    // check for death
    // showboating
  },
  gameOver: function(){
    // check score(health)
    if (myChar > enemy) {
      $(".winLose h3").text('You Won! Click "New Game" to play again, dawg!');
      $(".winLose img").attr("src", "/assets/fistbump.gif");
    }else if (myChar < enemy) {
      $(".winLose h3").text('You have been defeated. Click "New Game" to play again, dawg!');
      $(".winLose img").attr("src", "/assets/disappointedDMX.gif");
    }else {
      $(".winLose h3").text('Looks like a tie! Click "New Game" to play again, dawg!');
      $(".winLose img").attr("src", "/assets/gameover.gif");
    }
    $('.winLose').fadeOut().css({"-webkit-transform":"translate(0,-600px)"});
    // declare winner
    // ((go to next enemy?))
    // play again if lose or win???

    prompt('Would you like to play again?');
  },
  chooseHorse: function(whichHorse){
    var horse = horseObject;
    if (whichHorse === "Mr. Ed"){
        horse = new Horse({speed: 100, name: "Mr. Ed", healthWeapon: "Super-sonic", balanceWeapon: "Rainbow Fart"});
      }
    else if (whichHorse === "Penelope"){
      horse = new Horse({speed:100, name: "Penelope", healthWeapon: "Laser Eyes", balanceWeapon: "Thunder Wings"});
    }
    else if (whichHorse === "Hector"){
      horse = new Horse({speed:100, name: "Hector", healthWeapon: "Fire Breath", balanceWeapon: "Stank Eye"})
    }
    return horse;
  }
}
