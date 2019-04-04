 var ab = document.querySelector("#dummy");

 function newNumbers() {
     for (var i = 0; i < 4; i++) {
         var result = (Math.floor(Math.random() * 9) + 1);
         alert("a = " + ab.innerHTML);
         console.log("result: " + result);
     }
 }