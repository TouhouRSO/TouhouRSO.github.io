;Quintus.Layout_ReserveCard = function(Q) {

	Q.UI.Container.extend("ownReserveCard",{
		init: function() {
      this._super({
		  fill: "gray",
      x: 943, // 1620 - 24 - 104 - 24 - 525 (w / 2) 
      y: 880, // 465 + 150 + 20 (border) + 150 + 20 (border) + 75 (h / 2)
      w: 1050,
      h: 150,
      border: false,
      hidden: false
      });
    }
	});
  Q.UI.Container.extend("oppReserveCard",{
    init: function() {
      this._super({
      fill: "gray",
      x: 677, // 24 + 104 + 24 + 525 (w / 2)
      y: 200, // 465 - 20 (border) - 150 - 20 (border) - 75 (h / 2)
      w: 1050,
      h: 150,
      border: false,
      hidden: false
      });
    }
  });

}