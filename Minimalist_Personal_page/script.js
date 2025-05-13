function switchCSS() {
    // Add functionality here if needed.
}

function whatsTheTime() {
  const now = new Date();
  let hour = now.getHours();
  const minute = now.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  // Convert 24-hour format to 12-hour format
  hour = hour % 12;
  hour = hour ? hour : 12; // Handle midnight (0 hour) as 12

  const newMinutes = minute < 10 ? '0' + minute : minute;

  document.getElementById("timeNow").innerHTML = hour + ":" + newMinutes + " " + ampm + " EST";
}

// You can also use toLocaleTimeString for a more localized approach:
function whatsTheTimeLocalized() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  document.getElementById("timeNow").innerHTML = formattedTime + " EST";
}

// Call one of these functions to update the time on your page
whatsTheTime(); // Or whatsTheTimeLocalized();

function changeMyStyle(){
    const linkElement = document.querySelector('#theme-stylesheet');
    const currentHref = linkElement.href.split('/').pop();

    if (currentHref === 'style-dark.css') {
      linkElement.href = 'style-light.css';
      document.getElementById("genBtn").textContent="Turn the lights off!";
    } 
    else 
    {
      linkElement.href = 'style-dark.css';
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
  console.log(" I see you taking a look at the recipe... ;-) ");