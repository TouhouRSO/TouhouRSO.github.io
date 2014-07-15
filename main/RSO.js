window.addEventListener('load',function(e) {


  var Q = window.Q = Quintus().include("Sprites, UI, Scenes, Input, Touch");

  Q.setup({width: 960, height: 900 })
    .controls()
    .touch();

  Q.Sprite.extend("BG",{
    init: function(p) {
      this._super(p, { asset: "Hinafuda_-_Card_Back_small.jpg", type: 0 });
    }
  });

  /* Executed Commands */

  Q.scene("startGame",function(stage) {  
    /* Implement Objects */
    var bg1 = stage.insert(new Q.BG({ name: "bg", x: 250, y: 300, z: 3,}));
  });

  Q.load("Hinafuda_-_Card_Back_small.jpg", function() {
    Q.stageScene("startGame");
  });

});
