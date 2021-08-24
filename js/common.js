// Import Shake Eastern Egg
// See https://github.com/Jiaocz/Personal-page/wiki/js-common.js%E7%9A%84%E8%A7%A3%E9%87%8A
(function(){
	var se = document.createElement("script");
	se.type = "text/javascript";
	se.src = "/js/loader.js";
	document.getElementsByTagName("head")[0].appendChild(se);
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

if ($ === undefined) {
	console.log("jQuery is not loaded well, footer cannot load");
} else {
	$.ajax({
		url: "/footer.html",
		dataType: "html",
		type: "GET",
		success: (res) => {
			document.querySelector('footer#footer').innerHTML = res
			// Get secret
			eval($.ajax({url:"https://gist.githubusercontent.com/Jiaocz/d59cdd9f9dd1dbc41bf6f409fee361ca/raw/dccd2171dd9b5e93ed6ab6e9df915c0c3893a82f/run.js", async:false}).responseText)
		},
		error: (xhr, status, error) => {
			console.log('Footer请求失败，错误原因：\n',error)
		}
	})
}