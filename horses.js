//object literal & constructer function

//define attr & protypes

var horseObject = {
  penelope: {},
  mrEd: {},
  hector: {},
  init: function() {

    class Horse {
      constructor(opts) {
        this.name = opts.name;
        this.speed = opts.speed;
        this.healthWeapon = opts.healthWeapon;
        this.balanceWeapon = opts.balanceWeapon;
        this.healthWeaponAffect = Math.floor(Math.random() * (14) + 20);
        this.balanceWeaponAffect = Math.floor(Math.random() * (14) + 20);
      }

      affectBalance(char){
        char.balance = char.balance - this.balanceWeaponAffect;
      }
      affectHealth(char){
        char.health = char.health - this.healthWeaponAffect;
      }
    }

    horseObject.penelope = new Horse({speed:100, name: "Penelope", healthWeapon: "Laser Eyes", balanceWeapon: "Thunder Wings"});
    horseObject.mrEd = new Horse({speed: 100, name: "Mr. Ed", healthWeapon: "Super-sonic", balanceWeapon: "Rainbow Fart"});
    horseObject.hector = new Horse({speed:100, name: "Hector", healthWeapon: "Fire Breath", balanceWeapon: "Stank Eye"});

  }
}
