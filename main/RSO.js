window.addEventListener('load',function(e) {

  /* Load All Libraries */
  var Q = window.Q = Quintus({

    // dataPath:  "file:///C:/Users/mini/Documents/GitHub/TouhouRSO.github.io/data/",
    imagePath: "file://C:/Rumbling Spell Orchestra/"
  })
  /* Standard lib */
  .include("Sprites, UI, Scenes, Input, Touch")

  /* Assets */
  .include("Assets_ImageList") 
  .include("Assets_AudioList") 

  /* Card - Assets */
  .include("Card_CardBuilder")
  .include("Card_Name")
  .include("Card_Path")
  .include("Card_Type")
  .include("Card_CharaParam")
  .include("Card_EventParam")
  .include("Card_SpellParam")
  .include("Card_SupportParam")

  /* Layout */
  .include("Layout_ActiveCard")
  .include("Layout_Deck")
  .include("Layout_DiscardPile")
  .include("Layout_HandCard")
  .include("Layout_InfoCard")
  .include("Layout_InfoHP")
  .include("Layout_InfoSP")
  .include("Layout_InfoPhase")
  .include("Layout_InfoPlayer")
  .include("Layout_LeadCharacter")
  .include("Layout_PhaseEnd")
  .include("Layout_ReserveCard")
  .include("Layout_OtherCharacter")
  .include("Layout_SceneCard")

  /* Flow */
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

  //Q.preload("Hinafuda_-_Card_Back_small.jpg");
  //Q.preload("sampleDeck.txt");
  Q.preload("test.jpg");
  Q.preload(function() {
    Q.stageScene("startGame");
  }, {
    progressCallback: function(loaded,total) {
      var element = document.getElementById("loading_progress");
      element.style.width = Math.floor(loaded/total*100) + "%";
    }
  });

});
