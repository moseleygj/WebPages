
let numberz = document.querySelector("#luckyNumbers");
let fortune = document.querySelector("#fortuneTextContent");
let randomNumArray=[];
function newFortune(){
     randomNumArray.length=0; //empty the array
     console.log("hi. from the random number function!");
 
    for (num = 0;num < 6; num++){
    randomNumArray.push(Math.floor(Math.random()*49)+1);
    }
    numberz.innerHTML="";
        for (i = 0; i < randomNumArray.length; i++){
        numberz.innerHTML += randomNumArray[i]+",";
    }
    //find and remove the last comma
    numberz.innerHTML = numberz.innerHTML.slice(0,-1);
        console.log(numberz.innerHTML);
}
