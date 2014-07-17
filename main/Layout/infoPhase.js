;Quintus.Layout_InfoPhase = function(Q) {

  Q.UI.Text.extend("infoPhase",{
    init: function() {
      this._super({
        label: " Replenishing Phase ",
        color: "Black",
        align: 'center',
        x: 300,
        y: 540, // 1080 / 2
        border: false,
        setFont: "800 24px Arial"
      });
      Q.state.on("change.phase",this,"phase");
    },
    phase: function(phase) {
      this.p.label = phase;
    }
  });
}
