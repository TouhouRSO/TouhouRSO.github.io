;Quintus.Card_CardBuilder = function(Q) {

	Q.Sprite.extend("Card", {
		init: function(p) {
			this._super(p, { asset: p.path, scale:0.5, w: 104, h: 150, cx:104, cy:150});
			this.on("drag");
			this.on("touchEnd");
			this.p.name = Q.cardName[p.id];
			this.p.back = false;

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
		initCard: function(id, dx, dy) { // Optimization pending
			switch (Q.cardType[id]) {
				case "Character":
				return new Q.Character({path:Q.cardPath[id] + id + ".jpg", id: id, x: dx, y:dy});
				case "Spell":
				return new Q.Spell(    {path:Q.cardPath[id] + id + ".jpg", id: id, x: dx, y:dy});
				case "Support":
				return new Q.Support(  {path:Q.cardPath[id] + id + ".jpg", id: id, x: dx, y:dy});
				case "Event":
				return new Q.Event(    {path:Q.cardPath[id] + id + ".jpg", id: id, x: dx, y:dy});
				default:
				console.log("Error: " + id + " is not registered");
			}
		},
		front: function(card) {
			card.p.asset = card.p.path;
			card.p.back = false;
			return card;
		},
		back: function(card) {
	    card.p.asset = Q.cardPath["back"];
	    card.p.back = true;
	    return card;
	  },
	  flip: function(card) {
	  	card.p.back ? front(card) : back(card);
	  	return card;
	  }
	}
}