function skills() {
  alert("skills");
  document.getElementById("skills").style.borderBottom = "1px solid orange";
  document.getElementById("skills").style.color = "red";
  document.getElementById("bottomLinks").style.display = "none";
}
function exp() {
    document.getElementById("myStory0").style.display = "none";

  document.getElementById("myStory1").style.display = "block";
  document.getElementById("myStory2").style.display = "none";
  document.getElementById("myStory3").style.display = "none";
  document.getElementById("myStory").style.display = "none";
}

function edu() {
  document.getElementById("myStory1").style.display = "none";
  document.getElementById("myStory3").style.display = "none";
    document.getElementById("myStory4").style.display = "none";

  document.getElementById("myStory0").style.display = "none";
  document.getElementById("myStory").style.display = "none";
  document.getElementById("myStory2").style.display = "block";
}

function skl() {
    document.getElementById("myStory0").style.display = "none";

  document.getElementById("myStory1").style.display = "none";
  document.getElementById("myStory2").style.display = "none";
  document.getElementById("myStory3").style.display = "block";
    document.getElementById("myStory4").style.display = "none";



}
function prt(){

}

function hme() {
  document.getElementById("myStory1").style.display = "none";
  document.getElementById("myStory2").style.display = "none";
  document.getElementById("myStory0").style.display = "block";
  document.getElementById("myStory").style.display = "none";
  document.getElementById("myStory3").style.display = "none";
  document.getElementById("myStory4").style.display = "none";


}
