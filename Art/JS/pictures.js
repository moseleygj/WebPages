$(document).ready(function(){
    $("img").click(function(){
    $("#container").css("filter","blur(15px)");
    $(".hold").css("display","flex");
    //$(this).css("filter","blur(0px)").fadeTo(3500);
    $("#bigPic").fadeIn(1200);
    var me = $(this).attr('src');
    $("#showTime").attr("src",me);
    });
    //reverse the above
    $(".hold").click(function(){
     $("#container").css("filter","blur(0px)");
    $(".hold").css("display","none");
    $(this).css("filter","blur(0px)").fadeOut(1500);
    $("#bigPic").fadeOut(1200);
    var me = $(this).attr('src');
    $("#showTime").attr("src","");
    });

    $("#bigPic").click(function(){

});
});