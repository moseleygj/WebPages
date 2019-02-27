let numberz = document.querySelector("#luckyNumbers");
let fortune = document.querySelector("#fortuneTextContent");
let button = document.querySelector("#fortuneBtn");
let fortunePaper = document.getElementById("fc1");
let fortunePaper2 = document.getElementById("fc2");

let randomNumArray=[];
let ran = 0;

function firstRun()
{
    //Trigger the counter so  function runs only once. 1=true,0=false
if (ran == 1 ){
    console.log("if clause ran");
    newFortune();
    } 
else{

    button.innerHTML="Another fortune?";
    ran=1;
   newFortune();    
    }
    
}

function newFortune(){
     randomNumArray.length=0; //EMPTY THE ARRAY
      
    for (num = 0; num < 6; num++){
        randomNumArray.push(Math.floor(Math.random() * 49) + 1);
    }

    numberz.innerHTML = "";

    for (i = 0; i < randomNumArray.length; i++){
        numberz.innerHTML += randomNumArray[i] + ", ";
    }
      numberz.innerHTML = numberz.innerHTML.slice(0, -2);  //REMOVE LAST COMMA
      loadJSON();
}

function loadJSON(){
var data_file = "fortuneCookie.json";
var http_request = new XMLHttpRequest();
try{
    
    http_request = new XMLHttpRequest();    //opera, FireFox, Chrome, Safari
}
catch (e){
    //Internet Explorer Browsers
    try{
        http_request = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e) {
        try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
        }catch (e){
            //something went wrong
            alert("Your Browser Broke!");
            return false;
        }
    }
}
http_request.onreadystatechange = function(){
    if (http_request.readyState == 4){
        var jsonObj = JSON.parse(http_request.responseText);    //JS function JSON.parse to parse JSON data
        //jsonObj varibale now contains the data structre and can
        //be accessed as jsonObj. ...
        let maxJSONElements = jsonObj.length - 1;
       console.log(maxJSONElements);
       let rand=Math.floor(Math.random() * maxJSONElements ) + 1; 
         
       fortune.innerHTML = jsonObj[rand];
    }
}

http_request.open("GET", data_file, true);
http_request.send();
}
let runOnce=0;
$(document).ready(function(){
   
    $(button).click(function(){      
        $("#fc1").fadeIn(900);
        $("#fc2").fadeIn(1000);
        $(".fortuneText").fadeOut(10).fadeIn(1000);     
    });

});