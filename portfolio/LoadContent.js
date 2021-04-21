var MainSection = new Vue({
	el: '#main',
	data:{
		title: "",
		content: "",
		footer: "",
		loading: false
	},
	methods:{
		loadContent: function(){
			if(this.loading)
				return;
			this.loading = true
			this.title = ""
			this.content = ""
			this.footer = ""
			
			var portfolio = window.location.hash.substring(1) != "" ? window.location.hash.substring(1) : getQueryVariables("portfolio")
			
			if(portfolio.startsWith("/")){
				portfolio = portfolio.substring(1)
			}
			if(portfolio.includes("?")){
				portfolio = portfolio.substring(0,portfolio.indexOf("?"))
			}
			
			console.log("portfolio is: " + portfolio)
			
			if(portfolio === true || portfolio == false || portfolio == ""){
				this.title = "加载错误，URL参数有误。"
				this.content = "<h1><b>URL出现错误，请确认您输入的地址是正确的</b></h1>"
				this.footer = "URL error: 404"
			} else {
				var that = this
				// 请求内容
				$.ajax({
					url: "" + portfolio + "/content.html",
					dataType: "html",
					success: function(res){
						that.content = res
						that.checkContent()
					},
					error: function(){
						that.content = "<h1><b>Ajax请求错误，请检查URL及网络</b></h1>"
						that.checkContent()
					}
				})

				// 请求页脚
				$.ajax({
					url: "" + portfolio + "/footer.html",
					dataType: "html",
					success: function(res){
						that.footer = res
						that.checkContent()
					},
					error: function(){
						that.footer = "<b>Ajax请求错误页脚加载失败</b>"
						that.checkContent()
					}
				})

				// 请求标题
				$.ajax({
					url: "data.json",
					dataType: "json",
					success: function(res){
						if(portfolio.includes("/")){
							that.title = res[portfolio.substring(0,portfolio.indexOf("/"))]
						}
						else {
							that.title = res[portfolio]
						}
						that.checkContent()
					},
					error: function(){
						that.title = "标题载入失败"
						that.checkContent()
					}
				})
			}
			that.checkContent()
		},
		checkContent: function(){
			if(this.title != "" && this.content != "" && this.footer != ""){
				this.loading = false;
			}
		}
	},
	mounted: function(){
		this.loadContent()
		window.onhashchange = () => {
			this.loadContent()
		}
	},
	watch:{
		title: function(){
			document.title = "Orangii|橙梓：" + this.title
		}
	}
});
