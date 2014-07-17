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
        if (Q.state.get("phase") == " Replenishing Phase ") {
          Q.state.set("phase"," Battle Phase ");
        } else if (Q.state.get("phase") == " Battle Phase ") {
          Q.state.set("phase"," Preparation Phase ");
        } else {
          Q.state.set("phase"," Replenishing Phase ");
        }
      });
    }
  });
}
