;Quintus.Layout_InfoPhase = function(Q) {

	/* Text */
	Q.UI.Text.extend("infoPhase",{
		init: function() {
      this._super({
        label: " Replenishing Phase ",
		    color: "Black",
		    align: 'center',
	      x: 1440, // 1920 * 0.75
    		y: 540, // 1080 / 2
    	  weight: "normal",
      	size: 24
      });
    },

    phase: function(phase) {
    	if (typeof a !== 'undefined')
	      this.p.label = phase;
	    return this.p.label;
    }
	});

}