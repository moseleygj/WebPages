let response = document.querySelector("#response");
var rn = (Math.floor(Math.random() * 100) + 1);

function randomNumberGuess() {
    let txtNum = document.getElementById("guessNum");
    let tries = document.getElementById("tries");

    if (tries.innerHTML <= 0) { alert("You Lose!");
        exit; }
    console.log(rn);
    console.log(txtNum.value);

    if (Number(txtNum.value) < rn) {
        response.innerHTML = "<font color='red'>Nope, That number is too low...</font>";
        tries.innerHTML--;
    } else if (Number(txtNum.value) > rn) {
        response.innerHTML = "<font color='red'>Nope, That number is too High...</font>";
    } else if (Number(txtNum.value) == rn) {
        response.innerHTML = "<font color='green'>Yes, That number is correct!</font>";
        alert("You Win!");
    } else {
        response.innerHTML = "Error";
    }

}