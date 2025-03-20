function switchCSS() {
    // Add functionality here if needed.
}

let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let newMinutes = minute < 10 ? '0' + minute : minute;

console.log(hour + ":" + newMinutes);

let formattedTime = now.toLocaleTimeString();

function whatsTheTime() {
    document.getElementById("timeNow").innerHTML = hour + ":" + newMinutes + " - EST";
}

function changeImg() {
    document.getElementById("avatarMain").src = "avatarWink.png";
}

function revert() {
    document.getElementById("avatarMain").src = "avatarDefault.png";
}
