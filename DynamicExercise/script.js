let water = 'url("https://www.verywellfit.com/thmb/G_PLH6g6WFNoNbyCYOAmnt1HEUY=/1500x1000/filters:fill(FFDB5D,1)/Verywell-42-3498282-Pushup01-1596-5994a0f8519de20010b3bdd3.gif")';
let tricepDips =
    'url("https://s-media-cache-ak0.pinimg.com/originals/92/3d/b0/923db0d91c116bf6a0364c10a75bc860.gif")';
let BicycleCrunch =
    'url("https://www.fit-trainers.com/wp-content/uploads/2017/10/BICYCLES.gif")';
let jumpTucks =
    'url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/221-tuck-jumps-1550761015.gif?crop=0.5633333333333334xw:1xh;center,top&resize=480:*")';
let russainTwist =
    'url("https://www.gymguider.com/wp-content/uploads/2020/03/russian-twist.gif")';
let wallSit =
    'url("https://cdn.mos.cms.futurecdn.net/npUVwgYvTLKPjnTcGpRLJH.jpg")';
let jumpSquat =
    'url("https://www.forhealthylifestyle.com/wp-content/uploads/2020/06/1-3.gif")';
let sidePlank =
    'url("https://www.gymguider.com/wp-content/uploads/2019/04/side-plank.gif")';
let burpees = 'url("https://www.icegif.com/wp-content/uploads/icegif-99.gif")';
let mountainClibers = 'url("https://i.pinimg.com/originals/ee/19/b6/ee19b66eeab9a9d9f8d3f7ea3b16679b.gif")';
let jumpLunge =
    'url("https://www.verywellfit.com/thmb/NaA0d4It6NgMsvYdLPHAMQCk23c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/69-3119998-Jump-Lunge-GIF-df2c0847f8c14a609380f3b89eb855b1.gif")';
let pushups = 'url("https://media.tenor.com/N-ymp2pCBqQAAAAC/push-up.gif")';

function getRandomExercise() {
    randomNumber = Math.floor(Math.random() * 12) + 1;
    switch (randomNumber) {
        case 1:
            document.getElementById("exeName").innerHTML = "20 PUSHUPS";
            document.getElementById("exerciseImgActive").style.backgroundImage = pushups;
            console.log("20 PUSHUPS");
            break;

        case 2:
            console.log("20 TRICEP DIPS");
            document.getElementById("exeName").innerHTML = "20 TRICEP DIPS";
            document.getElementById(
                "exerciseImgActive"
            ).style.backgroundImage = tricepDips;
            break;

        case 3:
            console.log("30 BICYCLE CRUNCHES");
            document.getElementById("exeName").innerHTML = "30 BICYCLE CRUNCHES";
            document.getElementById(
                "exerciseImgActive"
            ).style.backgroundImage = BicycleCrunch;
            break;

        case 4:
            console.log("15 JUMP TUCKS");
            document.getElementById("exeName").innerHTML = "15 JUMP TUCK";
            document.getElementById(
                "exerciseImgActive"
            ).style.backgroundImage = jumpTucks;
            break;

        case 5:
            console.log("30 RUSSUAN TWIST");
            document.getElementById("exeName").innerHTML = "30 RUSSUAN TWIST";
            document.getElementById(
                "exerciseImgActive"
            ).style.backgroundImage = russainTwist;
            break;

        case 6:
            console.log("1 MIN WALL SIT");
            document.getElementById("exeName").innerHTML = "1 MIN WALL SIT";
            document.getElementById(
                "exerciseImgActive"
            ).style.backgroundImage = wallSit;
            break;

        case 7:
            console.log("15 JUMP SQUATS");
            document.getElementById("exeName").innerHTML = "15 JUMP SQUATS";
            document.getElementById(
                "exerciseImgActive"
            ).style.backgroundImage = jumpSquat;
            break;

        case 8:
            console.log("30 SEC SIDE PLANK X2");
            document.getElementById("exeName").innerHTML = "30 SEC SIDE PLANK X2";
            document.getElementById(
                "exerciseImgActive"
            ).style.backgroundImage = sidePlank;
            break;

        case 9:
            console.log("15 JUMP LUNGES");
            document.getElementById("exeName").innerHTML = "15 JUMP LUNGES";
            document.getElementById(
                "exerciseImgActive"
            ).style.backgroundImage = jumpLunge;
            break;

        case 10:
            console.log("30 MOUNTIN CLIMBERS");
            document.getElementById("exeName").innerHTML = "30 MOUNTAIN CLIMBERS";
            document.getElementById("exerciseImgActive").style.backgroundImage = mountainClibers;
            break;

        case 11:
            console.log("WATER BREAK");
            document.getElementById("exeName").innerHTML = "WATER BREAK";
            document.getElementById("exerciseImgActive").style.backgroundImage =
                "url('https://media3.giphy.com/media/MagjwsUK2vunGimNXT/giphy.gif')";
            break;

        case 12:
            console.log("20 BURPEES");
            document.getElementById("exeName").innerHTML = "20 BURPEES";
            document.getElementById(
                "exerciseImgActive"
            ).style.backgroundImage = burpees;
            break;

        default:
            console.log("Your Kung-fu no good!");
            document.getElementById("exeName").innerHTML = "Your Kung-fu no good!";
    }
}

//*add coundown timer
//add pause timer
//add water-break bar
//restart

//*add coundown timer
//pause timer
//restart