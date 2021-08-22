// Shake for Orange Juice!
const ShakeThreshold = 50;
var lastUpdate = 0;
var x, y;
function deviceMotionHandler(eventData){
	var acceleration = eventData.accelerationIncludingGravity;
	var curTime = new Date().getTime();

	if((curTime - lastUpdate) > 100){
		x = acceleration.x;
		y = acceleration.y;

		var speed = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
		if(speed > ShakeThreshold){
			var ele = document.querySelector("div.loader");
			var contentLength = ele.firstElementChild.childElementCount;
			for (var i = 0; i < contentLength; i++) {
				ele.firstElementChild.children[i].style.animation = "none";
				ele.firstElementChild.children[i].style.transitionProperty = "all";
			}
			for (var i = 0; i < contentLength; i++) {
				ele.firstElementChild.children[i].style.letterSpacing = "5em";
				ele.firstElementChild.children[i].style.fontSize = "3em";
			}
			ele.style.transform = "scale(0.6) rotateZ(-132deg)";
			setTimeout(() => {
				for (var i = 0; i < contentLength; i++) {
				ele.firstElementChild.children[i].style.transitionTimingFunction =
					"ease-in";
				ele.firstElementChild.children[i].style.transform = "translateY(-1080px)";
				}
			}, 400);
		}
	}
}
if(window.DeviceMotionEvent){
	window.addEventListener('devicemotion', deviceMotionHandler, false);
	window.addEventListener('load',()=>{
		window.removeEventListener('devicemotion', deviceMotionHandler, false)
	});
} else {
	console.log("devicemotion unsupported.");
}

// Replace LOGO svg before it loaded.
(function(){
	let logo = document.querySelector("img[alt='logo']");
	let LogoReplacer = document.createElement("span");
	LogoReplacer.id = "LogoReplacer";
	LogoReplacer.innerText = "🍊";
	logo.style.display = "none";
	document.querySelector(".loader .container > h1").appendChild(LogoReplacer);
	logo.addEventListener("load", ()=>{document.querySelector(".loader .container > h1").removeChild(LogoReplacer); logo.style.display = "";});
})();
//when page loaded we should do something
window.addEventListener("load",loaded);
window.addEventListener("hashchange",loaded);
//get $_GET
function getQueryVariable(variable)
{
	var hash = window.location.hash.substring(2)
	if(hash.split("/")[0] == variable){
		return hash.split("/")[1] || true
	}

	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){
			if(pair[1]) return pair[1];
			else return true;
		}
	}
	return(false);
}
//using in pay/donate page to turn back to index
function toIndex(){
	// mainsec.rotateCard(90,0.5,"Y");
	window.location.href=mainsec.fromurl;
}
//using in index to direct to donate page
function todonate(){
	var u = "index.html"+(getQueryVariable("page")?"?page="+getQueryVariable("page"):"");
	u = encodeURIComponent(u);
	// mainsec.rotateCard(90,0.5,"Y");
	window.location.href="donate.html?from="+u;
}
//self run function to show the back button
(function(){
	if(getQueryVariable("from")){
		if(window.location.pathname == "/index.html" || window.location.pathname == "/") {
			return
		}
		mainsec.backButton = 1
		mainsec.fromurl=decodeURIComponent(getQueryVariable("from"))
	}
})();

window.addEventListener("beforeunload",function(){
	mainsec.rotateCard(90,0.4,"Y");
})

window._mfq = window._mfq || [];
(function() {
  var mf = document.createElement("script");
  mf.type = "text/javascript"; mf.defer = true;
  mf.src = "/mouseflow/6589d873-01ff-44a5-b883-bee2ad228e24.js";
  document.getElementsByTagName("head")[0].appendChild(mf);
})();
