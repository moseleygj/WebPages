function switchCSS()
{

}

let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();

console.log(hour + ":" + minute);let formattedTime = now.toLocaleTimeString();
function whatsTheTime(){
document.getElementById("timeNow").innerHTML=hour+":"+minute+" - EST";
}

function changeImg()
{
    document.getElementById("avatarMain").src="avatarWink.png";
}

function revert(){
    document.getElementById("avatarMain").src="avatarDefault.png";

}