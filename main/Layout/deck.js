;Quintus.Layout_Deck = function(Q) {
	Q.UI.Container.extend("ownDeck",{
		init: function() {
      this._super({
		  fill: "gray",
      x: 1544, // 1620 - 24 - 52 (w/2)
      y: 880, // 465 + 150 + 20 (border) + 150 + 20 (border) + 75 (h / 2)
      w: 104,
      h: 150,
      border: false,
      hidden: false,
      cards: []
      });
    },
    add: function(id, i) {
      cards.push(Q.initCard(id, i));
    }
	});
  Q.UI.Container.extend("oppDeck",{
    init: function() {
      this._super({
      fill: "gray",
      x: 76,  // 24 + 52 (w / 2)
      y: 200, // 465 - 20 (border) - 150 - 20 (border) - 75 (h / 2)
      w: 104,
      h: 150,
      border: false,
      hidden: false
      });
    }
  });
}