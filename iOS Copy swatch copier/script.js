function copyColorHex(a){
  let color = document.getElementById(a).innerHTML;
  navigator.clipboard.writeText(color);
  alert("HEX: "+color +" copied!");
}

function copyColorRGB(a){
  let color = document.getElementById(a).innerHTML;
  navigator.clipboard.writeText(color);
  alert("RGB: "+color +" copied!");
}
