var wordList = ["apple", "panda", "dates", "grape", "india"];
// Game status:


// 1. Generate a word at the start of the game
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

// 2. Capture users input, save as string or list
var userInput = "";
var inputIndex = 1;

$("body").keydown(function(Event) {
    if (/^[a-zA-Z]$/.test(Event.key)) {
        if (userInput.length < 5) {
        userInput += Event.key;
        $(".t"+inputIndex).html("<h2 class='tile-content'>"+Event.key+"</h2>")
        inputIndex++;
        }
    }
    else if ((Event.key == "Enter") && (userInput.length == 5)) {
        wordCompare();
    }
    else if ((Event.key == "Backspace") && (userInput.length > 0)) {
        userInput = userInput.slice(0, -1);
        $(".t"+(inputIndex-1)).html("<h2 class='tile-content'> </h2>")
        inputIndex--;
    }
});

// 3. Compare users input to random word, change input background accordingly
// 4. Initiate next input sequence
var tileCounter = 1;
function wordCompare() {
    for (var i = 0; i < 5; i++) {
        if (userInput[i] == randomWord[i]) {
            $(".t"+tileCounter).css("background-color", "#6AAA64");
        } else if (randomWord.includes(userInput[i])) {
            $(".t"+tileCounter).css("background-color", "#C9B458");
        } else {
            $(".t"+tileCounter).css("background-color", "#787C7E");
        }
        tileCounter++;
    }
    if (userInput == randomWord) {
        $("h1").text("Congratulations! You guessed the word!");
        $(".bottom-section").html("<button class='restart-btn'>New Game</button>")
        // location.reload()
    }
    if (tileCounter > 30) {
        $("h1").text("Game Over! The word was: " + randomWord);
        $(".bottom-section").html("<button class='restart-btn'>New Game</button>")
        // location.reload()
    }
    userInput = "";
}

$(document).on("click", ".restart-btn", function() {
    location.reload();
});

