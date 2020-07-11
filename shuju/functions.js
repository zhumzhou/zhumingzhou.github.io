/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	
	
	var d = new Date();
	
	var hours = d.getHours();
	if (hours < 10) {
		hours = "0" + hours;
	}
	
	var minutes = d.getMinutes();
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	
	
	

	var timeStr = d.getFullYear() + "年"+ (d.getMonth() + 1) +"月"+ d.getDate() +"日 "+ hours + ":" + minutes;
	var result = " <span class=\"digit\">" + timeStr; 
	
	$("#clock").html(result);
}
