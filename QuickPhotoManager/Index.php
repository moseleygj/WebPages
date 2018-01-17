<html>
<head>
<title></title>
<meta charset="UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<script>
$(document).ready(function(){
$(".undoSection").fadeIn(700).fadeOut(2000).fadeIn(1000).fadeTo(2000,0.1);
$(".ButtonSection").fadeIn(2000);
});
</script>
<style type="text/css">
html{}
body{padding:0;margin:0;}

.pictureFrame{
min-height:;
max-height:;
height:700px;
min-width:;
width:1000px;
position:relative;
margin:0 auto 0;
padding:0;
background:url('placeholder.png') no-repeat center fixed;
background-size:cover;
color:;
box-shadow:;
 top: 50%;
transform: translateY(-50%);
 box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.container{
min-height:;
max-height:1024px;
height:100%;
min-width:768px;
width:100%;
position:;
margin:0 auto 0;
padding:0;
background:url('paper_texture.jpg') no-repeat center fixed;
background-size:cover;
color:;
font-family:;
font-size:;
}

.ButtonsRowBottom{
height:100px;
width:100%;
position:absolute;
bottom:0;
background:;
color:;
}

.ButtonsRowTop{
height:100px;
width:100%;
position:absolute;
top:0;
right:0;
background:;

padding:;
background:;
color:;
font-family:;
font-size:;
}

.buttonSingleTop{
height:92px;
width:100px;
position:relative;
display:block;
text-align:right;
right:0;
background:;
color:;
float:left;
margin-top: 8px;
}

.undoSection{
height:100px;
width:300px;
position:absolute;
display:block;
text-align:right;
right:0;
background:;
color:;
float:left;
font-family:;
display:none;
}

.undoSectionText{
height:100px;
width:200px;
position:absolute;
display:block;
text-align:center;
right:0;
background:;
color:#434343;
font-family:Georgia,"Times New Roman",Times,serif;
font-size:48px;
font-weight:bolder;
float:left;
line-height:2.3;
text-shadow:1px 3px 3px white;
}

.buttonSection{
height:100%;
width:33.3%;
position:;
margin:0 auto 0;
padding:0;
float:left;
display:none;
}

.buttonIcon{
height:90px;
width:100px;
margin:0 auto 0;
text-align:center;
display:block;
}

</style>

<body>

<div class="container">
<div class="pictureFrame">
<div class="ButtonsRowTop"><div class="undoSection">
<img src="Custom-Icon-Design-Flatastic-9-Undo.ico" class="buttonSingleTop"><div class="undoSectionText">UNDO</div></div></div>
<div class="ButtonsRowBottom">
<div class="ButtonSection"></div>
<div class="ButtonSection"><img src="trash-bin-icon.png" class="buttonIcon" id="delete" onClick="deleteImg()"></div>
<div class="ButtonSection"></div>

<?php
$imageBundle = array();
//Place all images into an array.
// when using GLOB_BRACE regarding spaces around the comma: {jpg,png,gif} works as expected, but {jpg, png, gif} with a leading space, will only match the former as expected but not the latter. 
foreach(glob("*.{jpg,png,gif,jpeg}",GLOB_BRACE) as $filename)
{
$imageBundle[]=$filename;
}
echo count($imageBundle);
?>
</div></div>
</div>
</body>
<script type="text/javascript">
function deleteImg()
{
if(confirm("Are you sure you want to delete this image?")==true){
unlink();
}

else
{
return 0;
}

}
</script>
</html>
