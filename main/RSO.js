window.addEventListener('load',function(e) {

  /* Load All Libraries */
  var Q = window.Q = Quintus({
    //imagePath: "file:///C:/Rumbling%20Spell%20Orchestra/"
  })
  .include("Sprites, UI, Scenes, Input, Touch")
  .include("Assets_ImageList, Assets_AudioList") 
  .include("Card_CardBuilder, Card_Name")
  .include("Layout_InfoPhase")
  .include("Flow_PhaseManager");

  /* Set Up The Canvas */
  
  /* Screen Size Ratio */
  /* Desgined for 1920 * 1080 */
  Q.setup({ 
    width:   1920,
    height:  1080,
    scaleToFit: true,
    upsampleWidth:  1024,  // Double the pixel density if 1024 x 768 or less
    upsampleHeight: 768 
  }).controls().touch();
  
  /* Load All Assets, then start the game */
  //Q.preload(Q.imageList);
  //Q.preload(Q.audioList);

  Q.preload("Hinafuda_-_Card_Back_small.jpg");
  Q.preload(function() {
    Q.stageScene("startGame");
  }, {
    progressCallback: function(loaded,total) {
      var element = document.getElementById("loading_progress");
      element.style.width = Math.floor(loaded/total*100) + "%";
    }
  });

});
