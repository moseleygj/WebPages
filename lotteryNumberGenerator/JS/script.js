
//pick4
let pick4=[];
 pick4[0] = document.querySelector("#num1p4");
 pick4[1] = document.querySelector("#num1p4");
 pick4[2] = document.querySelector("#num2p4");
 pick4[3] = document.querySelector("#num3p4");


  //pick5
  let pick5=[];
  pick5[0]= document.querySelector("#num1p5");
  pick5[1] = document.querySelector("#num2p5");
  pick5[2] = document.querySelector("#num3p5");
  pick5[3] = document.querySelector("#num4p5");
  pick5[4] = document.querySelector("#num5p5");
  //powerball5
  let powerball=[];

powerball[0] = document.querySelector("#num1pb");
powerball[1] = document.querySelector("#num2pb");
powerball[2] = document.querySelector("#num3pb");
powerball[3] = document.querySelector("#num4pb");
powerball[4] = document.querySelector("#num5pb");

let PBR=[];
PBR[0]=document.querySelector("#num6pb");


  function newNumbers() {
     //Pick-4
     for (var i = 0; i < 4; i++) {
         var p4 = (Math.floor(Math.random() * 9) + 1);

         if (p4 < 10) {
             p4 = "0" + p4;
             console.log("Pick-4 result " + i + ": " + p4);
             console.log("array:"+pick4[i].innerHTML);
             pick4[i].innerHTML=p4;
            // n1p4.innerHTML=p4;

         } else {
             console.log("Pick-4 result " + i + ": " + p4);
             res1="n"+i+"p4";
             pick4[i].innerHTML=p4;

         }
     }

     //Powerball
     for (var i = 0; i < 5; i++) {
         var pb = (Math.floor(Math.random() * 69) + 1);
         if (pb < 10) {
             pb = "0" + pb;
             powerball[i].innerHTML=pb;
             console.log("Powerball result " + i + ": " + pb);
         } else {
             console.log("Powerball result " + i + ": " + pb);
             powerball[i].innerHTML=pb;

         }
     }

     //PowerBallRedball
     for (var i = 0; i < 1; i++) {
         var redPB = (Math.floor(Math.random() * 26) + 1);
         if (redPB < 10) {
             redPB = "0" + redPB;
             PBR[i].innerHTML=redPB;
             console.log("PowerBall (RED) result: " + redPB);
         } else {
             console.log("PowerBall (RED) result: " + redPB);
             PBR[i].innerHTML=redPB;

         }
     }

     //Pick-5
     for (var i = 0; i < 5; i++) {
        var p5 = (Math.floor(Math.random() * 69) + 1);
        if (p5 < 10) {
            p5 = "0" + p5;
            pick5[i].innerHTML=p5;
            console.log("Powerball result " + i + ": " + p5);
        } else {
            console.log("Powerball result " + i + ": " + p5);
            pick5[i].innerHTML=p5;
        }
    }

 }