function hideDescriptionInfo()
{
  if          (document.getElementById("productDescriptionInfo").style.display=="block"){
    productDetailShow.innerHTML="+";
document.getElementById("productDetailShow").style.color="#0654ba";
    document.getElementById("productDescriptionInfo").style.display="none";
  }
  else {
    document.getElementById("productDescriptionInfo").style.display="block";
        productDetailShow.innerHTML="-";
document.getElementById("productDetailShow").style.color="#434343";

  }

}

function hideMaterialandCareInfo()
{
    if     (document.getElementById("descriptionInfoMaterial").style.display=="block"){
document.getElementById("descriptionInfoMaterial").style.display="none";
      matCare.innerHTML="+";
document.getElementById("matCare").style.color="#0654ba";
  }
  else {
    document.getElementById("descriptionInfoMaterial").style.display="block";
          matCare.innerHTML="-"
document.getElementById("matCare").style.color="#434343";

  }

}

function HideShowShipping(){
  let HSShip = document.getElementById("shippingInfo");
  if(HSShip.style.display=="block"){
    HSShip.style.display="none";
    shipInfo.innerHTML="+";
    shipInfo.style.color="#0654ba";
  }
  else
    {
      HSShip.style.display="block";
      shipInfo.innerHTML="-";
      shipInfo.style.color="#434343";
    }

}
function HideShowReturns(){
    let HSReturns = document.getElementById("shippingReturns");
if(HSReturns.style.display=="block"){
  HSReturns.style.display="none";
      shippingReturnsHS.innerHTML="+";
      shippingReturnsHS.style.color="#0654ba";

}
  else{
    HSReturns.style.display="block";
    shippingReturnsHS.innerHTML="-";
          shippingReturnsHS.style.color="#434343";

  }
}

function shipAndPayTab(){
  let tabA = document.getElementById("tabA");
  let tabB = document.getElementById("tabB");
  document.getElementById("productDescriptionInfo").style.display="none";
  document.getElementById("a").style.display="block";
  
 tabB.style.borderBottom="1px solid white";
 tabA.style.borderBottom="1px solid rgb(204,204, 204)";
  
  tabB.style.background="white";
  tabA.style.background="linear-gradient(white,white,white,rgb(230,230,230))";
}

function descriptionTab(){
  let tabA = document.getElementById("tabA");
  let tabB = document.getElementById("tabB");

  document.getElementById("a").style.display="none";
  document.getElementById("productDescriptionInfo").style.display="block";

  tabB.style.borderBottom="1px solid rgb(204, 204, 204)";
  tabA.style.borderBottom="1px solid white";

  tabA.style.background="white";
  tabB.style.background="linear-gradient(white,white,white,rgb(230,230,230))";
}

