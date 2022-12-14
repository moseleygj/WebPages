
function checkOnlineStatus() {
  var x = navigator.onLine;
  if (x == true) {
    console.log(x);
    document.getElementById("stat").innerHTML = "ONLINE &nbsp 😄 ";
    document.getElementById("onlineBar").style.background = "linear-gradient(to right, darkgreen, green, darkgreen)";
  } else if (x == false) {
   document.getElementById("stat").innerHTML = "OFFLINE &nbsp 😢!";
   document.getElementById("onlineBar").style.background = "linear-gradient(to right, red, red, red)";
  } else {
    document.getElementById("stat").innerHTML = "ERROR!";
  }
  /*check online status every 5 sec*/
  setTimeout(checkOnlineStatus, 5000);
}

checkOnlineStatus();
