var wordlList = ["APPLE", "BERRY", "PANDA", "DATES", "GRAPE", "HONEY", "INDIA", "JUICE"];

// 1. Generate a word at the start of the game
var randomWord = wordlList[Math.floor(Math.random() * wordlList.length)];

// 2. Capture users input, save as string or list
var userInput = "";


$("body").keypress(function(Event) {
    userInput += Event.key;
    $(".t1").html("<h2 class='tile-content'>"+Event.key+"</h2>")
});
// 3. Compare users input to random word, change input background accordingly
// 4. Initiate next input sequence
function wordCompare() {

}