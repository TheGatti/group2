//object literal & constructer function

//define attr & protypes

var charObject = {

  init: function() {

    class Character {
      constructor(props) {
        this.name = props && props.name ? props.name : "DMX";
        this.health = 100;
        this.balance = 100;
        this.lance = props && props.name ? props.lance : "Lance Bass Bass Lance";
      }
      trashBoating(str) {
        console.log(`${this.name}: ${str}`);
      }
    }



    function createCharacter(props) {
      return new Character(props);
    }


    return createCharacter;

  }


}
