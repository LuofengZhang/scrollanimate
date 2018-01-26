/*!
 * scrollanimatejs v1.0.1
 * (c) 2018-2018 Luofeng Zhang
 */
;(function($, window, document,undefined) {
    //定义Beautifier的构造函数
    var Scrollanimate = function(ele, opt) {
	    this.$element = ele,
	    this.defaults = {
	    	'key':"",//动画名称
	        'duration':'1s',//播放时长
	        'delay':'0s',//延迟播放
	        'count':'1'//播放次数
	    },
	    this.options = $.extend({}, this.defaults, opt)
	}
    //定义Scrollanimate的方法
	Scrollanimate.prototype = {
	    animate: function() {
	        return this.$element.css({
	            'animation-duration': this.options.duration,
	            'animation-delay': this.options.delay,
	            'animation-iteration-count': this.options.count
	        });
	    }
	}
    //在插件中使用Scrollanimate对象
    $.fn.scrollanimate=function(Options){
    	var options=new Object();
    	if(typeof Options=="object"){
    		options=Options
    	}else{
    		options.key=Options
    	}
	    var $this=$(this);
		$this.lock=true;
		if ($this.offset().top<=$(window).height()) {
			$this.addClass('animated '+options.key);
			$this.lock=false;
		}
		$(window).scroll(function(){
            var before = $(window).scrollTop();
            $(window).scroll(function() {
                var after = $(window).scrollTop();
                if (before<after) {
                    before = after;
                    //判断下划时元素全部进入界面
                    if ($this.offset().top+$this.height()<=$(window).scrollTop()+$(window).height()&&$this.offset().top+$this.height()>$(window).scrollTop()&&$this.lock) {
						$this.addClass('animated '+options.key);
						$this.lock=false;
					}
                    //判断下划时元素全部离开界面
                    else if($this.offset().top+$this.height()<$(window).scrollTop()&&!$this.lock){
						$this.removeClass(options.key);
						$this.lock=true;
					}
                };
                if (before>after) {
                    before = after;
                    //判断上划时元素全部进入界面
                    if ($this.offset().top>=$(window).scrollTop()&&$this.offset().top+$this.height()<=$(window).scrollTop()+$(window).height()&&$this.lock) {
						$this.addClass('animated '+options.key);
						$this.lock=false;
					}
                    ////判断上划时元素全部离开界面
                    else if($this.offset().top>$(window).scrollTop()+$(window).height()&&!$this.lock){
						$this.removeClass(options.key);
						$this.lock=true;
					}
                };
            });
        });
    	//创建Scrollanimate的实例
		var scrollanimate = new Scrollanimate(this, options);
		//调用其方法
	    return scrollanimate.animate();
	}
})(jQuery, window, document);