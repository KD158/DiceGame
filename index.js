var playButton = document.querySelector("#playButton")
var title = document.querySelector(".title")

var dot00 = document.querySelectorAll(".dotline0 .dot0")
var dot02 = document.querySelectorAll(".dotline0 .dot2")
var dot10 = document.querySelectorAll(".dotline1 .dot0")
var dot11 = document.querySelectorAll(".dotline1 .dot1")
var dot12 = document.querySelectorAll(".dotline1 .dot2")
var dot20 = document.querySelectorAll(".dotline2 .dot0")
var dot22 = document.querySelectorAll(".dotline2 .dot2")

var die1 = [[dot00[0], dot02[0]],
            [dot10[0], dot11[0], dot12[0]],
            [dot20[0], dot22[0]]]

var die2 = [[dot00[1], dot02[1]],
            [dot10[1], dot11[1], dot12[1]],
            [dot20[1], dot22[1]]]


function roll() {
    return Math.floor(Math.random() * 6) + 1
}

function getResult() {
    var die1Result = roll()
    var die2Result = roll()

    return [die1Result, die2Result]
}

function setDieScore1(die) {
    die[0][0].style.visibility = "hidden"
    die[0][1].style.visibility = "hidden"
    die[1][0].style.visibility = "hidden"
    die[1][1].style.visibility = "visible"
    die[1][2].style.visibility = "hidden"
    die[2][0].style.visibility = "hidden"
    die[2][1].style.visibility = "hidden"
}
function setDieScore2(die) {
    die[0][0].style.visibility = "visible"
    die[0][1].style.visibility = "hidden"
    die[1][0].style.visibility = "hidden"
    die[1][1].style.visibility = "hidden"
    die[1][2].style.visibility = "hidden"
    die[2][0].style.visibility = "hidden"
    die[2][1].style.visibility = "visible"
}
function setDieScore3(die) {
    die[0][0].style.visibility = "visible"
    die[0][1].style.visibility = "hidden"
    die[1][0].style.visibility = "hidden"
    die[1][1].style.visibility = "visible"
    die[1][2].style.visibility = "hidden"
    die[2][0].style.visibility = "hidden"
    die[2][1].style.visibility = "visible"
}
function setDieScore4(die) {
    die[0][0].style.visibility = "visible"
    die[0][1].style.visibility = "visible"
    die[1][0].style.visibility = "hidden"
    die[1][1].style.visibility = "hidden"
    die[1][2].style.visibility = "hidden"
    die[2][0].style.visibility = "visible"
    die[2][1].style.visibility = "visible"
}
function setDieScore5(die) {
    die[0][0].style.visibility = "visible"
    die[0][1].style.visibility = "visible"
    die[1][0].style.visibility = "hidden"
    die[1][1].style.visibility = "visible"
    die[1][2].style.visibility = "hidden"
    die[2][0].style.visibility = "visible"
    die[2][1].style.visibility = "visible"
}
function setDieScore6(die) {
    die[0][0].style.visibility = "visible"
    die[0][1].style.visibility = "visible"
    die[1][0].style.visibility = "visible"
    die[1][1].style.visibility = "hidden"
    die[1][2].style.visibility = "visible"
    die[2][0].style.visibility = "visible"
    die[2][1].style.visibility = "visible"
}


function displayResult(result) {
    var player1Score= result[0]
    var player2Score= result[1]

    if (player1Score != 6) {
        if (player1Score != 5) {
            if (player1Score != 4) {
                if (player1Score != 3) {
                    if (player1Score != 2) {
                        setDieScore1(die1)
                    } else setDieScore2(die1)
                } else setDieScore3(die1)
            } else setDieScore4(die1)
        } else setDieScore5(die1)
    } else setDieScore6(die1)

    if (player2Score != 6) {
        if (player2Score != 5) {
            if (player2Score != 4) {
                if (player2Score != 3) {
                    if (player2Score != 2) {
                        setDieScore1(die2)
                    } else setDieScore2(die2)
                } else setDieScore3(die2)
            } else setDieScore4(die2)
        } else setDieScore5(die2)
    } else setDieScore6(die2)
}

function displayWinner(result) {
    if (result[0] != result[1]) {
        if (result[0] > result[1]) {
            title.innerHTML= "<i class='fa-solid fa-flag flag flipped icon-spacer-right'></i>  Player 1 Wins!"
        } else title.innerHTML= "Player 2 Wins! <i class='fa-solid fa-flag flag icon-spacer-left'></i>"
    } else title.innerHTML= "<i class='fa-solid fa-flag flag flipped icon-spacer-right'></i> It's a Draw! <i class='fa-solid fa-flag flag icon-spacer-left'></i>"
}

function changePlayButton() {
    playButton.innerHTML = "<i class='fa-solid fa-rotate-right icon-spacer-right'></i> Play Again!"
}

// function play() {
    
// }



playButton.addEventListener("click", function() {
    var result = getResult()
    displayResult(result)
    displayWinner(result)
    changePlayButton()
})