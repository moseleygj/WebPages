 function changeIcnHoverG() {
     document.getElementById("git").src = "github-6-xxlB.png";
     document.getElementById("gh-name").style.color = "skyblue";
 }

 function changeIcnNoHoverG() {
     document.getElementById("git").src = "github-6-xxl.png";
     document.getElementById("gh-name").style.color = "#777";
 }

 function changeIcnHoverP() {
     document.getElementById("photo").src = "";
     document.getElementById("photo-name").style.color = "#777";
 }

 function changeIcnNoHoverP() {
     document.getElementById("photo").src = "";
     document.getElementById("photo-name").style.color = "#777";
 }

 function changeIcnHoverR() {
     document.getElementById("resume").src = "038-doc.png";
     document.getElementById("resume-name").style.color = "skyblue";
 }

 function changeIcnNoHoverR() {
     document.getElementById("resume").src = "038-doc1.png";
     document.getElementById("resume-name").style.color = "#777";
 }

 function changeIcnHoverE() {
     document.getElementById("email").src = "008-letter-1.png";
     document.getElementById("email-name").style.color = "skyblue";
 }

 function changeIcnNoHoverE() {
     document.getElementById("email").src = "008-letter-0.png";
     document.getElementById("email-name").style.color = "#777";
 }
 document.getElementById("git").style.transition = "1s";
 document.getElementById("photo").style.transition = "1s";
 document.getElementById("resume").style.transition = "1s";