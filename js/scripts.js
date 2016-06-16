$(document).ready(function() {

  var suits = ["of hearts","of clubs", "of diamonds", "of spades"];
  var values = [2,3,4,5,6,7,8,9,10, "Jack", "Queen", "King", "Ace"]
  var fullDeck = [];

  // For each value, append to each suit, and push into fullDeck array

  suits.forEach(function(suit) {
    suit + values.forEach(function(value) {
      fullDeck.push(value + " " + suit);
    })
  });
  fullDeck.forEach(function(card) {
    $("#output").append("<li>" + card + "</li>");
  });
});
