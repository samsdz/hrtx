$(document).ready(function() {
   
	//表单验证
	$(".demoform").Validform();

	//精选推荐
	$(".s_left3Box > a").click(function(){
		$(this).addClass("s_On");
		$(this).prevAll().removeClass("s_On");
		$(this).nextAll().removeClass("s_On");
		});





























//结束
});
	
	
//图片懒加载
/*$(function() {
	$("img").not(".noLazy").lazyload({
		effect: "fadeIn"
	});
});
*/