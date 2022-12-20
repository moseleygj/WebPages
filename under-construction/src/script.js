var imgLink = document.getElementById("mainImg");
function randomBG() {
  let randomNum = Math.floor(Math.random() * 4);
  switch (randomNum) {
    case 1:
      imgLink.style.background = "url('https://i.ibb.co/CQVdNCB/T0fK.gif')";
      imgLink.className = "ImgStyle";
      break;
    
    case 2:
      imgLink.style.background = "url('https://i.ibb.co/4fgnzB8/SVKl.gif')";
      imgLink.className = "ImgStyle";

      break;
      
      case 3:
      imgLink.style.background = "url('https://i.ibb.co/wKHFpgv/9xDF.gif')";
      imgLink.className = "ImgStyle";

      break;
      case 4:
      imgLink.style.background = "url('https://i.ibb.co/hWvGhw6/DO5.gif')";
      imgLink.className = "ImgStyle";
      break;
      
  }
}
