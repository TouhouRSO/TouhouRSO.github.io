;Quintus.Layout_DiscardPile = function(Q) {
	Q.UI.Container.extend("ownDiscard",{
		init: function() {
      this._super({
		  fill: "gray",
      x: 1544, // 1620 - 24 - 52 (w/2)
      y: 710, // 465 + 150 + 20 (border) + 75 (h / 2)
      w: 104,
      h: 150,
      border: false,
      hidden: false
      });
    }
	});
  Q.UI.Container.extend("oppDiscard",{
    init: function() {
      this._super({
      fill: "gray",
      x: 76,  // 24 + 52 (w / 2)
      y: 370, // 465 - 20 (border) - 75 (h / 2)
      w: 104,
      h: 150,
      border: false,
      hidden: false
      });
    }
  });
}