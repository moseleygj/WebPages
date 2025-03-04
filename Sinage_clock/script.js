function myTime(){
    const d = new Date();
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const weekdayFull = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const monthsLong =["JANURARY","FEBURARY","MARCH","APRIL","MAY","Jun","Jul","Aug","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
    
    let hour = d.getHours();
    let min = d.getMinutes();
    let day = weekday[d.getUTCDay()];
    let dayF= weekdayFull[d.getUTCDay()];

    let month = months[d.getMonth()];
    let monthL = monthsLong[d.getMonth()];
    let yearL = d.getFullYear();
    let dayOfMonth = d.getDate();
    /*let am_pm;*/
    let am_pm = hour >= 12 ? "PM" : "AM";
    hour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
  
    if (hour >= 12 ){
      am_pm="PM"}
      else
        {am_pm="AM"};
      
       
      if(min < 10){
        min="0"+min;
      }
      
    document.getElementById("tm").innerHTML = hour+":"+min;
    document.getElementById("dt").innerHTML = day+" "+month+" "+dayOfMonth+" "+hour+":"+min+" "+am_pm;
    document.getElementById("TodaysDate").innerHTML = dayOfMonth+" "+monthL+" "+yearL;
    document.getElementById("bigDay").innerText=dayF;
    console.log(yearL);
    setTimeout(myTime, 1000);
    }
    