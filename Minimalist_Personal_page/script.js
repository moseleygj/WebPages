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
    const linkElement = document.querySelector('#theme-stylesheet');
    const currentHref = linkElement.href.split('/').pop();

    if (currentHref === 'style.css') {
      linkElement.href = 'style1.css';
      document.getElementById("genBtn").textContent="Turn the lights off!";
    } 
    else 
    {
      linkElement.href = 'style.css';
      document.getElementById("genBtn").textContent="Turn the lights on!";

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


//toggle for MenuBarTop
  function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
  }

  //show hash for resume section
  /*function showHash() {
    const hash = 'SHA256(PDF): b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9';
    const hashElement = document.getElementById('hash-value');
    hashElement.textContent = hash;
    hashElement.hidden = false;
  }
  */
  function showHash() {
    const hashPart1 = 'SHA256(PDF): b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7';
    const hashPart2 = 'SHA256(DOC): b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7';
    const hashElement = document.getElementById('hash-value');
    
    hashElement.innerHTML = `${hashPart1}<br>${hashPart2}`;  // Adding <br> to break the line
    hashElement.hidden = false;
  }