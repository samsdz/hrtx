$(document).ready(function() {
    //顶部搜索固定
    $(".head").pin();

    //顶部搜索下拉
    $(".s_searchl").mouseenter(function() {

        $(".s_searchl ul").fadeIn("fast");
    });
    $(".s_searchl").mouseleave(function() {

        $(".s_searchl ul").fadeOut("fast");
    });
    $(".s_searchl ul").mouseleave(function() {

        $(".s_searchl ul").fadeOut("fast");
    });

    $(".s_searchl li a").click(function() {
        $(".s_searchl select").val(this.text);
        $(".s_searchl span em").text(this.text);
        $(".s_searchl ul").fadeOut("fast");
    });

   

  

   
	
   
    //顶部导航展开
    $(".s_sub").mouseenter(function() {
        $(".s_sub").addClass("s_on");
        $(".s_subnav").css("display", "block");
    });
    $(".s_subnav").mouseleave(function() {
        $(".s_sub").removeClass("s_on");
        $(".s_subnav").css("display", "none");
    });
    $(".s_subs").hover(function() {
        $(".s_sub").removeClass("s_on");
        $(".s_subnav").css("display", "none");
    });
    $(".s_subnavtitle1").mouseenter(function() {
        $(".s_subnavtitle2").removeClass("s_bottomOn");
        $(".s_subnavtitle3").removeClass("s_bottomOn");
        $(".s_subnavtitle1").addClass("s_bottomOn");
        $(".s_subnavfoot2").css("display", "none");
        $(".s_subnavfoot3").css("display", "none");
        $(".s_subnavfoot1").css("display", "block");

    });

    $(".s_subnavtitle2").mouseenter(function() {
        $(".s_subnavtitle1").removeClass("s_bottomOn");
        $(".s_subnavtitle3").removeClass("s_bottomOn");
        $(".s_subnavtitle2").addClass("s_bottomOn");
        $(".s_subnavfoot1").css("display", "none");
        $(".s_subnavfoot3").css("display", "none");
        $(".s_subnavfoot2").css("display", "block");
    });

    $(".s_subnavtitle3").mouseenter(function() {
        $(".s_subnavtitle1").removeClass("s_bottomOn");
        $(".s_subnavtitle2").removeClass("s_bottomOn");
        $(".s_subnavtitle3").addClass("s_bottomOn");
        $(".s_subnavfoot1").css("display", "none");
        $(".s_subnavfoot2").css("display", "none");
        $(".s_subnavfoot3").css("display", "block");
    });

   //国家列表选择
   $(".s_part1FootListR a").click(function(){
	   $(this).addClass("s_On");
	   $(this).prevAll().removeClass("s_On");
	   $(this).nextAll().removeClass("s_On");
	  /* var text1='<span class="s_part1HeadSpan"><i class="fa fa-angle-right"></i></span>';
	   var text2=$(this).text();
	   var text3='<div class="s_part1HeadDiv"><a href="javascript:void(0);" class="s_closeButton2">' + text2 + '</a><a href="javascript:void(0);" class="s_closeButton"><i class="fa fa-times"></i></a></div>'
	   $(".s_selectAll").siblings().last().after(text1);
	   $(".s_selectAll").siblings().last().after(text3);*/
	   });
	 $(".s_closeButton").click(function(){
		
		$(this).parent().prev("span").remove();
		$(this).parent().remove();
		});    
   
   //排序

  $(".s_floatLeft > a").click(function(){
	  $(this).addClass("s_On");
	  $(this).find(".s_On1").css("display","block");
	  $(this).siblings().find(".s_On1").css("display","none");
	  $(this).prevAll(".s_On").removeClass("s_On");
	  $(this).nextAll(".s_On").removeClass("s_On");
	  });
	
	 $(".s_floatRight > a").click(function(){
	  $(this).addClass("s_On");
	  $(this).prevAll(".s_On").removeClass("s_On");
	  $(this).nextAll(".s_On").removeClass("s_On");
	  });
	//下划线
	$(".s_part2LeftListC").mouseenter(function(){
			$(this).addClass("s_baseLine");
		});
		$(".s_part2LeftListC").mouseleave(function(){
			$(this).removeClass("s_baseLine");
		});
		
	//热门房产
	$(".s_part2Right3FDiv").mouseenter(function(){
		$(this).find(".s_part2Right3FDiv1").slideUp();
		$(this).find(".s_part2Right3FDiv2").slideUp();
		});
	$(".s_part2Right3FDiv").mouseleave(function(){
		$(this).find(".s_part2Right3FDiv1").slideDown();
		$(this).find(".s_part2Right3FDiv2").slideDown();
		});
		
		
		//鼠标悬停效果
		$(".s_part2LeftListImg").mouseenter(function(){
			$(this).find(".s_part2LeftListImgT").css("height","60px");
			
			$(this).find(".s_part2LeftListImgT1").css("height","60px");
			});
		$(".s_part2LeftListImg").mouseleave(function(){
			$(this).find(".s_part2LeftListImgT").css("height","40px");
			$(this).find(".s_part2LeftListImgT1").css("height","40px");
			});
	
		
		
		
		
		
		
		
		
		
	//表单验证
	$(".demoform").Validform();


//结束。。。。。。。。。
});
	
	
//图片懒加载
$(function() {
	$("img").not(".noLazy").lazyload({
		effect: "fadeIn"
	});
});


//楼评滚动
var s_soundNum = 0;
var isPageWidth=1248;

function MoveRight() {

    s_soundNum = s_soundNum + 317;
    if (s_soundNum >= isPageWidth) {
        s_soundNum = 1268;
    }
    $(".s_lpImgCBox").animate({
        left: "-" + s_soundNum + "px"
    },
    "fast");
	console.log(s_soundNum);	
}
function MoveLeft() {
    s_soundNum = s_soundNum - 317;
    if (s_soundNum <= 0) {
        s_soundNum = 0;
    }
    $(".s_lpImgCBox").animate({
        left: "-" + s_soundNum + "px"
    },
    "fast");
	console.log(s_soundNum);
}	
		