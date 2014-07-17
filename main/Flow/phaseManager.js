;Quintus.Flow_PhaseManager = function(Q) {

  Q.scene("startGame",function(stage) {  
    /* Implement Objects */

    var turn = 0;

    //var bg = stage.insert(new Q.Character({ path: "Alice/Alice0600.jpg", id:"0600", x: 250, y: 300, z: 3,}));



    /* Init Layout */
	  Q.Phase = stage.insert(new Q.infoPhase());



    /* End Phase Box */
    var endPhaseBox = stage.insert(new Q.UI.Container({
      fill: "gray",
      border: 5,
      x: 1440, // 1920 * 0.75
      y: 649, // 1080 / 2 + 72 (height) * 1.5
      hidden: false
    }));
    
    /* End Phase Button */
    var endPhaseButton = endPhaseBox.insert(new Q.UI.Button({ 
      label: " End Phase ", 
      fontColor: "white",
      font: "800 24px Arial", 
      x: 0, 
      y: 0, 
    }))
    endPhaseButton.on("click",function() {
    	console.log(Q.Phase.p.label);
      if (Q.Phase.p.label == " Replenishing Phase ") {
      	Q.Phase.p.label = " Battle Phase ";
      } else if (Q.Phase.p.label == " Battle Phase ") {
      	Q.Phase.p.label = " Preparation Phase ";
      } else {
      	Q.Phase.p.label = " Replenishing Phase ";
      }
    });
    endPhaseBox.fit(12, 12);
  });


}