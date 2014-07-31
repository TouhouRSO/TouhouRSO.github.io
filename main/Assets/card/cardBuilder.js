;Quintus.Card_CardBuilder = function(Q) {

	Q.Sprite.extend("Card", {
		init: function(p) {
			this._super(p, { asset: p.path, scale:0.5, w: 104, h: 150, cx:104, cy:150});
			this.on("drag");
			this.on("touchEnd");
			this.p.name = Q.cardName[p.id];

		},
		drag: function(touch) {

		},
		touchEnd: function(touch) {

		}
	});

	Q.Card.extend("Character",{
		init: function(p) {
      this._super(p);
      this.on("drag");
      this.on("touchEnd");
		},
		drag: function(touch) {

		},
		touchEnd: function(touch) {

		}
	});
	Q.Card.extend("Spell",{
		init: function(p) {
      this._super(p);
      this.on("drag");
      this.on("touchEnd");
		},
		drag: function(touch) {

		},
		touchEnd: function(touch) {

		}
	});
	Q.Card.extend("Support",{
		init: function(p) {
      this._super(p);
      this.on("drag");
      this.on("touchEnd");
		},
		drag: function(touch) {

		},
		touchEnd: function(touch) {

		}
	});
	Q.Card.extend("Event",{
		init: function(p) {
      this._super(p);
      this.on("drag");
      this.on("touchEnd");
		},
		drag: function(touch) {

		},
		touchEnd: function(touch) {

		}
	});

	Q.cardBuilder = {
		initCard: function(id, i) { // Optimization pending + var i is for testing
			if (Q.cardType[id] == "Character")
				return new Q.Character({path:Q.cardPath[id] + id + ".jpg", id: id, x: i * 52, y:400});
			else if (Q.cardType[id] == "Spell")
				return new Q.Spell(    {path:Q.cardPath[id] + id + ".jpg", id: id, x: i * 52, y:400});
			else if (Q.cardType[id] == "Support")
				return new Q.Support(  {path:Q.cardPath[id] + id + ".jpg", id: id, x: i * 52, y:400});
			else if (Q.cardType[id] == "Event")
				return new Q.Event(    {path:Q.cardPath[id] + id + ".jpg", id: id, x: i * 52, y:400});
			else
				console.log("Error: " + id + " is not registered");
		}
	}

}