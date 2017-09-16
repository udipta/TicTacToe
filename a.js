/*Wiktor K.*/
var scoreX = 0;
var scoreO = 0;
var player;

function changeBackground(){
    var r = Math.ceil(Math.random()*94)+75;
    var g = Math.ceil(Math.random()*100)+68;
    var b = Math.ceil(Math.random()*70)+50;
    document.body.style.backgroundColor = 'hsl('+r+','+g+'%,'+b+'%)';
}

function alert1(){

    alert("My first JS game! Let's try! Thanks for like! :) :) ");
    alert("After win/lose/draw click "+"Restart"+ "! And play again! :) ");
}

function start(){
    choosePlayer();
    currentPlayer();
    changeBackground();
    alert1();
}

setInterval(changeBackground, 8000);



function choosePlayer() {
    player = Math.floor(Math.random() * 2);
}
function currentPlayer() {
    if (player === 1) {
        document.getElementById("playerStatus").innerHTML = "Current player: X";
    } else if (player === 0) {
        document.getElementById("playerStatus").innerHTML = "Current player: O";
    }
}

window.onload = start;

/*Wiktor K.*/

function game(btn) {
    if (player === 1) {
        currentPlayer();
        document.getElementById(btn).value = "X";
        document.getElementById(btn).disabled = "disabled";
        winner();
        player -= 1;
        currentPlayer();

    } else if (player === 0) {
        currentPlayer();
        document.getElementById(btn).value = "O";
        document.getElementById(btn).disabled = "disabled";
        winner();
        player += 1;
        currentPlayer();
    }

}


function winner() {
    if (document.getElementById("btn1").value === "X" &&
        document.getElementById("btn2").value === "X" &&
        document.getElementById("btn3").value === "X"
    ) {
        alert("X WIN! Good job!");
        scoreX++;
        giveScoreX();
        addRestart();
        disableButton();

    } else if (
        document.getElementById("btn4").value === "X" &&
        document.getElementById("btn5").value === "X" &&
        document.getElementById("btn6").value === "X"
    ) {
        alert("X WIN! Good job!");
        scoreX++;
        giveScoreX();
        addRestart();
        disableButton();
    } else if (
        document.getElementById("btn7").value === "X" &&
        document.getElementById("btn8").value === "X" &&
        document.getElementById("btn9").value === "X"

    ) {
        alert("X WIN! Good job!");
        scoreX++;
        giveScoreX();
        addRestart();
        disableButton();
    } else if (
        document.getElementById("btn1").value === "X" &&
        document.getElementById("btn4").value === "X" &&
        document.getElementById("btn7").value === "X"
    ) {
        alert("X WIN! Good job!");
        scoreX++;
        giveScoreX();
        addRestart();
        disableButton();
    } else if (
        document.getElementById("btn2").value === "X" &&
        document.getElementById("btn5").value === "X" &&
        document.getElementById("btn8").value === "X"
    ) {
        alert("X WIN! Good job!");
        scoreX++;
        giveScoreX();
        addRestart();
        disableButton();
        /*Wiktor K.*/
    } else if (
        document.getElementById("btn3").value === "X" &&
        document.getElementById("btn6").value === "X" &&
        document.getElementById("btn9").value === "X"
    ) {
        alert("X WIN! Good job!");
        scoreX++;
        giveScoreX();
        addRestart();
        disableButton();
    } else if (
        document.getElementById("btn1").value === "X" &&
        document.getElementById("btn5").value === "X" &&
        document.getElementById("btn9").value === "X"
    ) {
        alert("X WIN! Good job!");
        scoreX++;
        giveScoreX();
        addRestart();
        disableButton();

    } else if (
        document.getElementById("btn3").value === "X" &&
        document.getElementById("btn5").value === "X" &&
        document.getElementById("btn7").value === "X")
    {
        alert("X WIN! Good job!");
        scoreX++;
        giveScoreX();
        addRestart();
        disableButton();
    } else if (document.getElementById("btn1").value === "O" &&
        document.getElementById("btn2").value === "O" &&
        document.getElementById("btn3").value === "O"
    ) {
        alert("O WIN! Good job!");
        scoreO++;
        giveScoreO();
        addRestart();
        disableButton();
        /*Wiktor K.*/

    } else if (
        document.getElementById("btn4").value === "O" &&
        document.getElementById("btn5").value === "O" &&
        document.getElementById("btn6").value === "O"
    ) {
        alert("O WIN! Good job!");
        scoreO++;
        giveScoreO();
        addRestart();
        disableButton();
    } else if (
        document.getElementById("btn7").value === "O" &&
        document.getElementById("btn8").value === "O" &&
        document.getElementById("btn9").value === "O"

    ) {
        alert("O WIN! Good job!");
        scoreO++;
        giveScoreO();
        addRestart();
        disableButton();
    } else if (
        document.getElementById("btn1").value === "O" &&
        document.getElementById("btn4").value === "O" &&
        document.getElementById("btn7").value === "O"
    ) {
        alert("O WIN! Good job!");
        scoreO++;
        giveScoreO();
        addRestart();
        disableButton();
    } else if (
        document.getElementById("btn2").value === "O" &&
        document.getElementById("btn5").value === "O" &&
        document.getElementById("btn8").value === "O"
    ) {
        alert("O WIN! Good job!");
        scoreO++;
        giveScoreO();
        addRestart();
        disableButton();
    } else if (
        document.getElementById("btn3").value === "O" &&
        document.getElementById("btn6").value === "O" &&
        document.getElementById("btn9").value === "O"
    ) {
        alert("O WIN! Good job!");
        scoreO++;
        giveScoreO();
        addRestart();
        disableButton();
    } else if (
        document.getElementById("btn1").value === "O" &&
        document.getElementById("btn5").value === "O" &&
        document.getElementById("btn9").value === "O"
    ) {
        alert("O WIN! Good job!");
        scoreO++;
        giveScoreO();
        addRestart();
        disableButton();

    } else if (
        document.getElementById("btn3").value === "O" &&
        document.getElementById("btn5").value === "O" &&
        document.getElementById("btn7").value === "O")
    {
        alert("O WIN! Good job!");
        scoreO++;
        giveScoreO();
        addRestart();
        disableButton();
    } else {
        addRestart();
    }


}

function restart() {
    document.getElementById("btn1").value = "";
    document.getElementById("btn2").value = "";
    document.getElementById("btn3").value = "";
    document.getElementById("btn4").value = "";
    document.getElementById("btn5").value = "";
    document.getElementById("btn6").value = "";
    document.getElementById("btn7").value = "";
    document.getElementById("btn8").value = "";
    document.getElementById("btn9").value = "";
    document.getElementById("btn1").disabled = "";
    document.getElementById("btn2").disabled = "";
    document.getElementById("btn3").disabled = "";
    document.getElementById("btn4").disabled = "";
    document.getElementById("btn5").disabled = "";
    document.getElementById("btn6").disabled = "";
    document.getElementById("btn7").disabled = "";
    document.getElementById("btn8").disabled = "";
    document.getElementById("btn9").disabled = "";

}

/*Wiktor K.*/

function addRestart() {
    document.getElementById("button").innerHTML = '<button onclick="' + 'restart()' + '" id="' + 'restart' + '">Restart!</button>'

}



function giveScoreX() {
    document.getElementById("scoreX").innerHTML = 'Score X = ' + scoreX + ' ';
    if (scoreX === 5){
        alert("You're amazing X !");
    } else if (scoreX === 10){
        alert("You're master X !!!");
    }
}

function giveScoreO() {
    document.getElementById("scoreO").innerHTML = 'Score O = ' + scoreO + ' ';
    if (scoreO === 5){
        alert("You're amazing O !");
    } else if (scoreO === 10){
        alert("You're master O !!!");

    }
    /*Wiktor .K.*/
    /*comment*/
}



function disableButton()
{
    document.getElementById("btn1").disabled = "disabled";
    document.getElementById("btn2").disabled = "disabled";
    document.getElementById("btn3").disabled = "disabled";
    document.getElementById("btn4").disabled = "disabled";
    document.getElementById("btn5").disabled = "disabled";
    document.getElementById("btn6").disabled = "disabled";
    document.getElementById("btn7").disabled = "disabled";
    document.getElementById("btn8").disabled = "disabled";
    document.getElementById("btn9").disabled = "disabled";

}