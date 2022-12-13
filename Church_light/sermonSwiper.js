var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});


function showStuff(a, b) {
    /* alert(a)*/

    let content = document.getElementById(a);
    let contentArrow = document.getElementById(b);

    if (content.style.display === "none") {
        content.style.display = "block";


    } else {
        content.style.display = "none";
        /* document.getElementById("ar").style.transform="rotate(0deg)";*/



    }
}

/*
     if(document.getElementById(a).style.display==="flex"){
      alert("else: "+document.getElementById('otherServices').style.display);
   document.getElementById("boxHold").className="testFadeOut";
     
       return 0;
     }
     else{
      alert("ELSE: "+document.getElementById('otherServices').style.display);
      document.getElementById(b).style.transform="rotate(90deg)"; /*document.getElementById(a).style.display="flex";
      document.getElementById(a).className="testFadeIn";
       */


/*show more or less videos button*/
function moreLess() {
    if (document.getElementById("showMore").style.display == "none") {
        document.getElementById("showMore").style.display = "flex"
        document.getElementById("showMoreLessBtn").innerText = "Show Less";

    } else {
        document.getElementById("showMoreLessBtn").innerText = "Show More";
        document.getElementById("showMore").style.display = "none";
    }

}