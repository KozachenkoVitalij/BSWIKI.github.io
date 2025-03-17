/*var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
*//*document.querySelector("html").onclick = function () {
  alert("Ouch! Stop poking me!");
};*/
var aliceRedhoodSprite = document.querySelector(".Alice");
var resetTimer = null; 
aliceRedhoodSprite.onclick = function(){
	var AlRdSrc = aliceRedhoodSprite.getAttribute("src");
	if (AlRdSrc === "images/Character2dModel/AliceSprite.png"){
		aliceRedhoodSprite.setAttribute("src","images/Character2dModel/RedhoodSprite.png");
		
		clearTimeout(resetTimer);
		
		resetTimer = setTimeout(() => {
		aliceRedhoodSprite.setAttribute("src","images/Character2dModel/AliceSprite.png");
		},5000);
	}
	else{
		aliceRedhoodSprite.setAttribute("src","images/Character2dModel/AliceSprite.png");
		 
		 clearTimeout(resetTimer);		
	}
}

function buttonAlice(){

var buttonAlice = document.getElementById("aliceButton");
var AliImg = document.createElement("img");
AliImg.src = "images/Character2dModel/AliceSprite.png";

	AliImg.style.cssText = buttonAlice.style.cssText;
    AliImg.style.display = "block";
    AliImg.style.margin = "25px auto"; 
    AliImg.style.width = "auto";
    AliImg.style.height = buttonAlice.offsetHeight + "px";

buttonAlice.replaceWith(AliImg);

setTimeout(() => {
        AliImg.replaceWith(buttonAlice);
    }, 5000);
}