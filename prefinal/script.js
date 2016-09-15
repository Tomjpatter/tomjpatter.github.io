//alert("testing");
var btn = document.getElementById("btn");
var ccUrl="https://www.codecademy.com/TomP."
var btn2 = document.getElementById("btn2");

btn.onmousedown = showAcademy;
btn2.onmousedown = newTabAcademy()


function showAcademy(){
    //alert("Going to " + ccUrl);
    document.location = ccUrl;
}

function newTabAcademy(){
   window.open(ccUrl);
}