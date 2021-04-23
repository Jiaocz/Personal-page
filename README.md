# Personal-page | 个人介绍页面（含打赏和收款码）

## Info 信息

这里是我的网站的模板页，您可以预览我的上线版本：https://orangii.cn/ 或在线观看模板效果：https://template.orangii.cn/

您可以下载 (Release)[https://github.com/Jiaocz/Personal-page/releases] 中的压缩包获取整个模板（不包含上线版本的所有非演示图片，如二维码）。**上线版本具有一些特制小彩蛋，并没有放到模板中发布。**

## How to change 如何修改内容

主要内容都在注释`Change things here`和`Change ends here`注释之间，部分内容在js中使用双斜杠注释单独标出

之后会开设Wiki指引修改。

## Features 特色

- 纯静态，CDN友好上甚至可以放到OSS中
- 有动画，看着很高级……
- 使用过Vue、jQuery等，看着用着都很高级……
- 等我以后再遍

## Pages Description 页面说明

### 首页 `index.html`
网页首页，可选get参数： `showcontacts`（直接根据浏览器UA展示联系方式，如微信、QQ，原理在js/common.js中）、`page=<int>`（打开后直接展示某页内容）。但是需要修改一些地方

### 赞赏页 `donate.html`
可选参数：`from=<url>`（带有此参数后将显示返回按钮，例如`?from=index.html`）。
common.js中有toDonate()函数。

### 付款页 `pay.html`
可选参数：`amount=<double>`（显示待付金额，如`amount=2.33`）、`from=<url>`（带有此参数后将显示返回按钮，例如`?from=index.html`）

### 成就展示页面(?) `/portfolio`
严格来说使用 `/portfolio/#/portfolio-name` 配合 `data.json` 可以做到不刷新动态展示某些想要的东西，但是怎么说呢…… Under construction 嗯对，还没做好（指不太想做），就叫pre-release吧

### 二维码生成界面 `qr.html`
打开看就明白了，生成上述对应功能的对应链接和二维码。

## 未来展望（无限未来）
本来想做很多东西，就慢慢期待更新吧~

- [ ] 暗色模式
- [ ] 自定义字体
- [ ] ...

## Credits
- [Vue.js](https://vuejs.org/) : [GitHub](https://github.com/vuejs/vue)
- [jQuery](https://jquery.com/) : [GitHub](https://github.com/jquery/jquery)
- [html2canvas](https://html2canvas.hertzen.com) : [GitHub](https://github.com/niklasvh/html2canvas)
- [HTML5UP](https://html5up.net/)

------

**喜欢的话给个赞吧~**
