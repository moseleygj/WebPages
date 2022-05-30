let names = [
    "Kevin",
    "Rebecca",
    "Kyla",
    "Gregg Sr",
    "Gregg Jr",
    "Omar Sr",
    "Darnell",
    "Mika",
    "Damarius",
    "Darell",
    "Tiffany",
    "Gordon",
    "Sherwayne",
    "Sharon",
    "sumaya",
    "Christepher",
    "Adriell",
    "christa",
    "Veronica"
]

function doWork(){
    //check if value is a numer and not negative or above number of people

    let win = document.getElementById("winners").value;
    //get amount of winners
    let winNames=[];
    let usedNames=[] //remove used


    for(i=0;i<win;i++){
        console.log("Length: "+ names.length)
        let random = Math.floor(Math.random() * names.length);
        //set random number
        if (names[random] === undefined){
            console.log("Whoops! Nobody Home")
        }
    else
        {
        usedNames += names[random] +", "
        winNames += names[random] + ", "
        console.log("Winners: " +winNames);
        console.log("used names:" +usedNames);
        //names.pop(random); //remove element
        names.splice(random,1)
        }
    }

    console.log("Winning Names: "+winNames)
    alert("Winning Names: "+winNames)

    console.log("Used Names: "+usedNames)
    console.log("All names: "+ names)
}    
