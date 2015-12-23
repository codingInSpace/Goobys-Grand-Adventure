var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var sprite;
var platforms;

function preload() {
  game.load.spritesheet('guy', 'assets/sprites/pablo.png', 42, 58);
  game.load.image('sky', 'assets/sky1.png');
  game.load.image('ground', 'assets/ground.png');
}

function create() {

  // Enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.add.sprite(0, 0, 'sky');

  platforms = game.add.group();
  platforms.enableBody = true;
  var ground = platforms.create(0, game.world.height - 64, 'ground');

  // Scale ground to fit the width of the game
  ground.scale.setTo(2, 2);

  // This stops it from falling away when you jump on it
  ground.body.immovable = true;

  // Create two ledges
  var ledge = platforms.create(400, 400, 'ground');

  ledge.body.immovable = true;
  ledge = platforms.create(-150, 250, 'ground');
  ledge.body.immovable = true;

  sprite = game.add.sprite(0, 0, 'guy');
  sprite.animations.add('walk', [0, 1, 2, 3, 4], 20, true);
  sprite.animations.add('jump', [12, 13, 14, 15, 16], 10, true);
  sprite.animations.add('idle', [24, 25], 1, true);
  sprite.animations.play('jump');
}

function update() {

}
