
let numberz = document.querySelector("#luckyNumbers");
let fortune = document.querySelector("#fortuneTextContent");
let randomNumArray=[];
function newFortune(){
     randomNumArray.length=0; //EMPTY ARRAY
      
    for (num = 0; num < 6; num++){
        randomNumArray.push(Math.floor(Math.random() * 49) + 1);
    }

    numberz.innerHTML = "";

    for (i = 0; i < randomNumArray.length; i++){
        numberz.innerHTML += randomNumArray[i] + ",";
    }
      numberz.innerHTML = numberz.innerHTML.slice(0, -1);  //REMOVE LAST COMMA
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
        //be accessed as jsonObj.name and jsonObj.country.
       let rand=Math.floor(Math.random()*254)+1;
        document.getElementById("fortuneTextContent").innerHTML = jsonObj[rand];
    }
}

http_request.open("GET", data_file, true);
http_request.send();
}