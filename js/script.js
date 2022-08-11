var buttonRock = document.getElementById("button-rock");
var buttonPaper = document.getElementById("button-paper");
var buttonScissors = document.getElementById("button-scissors");

function buttonClicked(buttonName) {
    clearMessages();
    console.log(buttonName + " został kliknięty");
    var randomNumber = Math.floor(Math.random()*3+1);

    function getMoveName(moveId) {
        if(moveId == 1) {
            return "kamień";
        }else if(moveId == 2) {
            return "papier";
        }else if(moveId == 3) {
            return "nożyce";
        }else {
            printMessage("Nieznany ruch");
            return "kamień";
        }
    }

    function displayResult(playerMove, computerMove) {
        if (playerMove == "papier" && computerMove == "kamień") {
            printMessage("Wygrywasz!");
        }else if (playerMove == "papier" && computerMove == "kamień") {
            printMessage("Wygrywasz!");
        }else if (playerMove == "papier" && computerMove == "kamień") {
            printMessage("Wygrywasz!");
        }else if (playerMove == computerMove) {
            printMessage("Remis!");
        }else {printMessage("Przegrywasz!");}
    }

    displayResult(buttonName, getMoveName(randomNumber));
}

buttonRock.addEventListener("click", function() {buttonClicked("kamień")})
buttonPaper.addEventListener("click", function() {buttonClicked("papier")})
buttonScissors.addEventListener("click", function() {buttonClicked("nożyce")})