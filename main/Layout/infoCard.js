;Quintus.Layout_InfoCard = function(Q) {

	Q.UI.Container.extend("infoCard",{
		init: function() {
      this._super({
		  fill: "gray",
      x: 1770, // 1920 - 150 (w/2)
      y: 540,  // 1080 / 2
      w: 300,
      h: 1080,
      border: false,
      hidden: false
      });
    }
	});

}