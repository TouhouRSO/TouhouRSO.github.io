;
window.sampleDeck = $('#sampleDeck').load('data/sampleDeck.txt')[0];
window.sampleDeck.style.display="none";

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

    initGame();
  });
  
  function initGame() {

    Q.Error = [];
    // deckCheck(parseText(window.sampleDeck.innerHTML)); -> should be done before launching game
    setOwnDeck(parseText(window.sampleDeck.innerHTML));
    setOppDeck();
    setOwnLeader();
    setOppLeader();
    setOwnHand();
    setOppHand();
  }

  function parseText(deck) {
    return deck.slice(0, -1).split(", "); // slice to take out extra '\n' from github
  }
  function setOwnDeck(ids) { // Optimization pending
    for (var i = 0; i <= 43; i++)
      Q.OwnDeck.add(ids[i], i);

    Q.stage(Q.activeStage).insert(convertToBack(Q.OwnDeck.p.cards[0], Q.OwnDeck.p.x, Q.OwnDeck.p.y));
  }
  function setOppDeck() {
  }
  function setOwnLeader() {
  }
  function setOppLeader() {
  }
  function setOwnHand() {
  }
  function setOppHand() {
  }
  function convertToBack(card, dx, dy) {
    card.p.asset = Q.cardPath["back"];
    card.p.w = 104;
    card.p.h = 150;
    card.p.x = dx;
    card.p.y = dy;
    return card;
  }
}

/* Saved for future reference
  function deckCheck(ids) {

    
    //  Checked By Default:
    //  4 Characters
    //  1 Spell at least
    //  Max 3 copies for spell, support, event
    //  40 Non-characters
    
    var count = {"Spell":0, "Support":0, "Event":0};

    setOwnChara();

    for (var i = 0; i <= 43; i++) { count[Q.cardType[ids[i]]]++; }
    if (count["Character"] != 4) {

    }

  }

  function setOwnChara() {
    Q.ownChara    = {};
    Q.ownCharaIDs = [];
    for (var i = 0; i <= 43; i++) { 
      if (Q.cardType[ids[i]] == "Character") {
        Q.ownChara[Q.cardName[ids[i]]] = Q.ownChara[Q.cardName[ids[i]]] + 1 || 1;
        Q.ownCharaIDs.push(ids.splice(i, 1)[0]); // separate chara id from id list
        if (TotalChara(Q.ownChara) == 4) break;
      }
    }
  }

  function totalChara(h) {
    var sum = 0;
    for (k in h) sum += h[k];
    return sum;
  }
*/
