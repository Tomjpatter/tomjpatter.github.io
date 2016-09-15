//alert("testing");
var btn = document.getElementById("btn");
var ccUrl="https://www.codecademy.com/TomP."

btn.onmousedown = showAcademy;


function showAcademy(){
    //alert("Going to " + ccUrl);
    document.location = ccUrl;
}