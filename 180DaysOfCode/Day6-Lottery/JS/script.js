 function newNumbers() {
     //Pick-4
     for (var i = 0; i < 4; i++) {
         var p4 = (Math.floor(Math.random() * 9) + 1);

         if (p4 < 10) {
             p4 = "0" + p4;
             console.log("Pick-4 result " + i + ": " + p4);
         } else {
             console.log("Pick-4 result " + i + ": " + p4);
         }
     }

     //Powerball
     for (var i = 0; i < 5; i++) {
         var pb = (Math.floor(Math.random() * 69) + 1);
         if (pb < 10) {
             pb = "0" + pb;
             console.log("Powerball result " + i + ": " + pb);
         } else {
             console.log("Powerball result " + i + ": " + pb);
         }
     }

     //PowerBallRedball
     for (var i = 0; i < 1; i++) {
         var redPB = (Math.floor(Math.random() * 26) + 1);
         if (redPB < 10) {
             redPB = "0" + p5Num;
             console.log("PowerBall (RED) result: " + redPB);
         } else {
             console.log("PowerBall (RED) result: " + redPB);
         }
     }

     //Pick-5
     for (var p5 = 0; p5 < 5; p5++) {
         var p5Num = (Math.floor(Math.random() * 9) + 1);
         if (p5Num < 10) {
             p5Num = "0" + p5Num;
             console.log("Pick-5 result " + p5 + ": " + p5Num);
         } else {
             console.log("Pick-5 result " + p5 + ": " + p5Num);
         }
     }

 }