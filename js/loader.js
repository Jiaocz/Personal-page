// Shake for Orange Juice!
(function(){
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
})();
