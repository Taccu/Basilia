	!function(e){"use strict";
		e(".widget_fp_social a").attr("target","_blank")
	},
	w=function(){
		e(".preloader").css("opacity",0),setTimeout(function(){e(".preloader").hide()},600)
	};
	e(function(){
		e(window).bind("load",function(){w()})
	}
)}(jQuery);