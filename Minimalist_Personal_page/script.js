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

function changeMyStyle(){
    alert("I've been summoned")
    const linkElement = document.querySelector('#theme-stylesheet');
    
    const currentHref = linkElement.href.split('/').pop();

    if (currentHref === 'style.css') {
      linkElement.href = 'style1.css';
    } else {
      linkElement.href = 'style.css';
    }
  }


// fix and compress later
function changeImg() {
    document.getElementById("avatarMain").src = "avatarWink.png";
}
function changeImg1() {
    document.getElementById("avatarMain").src = "avatarSmile.png";
}
function revert() {
    document.getElementById("avatarMain").src = "avatarDefault.png";
}
