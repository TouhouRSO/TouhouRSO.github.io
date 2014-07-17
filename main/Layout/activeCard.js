;Quintus.Layout_ActiveCard = function(Q) {

	Q.UI.Container.extend("ownActiveCard",{
		init: function() {
      this._super({
		  fill: "gray",
      x: 943, // 1620 - 24 - 104 - 24 - 525 (w / 2) 
      y: 710, // 465 + 150 + 20 (border) + 75 (h / 2)
      w: 1050,
      h: 150,
      border: false,
      hidden: false
      });
    }
	});
  Q.UI.Container.extend("oppActiveCard",{
    init: function() {
      this._super({
      fill: "gray",
      x: 677, // 24 + 104 + 24 + 525 (w / 2)
      y: 370, // 465 - 20 (border) - 75 (h / 2)
      w: 1050,
      h: 150,
      border: false,
      hidden: false
      });
    }
  });

}