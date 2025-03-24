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

document.querySelectorAll(".hoverIcon").forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.src = icon.getAttribute("data-hover");
    });
    icon.addEventListener("mouseout", () => {
        icon.src = icon.getAttribute("data-original");
    });
});

 fetch('template/headerTemp.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('headerTemp').innerHTML = data;
            })
            .catch(err => console.log('Error loading headerTemp.html: ', err));

fetch('template/footerTemp/footerTemp.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
            })
            .catch(err => console.log('Error loading footerTemp.html: ', err));