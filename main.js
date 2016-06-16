// david test
$(document).ready(function(){
  joust.init();
})

var joust = {
  myChar: {},
  myHorse: {},
  enemy: {},
  enemyHorse: {},
  trashStr: '',

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
      $('charPage').fadeIn();
      $(".username").fadeIn();
      $(".lancename").fadeIn();
      $('.username').on('click', function(event){
            event.preventDefault();
            var $username = $('input[name="name"]').val();
            console.log($username);
            var createChar = charObject.init();
            joust.myChar = createChar({name: $username});
            console.log(createChar({name: $username}));
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
          joust.myHorse = horseObject.penelope;
        } else if (horse === 'hector') {
          joust.myHorse = horseObject.hector;
        } else {
          joust.myHorse = horseObject.mrEd;
        };
        console.log("this is my horse: ", joust.myHorse)
      });

      // fades out char page and sends to lance page
      $('.toLancePage').on('click', function(){
        event.preventDefault();
        $('.charPage').fadeOut();
        $(".toLancePage").fadeIn();
        joust.lancePage();
      })
  },
  lancePage: function(){
    $('.toTrashPage').on('click', function(){
      event.preventDefault();
      $('.lancePage').fadeOut();
      joust.trashTalk();
    })
  },
  trashTalk: function(){
    $('.trashTalk').fadeIn();
    $('.trash').on('click', function(event){
      event.preventDefault();
      joust.trashStr = $('input[name="trash"]').val();
      $('input[name="trash"]').val('');
      $('.trashTalk').fadeOut();
      joust.fight();
    })
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
}
