;Quintus.Card_CardBuilder = function(Q) {
	
	Q.Sprite.extend("Card", {
		init: function(p) {
			this._super(p, { asset: p.path, type: 0 });
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

}