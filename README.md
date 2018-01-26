# scrollanimate 
 
[scrollanimate 官方网站](http://www.zhchina.top)

这是一款超轻量级的 jQuery 插件。 当你滑动鼠标滚轮，滚到当前元素会产生一个超棒的css3动画，与wow不同的是再次滚回还会再次产生动画

## 开发背景

由于开发过程中经常遇到界面滚动时需要添加css3特效，wow用过，但是wow再次滚回时不会再产生特效于是决定自己开发这款插件

## 更新日志

### V1.0.1


## 开发人员

本插件由本人 LuofengZhang 独立开发，您可以：[查看我的个人介绍](http://www.zhchina.top)

## 依赖

本插件依赖 jQuery，开发插件使用的 jQuery 版本为 3.3.1。

使用本插件时，需要引入 jQuery 。

## 下载方法

- [scrollanimate](https://github.com/luofengzhang/scrollanimate) 

## 使用指南
1. 引入animate.css，当然你也可以不引入animate.css，选择自己定义动画名。
2. 在引入 jQuery 后，引入 scrollanimate.js 。
3. 然后在 `$(function(){})` 里使用 `$(selector).scrollanimate("动画名")` 即可。
4. 或者你想传入多个参数<br />
`$(selector).scrollanimate(\n
	"key":"动画名",	//必填。\n
	"duration":"1s",//播放时长，默认1s\n
	"delay":"0s",	//延迟播放,默认0s\n
	"count":"1"	//播放次数 默认一次\n
})`


