function skills() {
    alert("skills");
    document.getElementById("skills").style.color = "red";
    document.getElementById("middlePortion").style.height = "auto";
    document.getElementById("myStory1").style.display = "none";
    document.getElementById("myStory1").style.opacity = "0";
    document.getElementById("myStory1").style.display = "none";
    /* document.getElementById("bottomLinks").style.display = "none";*/
}

function exp() {
    /*document.getElementById("myStory0").style.display = "none";
    document.getElementById("myStory1").style.display = "block";
    document.getElementById("myStory2").style.display = "none";
    document.getElementById("myStory3").style.display = "none";
    document.getElementById("myStory").style.display = "none";*/
    document.getElementById("myStory0").style.opacity = "0";
    document.getElementById("myStory1").style.opacity = "1";
    document.getElementById("myStory1").style.display = "block";
    /*document.getElementById("middlePortion").style.height = "3200px";*/
    document.getElementById("myStory2").style.opacity = "0";
    document.getElementById("myStory3").style.display = "none";
    document.getElementById("myStory3").style.opacity = "0";
    document.getElementById("myStory").style.opacity = "0";
}

function edu() {
    /*
    document.getElementById("myStory1").style.display = "none";
    document.getElementById("myStory3").style.display = "none";
    document.getElementById("myStory4").style.display = "none";
    document.getElementById("myStory0").style.display = "none";
    document.getElementById("myStory").style.display = "none";
    document.getElementById("myStory2").style.display = "block";*/
    document.getElementById("myStory0").style.opacity = "0";
    document.getElementById("myStory1").style.opacity = "0";
    document.getElementById("myStory2").style.opacity = "1";
    document.getElementById("myStory2").style.display = "block";
    document.getElementById("myStory1").style.display = "none"
    document.getElementById("myStory3").style.opacity = "0";
    document.getElementById("myStory").style.opacity = "0";
    document.getElementById("middlePortion").style.height = "auto";
    document.getElementById("myStory1").style.display = "none";
    document.getElementById("sklLink").style.textDecoration = "none";
    document.getElementById("eduLink").style.textDecoration = "unerline";
    document.getElementById("expLink").style.textDecoration = "none";
    document.getElementById("prtLink").style.textDecoration = "none";
    document.getElementById("hmeLink").style.textDecoration = "none";
}

function skl() {
    document.getElementById("middlePortion").style.height = "auto";
    document.getElementById("myStory1").style.display = "none";
    /*  
  document.getElementById("myStory0").style.display = "none";
    document.getElementById("myStory1").style.display = "none";
    document.getElementById("myStory2").style.display = "none";
    document.getElementById("myStory3").style.display = "block";
    document.getElementById("myStory4").style.display = "none";
*/
    document.getElementById("myStory1").style.opacity = "0";
    document.getElementById("myStory1").style.display = "none";
    document.getElementById("myStory0").style.opacity = "0";
    document.getElementById("myStory1").style.opacity = "0";
    document.getElementById("myStory2").style.opacity = "0";
    document.getElementById("myStory3").style.display = "block";
    document.getElementById("myStory3").style.opacity = "1";
    /*document.getElementById("myStory3").style.display = "block"*/
    document.getElementById("myStory").style.opacity = "0";
    document.getElementById("myStory1").style.display = "none"
    document.getElementById("sklLink").style.textDecoration = "underline";
    document.getElementById("eduLink").style.textDecoration = "none";
    document.getElementById("expLink").style.textDecoration = "none";
    document.getElementById("prtLink").style.textDecoration = "none";
    document.getElementById("hmeLink").style.textDecoration = "none";
}

function prt() {
    alert("portfolio link will be here!");
}

function hme() {
    /*document.getElementById("myStory").style.opacity = "0";*/
    document.getElementById("myStory0").style.opacity = "1";
    document.getElementById("myStory0").style.display = "block";
    document.getElementById("myStory1").style.opacity = "0";
    document.getElementById("myStory2").style.opacity = "0";
    document.getElementById("myStory3").style.opacity = "0";
    document.getElementById("sklLink").style.textDecoration = "none";
    document.getElementById("eduLink").style.textDecoration = "none";
    document.getElementById("expLink").style.textDecoration = "none";
    document.getElementById("prtLink").style.textDecoration = "none";
    document.getElementById("hmeLink").style.textDecoration = "underline";
}