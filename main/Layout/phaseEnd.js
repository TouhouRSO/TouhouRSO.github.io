;Quintus.Layout_PhaseEnd = function(Q) {

  Q.UI.Button.extend("phaseEnd",{
    init: function() {
      this._super({ 
        label: " End Phase ", 
        fontColor: "black",
        font: "800 24px Arial", 
        x: 1440,  // 1920 * 0.75
        y: 540,   // 1080 / 2
        border: false
      });
      this.on("click",function() {
        console.log(Q.Phase.p.label);
        if (Q.Phase.p.label == " Replenishing Phase ") {
          Q.Phase.p.label = " Battle Phase ";
        } else if (Q.Phase.p.label == " Battle Phase ") {
          Q.Phase.p.label = " Preparation Phase ";
        } else {
          Q.Phase.p.label = " Replenishing Phase ";
        }
      });
    }
  });
}