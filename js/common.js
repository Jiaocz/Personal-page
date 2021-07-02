// Import Shake Eastern Egg
// See https://github.com/Jiaocz/Personal-page/wiki/js-common.js%E7%9A%84%E8%A7%A3%E9%87%8A
(function(){
	var se = document.createElement("script");
	se.type = "text/javascript";
	se.src = "/js/loader.js";
	document.getElementsByTagName("head")[0].appendChild(se);
})();

//when page loaded we should do something
window.addEventListener("load",function(){loaded()});
//get $_GET
function getQueryVariable(variable)
{
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
		mainsec.backButton = 1
		mainsec.fromurl=decodeURIComponent(getQueryVariable("from"))
	}
})();

if(getQueryVariable("showContacts")||getQueryVariable("showcontacts")){
	(function(){
		var url;
		var browser = navigator.userAgent.toLowerCase();
		if (browser.match(/MicroMessenger/i) == 'micromessenger') {
			//微信浏览器
			url = "#"; // Your Wechat Link
			setTimeout(function(){mainsec.showContact("Wechat")},1500);
		} else if(browser.indexOf(' qq') != -1 && browser.indexOf('mqqbrowser') != -1){
			//qq内置浏览器
			url = "#"; // Your QQ link
			setTimeout(function(){mainsec.showContact("QQ")},1500);
		}
	})();
}

window.addEventListener("beforeunload",function(){
	mainsec.rotateCard(90,0.4,"Y");
})
