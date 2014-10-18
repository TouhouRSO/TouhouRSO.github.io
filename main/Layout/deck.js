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
      this.p.cards.push(Q.cardBuilder.initCard(id, this.p.x, this.p.y));
      Q.stage(Q.activeStage).insert(Q.cardBuilder.back(this.p.cards[i]));
    },
    shuffle: function() {
      for(var i = this.p.cards.length, j, k; i;) {
        j = Math.floor(Math.random() * i);
        k = this.p.cards[--i];
        this.p.cards[i] = this.p.cards[j];
        this.p.cards[j] = k;
      }
    },
    take: function(type) {
      var result = [];
      switch(type) {
        case "Character":
        case "Spell":
        case "Support":
        case "Event":
        for (var i = 0; i < this.p.cards.length; i++)
          if (this.p.cards[i].className == type) {
            result.push(this.p.cards[i]);
            this.p.cards.splice(i, 1);
          }
        default: // for card id
        for (var i = 0; i < this.p.cards.length; i++)
          if (this.p.cards[i].id == type) {
            result.push(this.p.cards[i]);
            this.p.cards.splice(i, 1);
          }
      }
      return result;
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
