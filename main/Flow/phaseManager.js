;
var sampleDeck = $('#sampleDeck').load('data/sampleDeck.txt')[0];
sampleDeck.style.display="none";

Quintus.Flow_PhaseManager = function(Q) {

  Q.scene("startGame",function(stage) {  
    /* Implement Objects */

    Q.state.reset({phase: " Replenishing Phase ", turn: 0})

    //var bg = stage.insert(new Q.Character({ path: "Alice/Alice0600.jpg", id:"0600", x: 250, y: 300, z: 3,}));

    /* Init Layout */
    Q.OwnActiveCard   = stage.insert(new Q.ownActiveCard());
    Q.OppActiveCard   = stage.insert(new Q.oppActiveCard());
    Q.OwnDeck         = stage.insert(new Q.ownDeck());
    Q.OppDeck         = stage.insert(new Q.oppDeck());
    Q.OwnDiscard      = stage.insert(new Q.ownDiscard());
    Q.OppDiscard      = stage.insert(new Q.oppDiscard());
    // Q.OwnHand      = stage.insert(new Q.ownHand());
    // Q.OppHand      = stage.insert(new Q.oppHand());
    Q.Card            = stage.insert(new Q.infoCard());
    // Q.OwnHP        = stage.insert(new Q.ownHP());
    // Q.OppHP        = stage.insert(new Q.oppHP());
    // Q.OwnSP        = stage.insert(new Q.ownSP());
    // Q.OppSP        = stage.insert(new Q.oppSP());
    Q.Phase           = stage.insert(new Q.infoPhase()); /* Name in connected to PhaseEnd.click() */
    // Q.OwnPlayer    = stage.insert(new Q.ownPlayer());
    // Q.OppPlayer    = stage.insert(new Q.oppPlayer());
    Q.OwnLeadChar     = stage.insert(new Q.ownLeadChar());
    Q.OppLeadChar     = stage.insert(new Q.oppLeadChar());
    Q.PhaseEnd        = stage.insert(new Q.phaseEnd());
    Q.OwnOtherChar    = stage.insert(new Q.ownOtherChar());
    Q.OppOtherChar    = stage.insert(new Q.oppOtherChar());
    Q.OwnReserveCard  = stage.insert(new Q.ownReserveCard());
    Q.OppReserveCard  = stage.insert(new Q.oppReserveCard());
    // Q.Scene           = stage.insert(new Q.scene());

    initGame(sampleDeck.innerHTML);
  });
  
  function initGame(deck) {
    var cards = parseText(deck);

    var count = {"Character":0, "Spell":0, "Support":0, "Event":0};
    console.log(count);
    for (var card : cards) { count[Q.cardType[card]]++; }
    console.log(count);


  }

  function parseText(deck) {
    return deck.split(", ");
  }



}
