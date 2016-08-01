$(document).ready(function(){
  $("#start-game").click(function(){
    $(".memory-container").empty();
    var cards_array = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6"];
    cards_array = shuffle(cards_array);
    for (i=0; i < cards_array.length; i++){
      $(".memory-container").append("<div class=card><img src='img/" + cards_array[i] + ".png'></div>");
    }
  });
});
