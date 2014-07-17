;Quintus.Layout_LeadCharacter = function(Q) {
	Q.UI.Container.extend("ownLeadChar",{
	init: function() {
    this._super({
	  fill: "gray",
    x: 204, // 24 + 104 + 24 + 52 (w / 2)
    y: 710, // 465 + 150 + 20 (border) + 75 (h / 2)
    w: 104,
    h: 150,
    border: false,
    hidden: false
    });
  }
});
Q.UI.Container.extend("oppLeadChar",{
  init: function() {
    this._super({
    fill: "gray",
    x: 1406,  // 24 + 104 + 24 + 1050 + 24 + 104 + 24 + 52 (w / 2)
    y: 370, // 465 - 20 (border) - 75 (h / 2)
    w: 104,
    h: 150,
    border: false,
    hidden: false
    });
  }
});
}