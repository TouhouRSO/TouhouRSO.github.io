;Quintus.Layout_OtherCharacter = function(Q) {
	Q.UI.Container.extend("ownOtherChar",{
	init: function() {
    this._super({
	  fill: "gray",
    x: 204, // 24 + 180 (w / 2)
    y: 880, // 465 + 150 + 20 + 150 + 20 + 75 (h / 2)
    w: 360, // 104 * 3 + 24 + 24
    h: 150,
    border: false,
    hidden: false
    });
  }
});
Q.UI.Container.extend("oppOtherChar",{
  init: function() {
    this._super({
    fill: "gray",
    x: 1406,  // 24 + 104 + 24 + 1050 + 24 + 180 (w / 2)
    y: 200, // 465 - 20 (border) - 150 - 20 75 (h / 2)
    w: 360, // 104 * 3 + 24 + 24
    h: 150,
    border: false,
    hidden: false
    });
  }
});
}
