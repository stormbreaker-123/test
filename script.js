var chance = "Player 1";
let chance2 = document.getElementById("chance")
chance2.innerHTML = chance + "'s chance"
var disablebtn = 0

function check() {

    let btn1 = document.getElementById("btn1").innerHTML
    let btn2 = document.getElementById("btn2").innerHTML
    let btn3 = document.getElementById("btn3").innerHTML
    let btn4 = document.getElementById("btn4").innerHTML
    let btn5 = document.getElementById("btn5").innerHTML
    let btn6 = document.getElementById("btn6").innerHTML
    let btn7 = document.getElementById("btn7").innerHTML
    let btn8 = document.getElementById("btn8").innerHTML
    let btn9 = document.getElementById("btn9").innerHTML
    let result = document.getElementById("result")

    if (btn1 === "X" && btn2 === "X" && btn3 === "X") {
       
        chance2.innerHTML = "Player 1 Won"
        disable()

    }
    else if (btn4 === "X" && btn5 === "X" && btn6 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }
    else if (btn7 === "X" && btn8 === "X" && btn9 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }
    else if (btn1 === "X" && btn4 === "X" && btn7 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }
    else if (btn2 === "X" && btn5 === "X" && btn8 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }
    else if (btn3 === "X" && btn6 === "X" && btn9 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }
    else if (btn1 === "X" && btn5 === "X" && btn9 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }
    else if (btn3 === "X" && btn5 === "X" && btn7 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }

    else if (btn1 === "X" && btn2 === "X" && btn3 === "X")
    {
        chance2.innerHTML = "Player 1 Won"
        disable()
    }
    else if (btn4 === "X" && btn5 === "X" && btn6 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }
    else if (btn7 === "X" && btn8 === "X" && btn9 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }
    else if (btn1 === "X" && btn4 === "X" && btn7 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }
    else if (btn2 === "X" && btn5 === "X" && btn8 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }
    else if (btn3 === "X" && btn6 === "X" && btn9 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }
    else if (btn1 === "X" && btn5 === "X" && btn9 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }
    else if (btn3 === "X" && btn5 === "X" && btn7 === "X") {

        chance2.innerHTML = "Player 1 Won"
        disable()
    }

    //FOR O

    else if (btn1 === "O" && btn2 === "O" && btn3 === "O") {

        chance2.innerHTML = "Player 2 Won"
        disable()
    }
    else if (btn4 === "O" && btn5 === "O" && btn6 === "O") {
        2
        chance2.innerHTML = "Player 2 Won"
        disable()
    }
    else if (btn7 === "O" && btn8 === "O" && btn9 === "O") {

        chance2.innerHTML = "Player 2 Won"
        disable()
    }
    else if (btn1 === "O" && btn4 === "O" && btn7 === "O") {

        chance2.innerHTML = "Player 2 Won"
        disable()
    }
    else if (btn2 === "O" && btn5 === "O" && btn8 === "O") {

        chance2.innerHTML = "Player 2 Won"
        disable()
    }
    else if (btn3 === "O" && btn6 === "O" && btn9 === "O") {

        chance2.innerHTML = "Player 2 Won"
        disable()
    }

    else if (btn1 === "O" && btn5 === "O" && btn9 === "O") {

        chance2.innerHTML = "Player 2 Won"
        disable()
    }
    else if (btn3 === "O" && btn5 === "O" && btn7 === "O") {

        chance2.innerHTML = "Player 2 Won"

        disable()
    }

    else if (disablebtn === 9) {
        chance2.innerHTML = "Game Draw!"
    }


}

function insert(id) {

    if (chance === "Player 1") {

        var a = document.getElementById(id)
        a.innerHTML = "X"
        a.disabled = true
        chance = "Player 2"
        let chance2 = document.getElementById("chance")
        chance2.innerHTML = chance + "'s chance"
        disablebtn += 1
        check()


    }

    else if (chance === "Player 2") {
        var b = document.getElementById(id)
        b.innerHTML = "O"
        chance = "Player 1"
        b.disabled = true
        let chance2 = document.getElementById("chance")
        chance2.innerHTML = chance + "'s chance"
        disablebtn += 1
        check()


    }
}

function disable() {

    for (var i = 1; i < 10; i++) {
        var id = "btn" + i
        document.getElementById(id).disabled = true

    }
}

function reset() {

    for (let i = 1; i < 10; i++) {
        var id = "btn" + i
        document.getElementById(id).disabled = false
        var r = document.getElementById(id)
        r.innerHTML = " "

    }
    document.getElementById("result").innerHTML = ""

    chance = "Player 1"
    document.getElementById("chance").innerHTML = "Player 1's chance"
    disablebtn = 0
}






