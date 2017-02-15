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

    //焦点图
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,

    });

    //免费获取方案
    $('.s_fangan1').click(function() {
        $('.s_fangan1 .s_an1').toggle();
    });
    $('.s_an1 li a').click(function() {
        $('.s_fangan1 p').text(this.text);
    });

    $('.s_fangan2').click(function() {
        $('.s_fangan2 .s_an2').toggle();
    });
    $('.s_an2 li a').click(function() {
        $('.s_fangan2 p').text(this.text);
    });

    $('.s_fangan3').click(function() {
        $('.s_fangan3 .s_an3').toggle();
    });
    $('.s_an3 li a').click(function() {
        $('.s_fangan3 p').text(this.text);
    });

    $('.s_fangan4').click(function() {
        $('.s_fangan4 .s_an4').toggle();
    });
    $('.s_an4 li a').click(function() {
        $('.s_fangan4 p').text(this.text);
    });

    $(".ly1").click(function() {
        $('.s_fangan2 p').text("意向国家");
        $('.s_fangan3 p').text("预期投资金额");
        $('.s_fangan4 p').text("项目类型");
        /************************领域一国家************************/
        $(".ly1gj1").css("display", "");
        $(".ly1gj2").css("display", "");
        $(".ly1gj3").css("display", "");
        $(".ly1gj4").css("display", "");
        $(".ly1gj5").css("display", "");
        $(".ly1gj6").css("display", "");

        $(".ly2gj1").css("display", "none");
        $(".ly2gj2").css("display", "none");
        $(".ly2gj3").css("display", "none");
        $(".ly2gj4").css("display", "none");
        $(".ly2gj5").css("display", "none");
        $(".ly2gj6").css("display", "none");
        $(".ly2gj7").css("display", "none");
        $(".ly2gj8").css("display", "none");

        $(".ly3gj1").css("display", "none");
        $(".ly3gj2").css("display", "none");
        $(".ly3gj3").css("display", "none");
        $(".ly3gj4").css("display", "none");
        $(".ly3gj5").css("display", "none");
        $(".ly3gj6").css("display", "none");
        $(".ly3gj7").css("display", "none");
        $(".ly3gj8").css("display", "none");
        $(".ly3gj9").css("display", "none");
        $(".ly3gj10").css("display", "none");

        /*******************领域一金额*******************************/

        $(".ly1je1").css("display", "");
        $(".ly1je2").css("display", "");
        $(".ly1je3").css("display", "");
        $(".ly1je4").css("display", "");
        $(".ly1je5").css("display", "");
        $(".ly1je6").css("display", "");

        $(".ly2je1").css("display", "none");
        $(".ly2je2").css("display", "none");
        $(".ly2je3").css("display", "none");
        $(".ly2je4").css("display", "none");
        $(".ly2je5").css("display", "none");
        $(".ly2je6").css("display", "none");

        $(".ly3je1").css("display", "none");
        $(".ly3je2").css("display", "none");
        $(".ly3je3").css("display", "none");
        $(".ly3je4").css("display", "none");

        /********************领域一类型******************************/

        $(".ly1lx1").css("display", "");
        $(".ly1lx2").css("display", "");
        $(".ly1lx3").css("display", "");
        $(".ly1lx4").css("display", "");

        $(".ly2lx1").css("display", "none");
        $(".ly2lx2").css("display", "none");
        $(".ly2lx3").css("display", "none");
        $(".ly2lx4").css("display", "none");
        $(".ly2lx5").css("display", "none");

        $(".ly3lx1").css("display", "none");
        $(".ly3lx2").css("display", "none");
        $(".ly3lx3").css("display", "none");
        $(".ly3lx4").css("display", "none");
        $(".ly3lx5").css("display", "none");
        $(".ly3lx6").css("display", "none");

    });

    $(".ly2").click(function() {
        $('.s_fangan2 p').text("意向国家");
        $('.s_fangan3 p').text("预期投资金额");
        $('.s_fangan4 p').text("项目类型");
        /*********************领域二国家***************************/
        $(".ly1gj1").css("display", "none");
        $(".ly1gj2").css("display", "none");
        $(".ly1gj3").css("display", "none");
        $(".ly1gj4").css("display", "none");
        $(".ly1gj5").css("display", "none");
        $(".ly1gj6").css("display", "none");

        $(".ly2gj1").css("display", "");
        $(".ly2gj2").css("display", "");
        $(".ly2gj3").css("display", "");
        $(".ly2gj4").css("display", "");
        $(".ly2gj5").css("display", "");
        $(".ly2gj6").css("display", "");
        $(".ly2gj7").css("display", "");
        $(".ly2gj8").css("display", "");

        $(".ly3gj1").css("display", "none");
        $(".ly3gj2").css("display", "none");
        $(".ly3gj3").css("display", "none");
        $(".ly3gj4").css("display", "none");
        $(".ly3gj5").css("display", "none");
        $(".ly3gj6").css("display", "none");
        $(".ly3gj7").css("display", "none");
        $(".ly3gj8").css("display", "none");
        $(".ly3gj9").css("display", "none");
        $(".ly3gj10").css("display", "none");
        /****************领域二金额********************************/
        $(".ly1je1").css("display", "none");
        $(".ly1je2").css("display", "none");
        $(".ly1je3").css("display", "none");
        $(".ly1je4").css("display", "none");
        $(".ly1je5").css("display", "none");
        $(".ly1je6").css("display", "none");

        $(".ly2je1").css("display", "");
        $(".ly2je2").css("display", "");
        $(".ly2je3").css("display", "");
        $(".ly2je4").css("display", "");
        $(".ly2je5").css("display", "");
        $(".ly2je6").css("display", "");

        $(".ly3je1").css("display", "none");
        $(".ly3je2").css("display", "none");
        $(".ly3je3").css("display", "none");
        $(".ly3je4").css("display", "none");

        /********************领域二类型****************************/

        $(".ly1lx1").css("display", "none");
        $(".ly1lx2").css("display", "none");
        $(".ly1lx3").css("display", "none");
        $(".ly1lx4").css("display", "none");

        $(".ly2lx1").css("display", "");
        $(".ly2lx2").css("display", "");
        $(".ly2lx3").css("display", "");
        $(".ly2lx4").css("display", "");
        $(".ly2lx5").css("display", "");

        $(".ly3lx1").css("display", "none");
        $(".ly3lx2").css("display", "none");
        $(".ly3lx3").css("display", "none");
        $(".ly3lx4").css("display", "none");
        $(".ly3lx5").css("display", "none");
        $(".ly3lx6").css("display", "none");

    });

    $(".ly3").click(function() {
        $('.s_fangan2 p').text("意向国家");
        $('.s_fangan3 p').text("预期投资金额");
        $('.s_fangan4 p').text("项目类型");
        /********************领域三国家****************************/
        $(".ly1gj1").css("display", "none");
        $(".ly1gj2").css("display", "none");
        $(".ly1gj3").css("display", "none");
        $(".ly1gj4").css("display", "none");
        $(".ly1gj5").css("display", "none");
        $(".ly1gj6").css("display", "none");

        $(".ly2gj1").css("display", "none");
        $(".ly2gj2").css("display", "none");
        $(".ly2gj3").css("display", "none");
        $(".ly2gj4").css("display", "none");
        $(".ly2gj5").css("display", "none");
        $(".ly2gj6").css("display", "none");
        $(".ly2gj7").css("display", "none");
        $(".ly2gj8").css("display", "none");

        $(".ly3gj1").css("display", "");
        $(".ly3gj2").css("display", "");
        $(".ly3gj3").css("display", "");
        $(".ly3gj4").css("display", "");
        $(".ly3gj5").css("display", "");
        $(".ly3gj6").css("display", "");
        $(".ly3gj7").css("display", "");
        $(".ly3gj8").css("display", "");
        $(".ly3gj9").css("display", "");
        $(".ly3gj10").css("display", "");

        /********************领域三金额****************************/
        $(".ly1je1").css("display", "none");
        $(".ly1je2").css("display", "none");
        $(".ly1je3").css("display", "none");
        $(".ly1je4").css("display", "none");
        $(".ly1je5").css("display", "none");
        $(".ly1je6").css("display", "none");

        $(".ly2je1").css("display", "none");
        $(".ly2je2").css("display", "none");
        $(".ly2je3").css("display", "none");
        $(".ly2je4").css("display", "none");
        $(".ly2je5").css("display", "none");
        $(".ly2je6").css("display", "none");

        $(".ly3je1").css("display", "");
        $(".ly3je2").css("display", "");
        $(".ly3je3").css("display", "");
        $(".ly3je4").css("display", "");

        /********************领域三类型****************************/
        $(".ly1lx1").css("display", "none");
        $(".ly1lx2").css("display", "none");
        $(".ly1lx3").css("display", "none");
        $(".ly1lx4").css("display", "none");

        $(".ly2lx1").css("display", "none");
        $(".ly2lx2").css("display", "none");
        $(".ly2lx3").css("display", "none");
        $(".ly2lx4").css("display", "none");
        $(".ly2lx5").css("display", "none");

        $(".ly3lx1").css("display", "");
        $(".ly3lx2").css("display", "");
        $(".ly3lx3").css("display", "");
        $(".ly3lx4").css("display", "");
        $(".ly3lx5").css("display", "");
        $(".ly3lx6").css("display", "");

    });

    //鼠标划过向上翻转
    $(".jq1").mouseenter(function() {
        $(".jq1s").slideUp("fast");
		$(".jq1 > img").attr("src","images/21.png");
        $(".jq1 .jqp3").css("margin-top", "-10px");
    });
    $(".jq1").mouseleave(function() {
        $(".jq1s").slideDown("fast");
		$(".jq1 > img").attr("src","images/11.png");
        $(".jq1 .jqp3").css("margin-top", "0");
    });

    $(".jq2").mouseenter(function() {
        $(".jq2s").slideUp("fast");
		$(".jq2 > img").attr("src","images/22.png");
        $(".jq2 .jqp3").css("margin-top", "-10px");
		
    });
    $(".jq2").mouseleave(function() {
        $(".jq2s").slideDown("fast");
		$(".jq2 > img").attr("src","images/12.png");
        $(".jq2 .jqp3").css("margin-top", "0");
    });

    $(".jq3").mouseenter(function() {
        $(".jq3s").slideUp("fast");
		$(".jq3 > img").attr("src","images/23.png");
        $(".jq3 .jqp3").css("margin-top", "-10px");
    });
    $(".jq3").mouseleave(function() {
        $(".jq3s").slideDown("fast");
		$(".jq3 > img").attr("src","images/13.png");
        $(".jq3 .jqp3").css("margin-top", "0");
    });

    $(".jq4").mouseenter(function() {
        $(".jq4s").slideUp("fast");
		$(".jq4 > img").attr("src","images/24.png");
        $(".jq4 .jqp3").css("margin-top", "-10px");
    });
    $(".jq4").mouseleave(function() {
        $(".jq4s").slideDown("fast");
		$(".jq4 > img").attr("src","images/14.png");
        $(".jq4 .jqp3").css("margin-top", "0");
    });

    $(".jq5").mouseenter(function() {
        $(".jq5s").slideUp("fast");
		$(".jq5 > img").attr("src","images/25.png");
        $(".jq5 .jqp3").css("margin-top", "-10px");
    });
    $(".jq5").mouseleave(function() {
        $(".jq5s").slideDown("fast");
		$(".jq5 > img").attr("src","images/15.png");
        $(".jq5 .jqp3").css("margin-top", "0");
    });

    $(".jq6").mouseenter(function() {
        $(".jq6s").slideUp("fast");
		$(".jq6 > img").attr("src","images/26.png");
        $(".jq6 .jqp3").css("margin-top", "-10px");
    });
    $(".jq6").mouseleave(function() {
        $(".jq6s").slideDown("fast");
		$(".jq6 > img").attr("src","images/16.png");
        $(".jq6 .jqp3").css("margin-top", "0");
    });

	//找房源鼠标经过效果
    $('.s_zfyimgWrap').mouseenter(function() {
        /*$(this).css("background-color","#fcfcfc");*/
        /*$(this).css("box-shadow","4px 4px 8px #999");*/
        $(this).find(".s_zfytxtBox").css("border-bottom", "3px solid #d30f1b");
        $(this).find(".s_zfytitle > a").css("color", "#D30F1B");
		$(this).find(".s_zfybgtxt > p").css("font-size", "18px");
    });
    $('.s_zfyimgWrap').mouseleave(function() {
        /*$(this).css("background-color","#fff");*/
        /*$(this).css("box-shadow","none");*/
        $(this).find(".s_zfytxtBox").css("border-bottom", "1px solid #dcdcdc");
        $(this).find(".s_zfytitle > a").css("color", "#333");
		$(this).find(".s_zfybgtxt > p").css("font-size", "16px");
    });

    //找项目鼠标经过效果
    $('.s_zxmimg').mouseenter(function() {
        /*$(this).css("background-color","#fcfcfc");*/
        $(this).css("border-bottom", "3px solid #d30f1b");
        $(this).find(".s_zxmtitlel > a").css("color", "#D30F1B");
		$(this).find(".s_zxmbgtxt > p").css("font-size", "18px");
    });
    $('.s_zxmimg').mouseleave(function() {
        /*$(this).css("background-color","#fff");*/
        $(this).css("border-bottom", "1px solid #dcdcdc");
        $(this).find(".s_zxmtitlel > a").css("color", "#333");
		$(this).find(".s_zxmbgtxt > p").css("font-size", "16px");
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

    //活动沙龙鼠标划过效果
    $(".s_hdslimgbox1").mouseenter(function() {
        $(this).addClass("s_hdslOn");
        $(this).find(".s_hdslcon1").addClass("s_hdslcon1On");
        $(this).find(".s_hdslcon2").addClass("s_hdslcon2On");
        $(this).find(".s_linka").css("display", "block");

        $(this).prevAll().removeClass("s_hdslOn");
        $(this).prevAll().find(".s_hdslcon1").removeClass("s_hdslcon1On");
        $(this).prevAll().find(".s_hdslcon2").removeClass("s_hdslcon2On");
        $(this).prevAll().find(".s_linka").css("display", "none");

        $(this).nextAll().removeClass("s_hdslOn");
        $(this).nextAll().find(".s_hdslcon1").removeClass("s_hdslcon1On");
        $(this).nextAll().find(".s_hdslcon2").removeClass("s_hdslcon2On");
        $(this).nextAll().find(".s_linka").css("display", "none");

    });

    $(".s_hdslimgbox2").mouseenter(function() {
        $(this).addClass("s_hdslOn");
        $(this).find(".s_hdslcon1").addClass("s_hdslcon1On");
        $(this).find(".s_hdslcon2").addClass("s_hdslcon2On");
        $(this).find(".s_linka").css("display", "block");

        $(this).prevAll().removeClass("s_hdslOn");
        $(this).prevAll().find(".s_hdslcon1").removeClass("s_hdslcon1On");
        $(this).prevAll().find(".s_hdslcon2").removeClass("s_hdslcon2On");
        $(this).prevAll().find(".s_linka").css("display", "none");

        $(this).nextAll().removeClass("s_hdslOn");
        $(this).nextAll().find(".s_hdslcon1").removeClass("s_hdslcon1On");
        $(this).nextAll().find(".s_hdslcon2").removeClass("s_hdslcon2On");
        $(this).nextAll().find(".s_linka").css("display", "none");
    });

    $(".s_hdslimgbox3").mouseenter(function() {
        $(this).addClass("s_hdslOn");
        $(this).find(".s_hdslcon1").addClass("s_hdslcon1On");
        $(this).find(".s_hdslcon2").addClass("s_hdslcon2On");
        $(this).find(".s_linka").css("display", "block");

        $(this).prevAll().removeClass("s_hdslOn");
        $(this).prevAll().find(".s_hdslcon1").removeClass("s_hdslcon1On");
        $(this).prevAll().find(".s_hdslcon2").removeClass("s_hdslcon2On");
        $(this).prevAll().find(".s_linka").css("display", "none");

        $(this).nextAll().removeClass("s_hdslOn");
        $(this).nextAll().find(".s_hdslcon1").removeClass("s_hdslcon1On");
        $(this).nextAll().find(".s_hdslcon2").removeClass("s_hdslcon2On");
        $(this).nextAll().find(".s_linka").css("display", "none");

    });

    $(".s_hdslimgbox4").mouseenter(function() {
        $(this).addClass("s_hdslOn");
        $(this).find(".s_hdslcon1").addClass("s_hdslcon1On");
        $(this).find(".s_hdslcon2").addClass("s_hdslcon2On");
        $(this).find(".s_linka").css("display", "block");

        $(this).prevAll().removeClass("s_hdslOn");
        $(this).prevAll().find(".s_hdslcon1").removeClass("s_hdslcon1On");
        $(this).prevAll().find(".s_hdslcon2").removeClass("s_hdslcon2On");
        $(this).prevAll().find(".s_linka").css("display", "none");

        $(this).nextAll().removeClass("s_hdslOn");
        $(this).nextAll().find(".s_hdslcon1").removeClass("s_hdslcon1On");
        $(this).nextAll().find(".s_hdslcon2").removeClass("s_hdslcon2On");
        $(this).nextAll().find(".s_linka").css("display", "none");

    });

    //活跃排名关注排名选项卡
    $(".s_zjgRh1").click(function() {

        $(".s_zjgRh2").removeClass("s_zjgRh12On");
        $(".s_zjgRh1").addClass("s_zjgRh12On");

        $(".s_zjgRf2").fadeOut("fast");
        $(".s_zjgRf1").fadeIn("fast");

    });
    $(".s_zjgRh2").click(function() {

        $(".s_zjgRh1").removeClass("s_zjgRh12On");
        $(".s_zjgRh2").addClass("s_zjgRh12On");

        $(".s_zjgRf1").fadeOut("fast");
        $(".s_zjgRf2").fadeIn("fast");
    });

    //热门话题选项卡
    $(".s_rmht").hover(function() {

        $(".s_ywbd").removeClass("s_rmhtOn");
        $(".s_rmht").addClass("s_rmhtOn");

        $(".s_hotWendaFoot").css("display", "none");
        $(".s_hotHuatiFoot").css("display", "block");

        $(".s_WendaMore").css("display", "none");
        $(".s_HuatiMore").css("display", "block");

    });
    //有问必答选项卡
    $(".s_ywbd").hover(function() {

        $(".s_rmht").removeClass("s_rmhtOn");
        $(".s_ywbd").addClass("s_rmhtOn");

        $(".s_hotHuatiFoot").css("display", "none");
        $(".s_hotWendaFoot").css("display", "block");

        $(".s_HuatiMore").css("display", "none");
        $(".s_WendaMore").css("display", "block");

    });
	//有问必答鼠标悬停
	$(".s_hotWendaList").mouseenter(function(){
		
		$(this).find(".s_hotWendaRightTxt").addClass("s_bottomLine");
		
		});
	$(".s_hotWendaList").mouseleave(function(){
		$(this).find(".s_hotWendaRightTxt").removeClass("s_bottomLine");
		});
	
	

    //找机构选项卡
    $(".s_zjgLh1").hover(function() {

        $(".s_zjgLh1").addClass("s_zjgLh1On");
        $(".s_zjgLh2").removeClass("s_zjgLh2On");
        $(".s_zjgLh3").removeClass("s_zjgLh3On");

        $(".s_zjgLf1").css("display", "block");
        $(".s_zjgLf2").css("display", "none");
        $(".s_zjgLf3").css("display", "none");

    });
    $(".s_zjgLh2").hover(function() {

        $(".s_zjgLh1").removeClass("s_zjgLh1On");
        $(".s_zjgLh2").addClass("s_zjgLh2On");
        $(".s_zjgLh3").removeClass("s_zjgLh3On");

        $(".s_zjgLf1").css("display", "none");
        $(".s_zjgLf2").css("display", "block");
        $(".s_zjgLf3").css("display", "none");
    });
    $(".s_zjgLh3").hover(function() {

        $(".s_zjgLh1").removeClass("s_zjgLh1On");
        $(".s_zjgLh2").removeClass("s_zjgLh2On");
        $(".s_zjgLh3").addClass("s_zjgLh3On");

        $(".s_zjgLf1").css("display", "none");
        $(".s_zjgLf2").css("display", "none");
        $(".s_zjgLf3").css("display", "block");
    });

    //找机构下方图标选项卡
    $(".s_zjgA1").mouseenter(function() {
        $(".s_zjgA1 img").animate({
            "margin-left": "-15px"
        },
        "fast");
        $(".s_zjgP1").css("display", "block");
        $(".s_zjgP2").css("display", "none");
        $(".s_zjgP3").css("display", "none");
        $(".s_zjgP4").css("display", "none");
        $(".s_zjgP5").css("display", "none");
        $(".s_zjgP6").css("display", "none");
        $(".s_zjgP7").css("display", "none");
        $(".s_zjgP8").css("display", "none");
    });
    $(".s_zjgA1").mouseleave(function() {
        $(".s_zjgA1 img").animate({
            "margin-left": "0px"
        },
        "fast");
    });
    $(".s_zjgA2").mouseleave(function() {
        $(".s_zjgA2 img").animate({
            "margin-left": "0px"
        },
        "fast");
    });
    $(".s_zjgA3").mouseleave(function() {
        $(".s_zjgA3 img").animate({
            "margin-left": "0px"
        },
        "fast");
    });
    $(".s_zjgA4").mouseleave(function() {
        $(".s_zjgA4 img").animate({
            "margin-left": "0px"
        },
        "fast");
    });
    $(".s_zjgA5").mouseleave(function() {
        $(".s_zjgA5 img").animate({
            "margin-left": "0px"
        },
        "fast");
    });
    $(".s_zjgA6").mouseleave(function() {
        $(".s_zjgA6 img").animate({
            "margin-left": "0px"
        },
        "fast");
    });
    $(".s_zjgA7").mouseleave(function() {
        $(".s_zjgA7 img").animate({
            "margin-left": "0px"
        },
        "fast");
    });
    $(".s_zjgA8").mouseleave(function() {
        $(".s_zjgA8 img").animate({
            "margin-left": "0px"
        },
        "fast");
    });

    $(".s_zjgA2").mouseenter(function() {
        $(".s_zjgA2 img").animate({
            "margin-left": "-15px"
        },
        "fast");
        $(".s_zjgP1").css("display", "none");
        $(".s_zjgP2").css("display", "block");
        $(".s_zjgP3").css("display", "none");
        $(".s_zjgP4").css("display", "none");
        $(".s_zjgP5").css("display", "none");
        $(".s_zjgP6").css("display", "none");
        $(".s_zjgP7").css("display", "none");
        $(".s_zjgP8").css("display", "none");
    });
    $(".s_zjgA3").mouseenter(function() {
        $(".s_zjgA3 img").animate({
            "margin-left": "-15px"
        },
        "fast");
        $(".s_zjgP1").css("display", "none");
        $(".s_zjgP2").css("display", "none");
        $(".s_zjgP3").css("display", "block");
        $(".s_zjgP4").css("display", "none");
        $(".s_zjgP5").css("display", "none");
        $(".s_zjgP6").css("display", "none");
        $(".s_zjgP7").css("display", "none");
        $(".s_zjgP8").css("display", "none");
    });
    $(".s_zjgA4").mouseenter(function() {
        $(".s_zjgA4 img").animate({
            "margin-left": "-15px"
        },
        "fast");
        $(".s_zjgP1").css("display", "none");
        $(".s_zjgP2").css("display", "none");
        $(".s_zjgP3").css("display", "none");
        $(".s_zjgP4").css("display", "block");
        $(".s_zjgP5").css("display", "none");
        $(".s_zjgP6").css("display", "none");
        $(".s_zjgP7").css("display", "none");
        $(".s_zjgP8").css("display", "none");
    });
    $(".s_zjgA5").mouseenter(function() {
        $(".s_zjgA5 img").animate({
            "margin-left": "-15px"
        },
        "fast");
        $(".s_zjgP1").css("display", "none");
        $(".s_zjgP2").css("display", "none");
        $(".s_zjgP3").css("display", "none");
        $(".s_zjgP4").css("display", "none");
        $(".s_zjgP5").css("display", "block");
        $(".s_zjgP6").css("display", "none");
        $(".s_zjgP7").css("display", "none");
        $(".s_zjgP8").css("display", "none");
    });
    $(".s_zjgA6").mouseenter(function() {
        $(".s_zjgA6 img").animate({
            "margin-left": "-15px"
        },
        "fast");
        $(".s_zjgP1").css("display", "none");
        $(".s_zjgP2").css("display", "none");
        $(".s_zjgP3").css("display", "none");
        $(".s_zjgP4").css("display", "none");
        $(".s_zjgP5").css("display", "none");
        $(".s_zjgP6").css("display", "block");
        $(".s_zjgP7").css("display", "none");
        $(".s_zjgP8").css("display", "none");
    });
    $(".s_zjgA7").mouseenter(function() {
        $(".s_zjgA7 img").animate({
            "margin-left": "-15px"
        },
        "fast");
        $(".s_zjgP1").css("display", "none");
        $(".s_zjgP2").css("display", "none");
        $(".s_zjgP3").css("display", "none");
        $(".s_zjgP4").css("display", "none");
        $(".s_zjgP5").css("display", "none");
        $(".s_zjgP6").css("display", "none");
        $(".s_zjgP7").css("display", "block");
        $(".s_zjgP8").css("display", "none");
    });
    $(".s_zjgA8").mouseenter(function() {
        $(".s_zjgA8 img").animate({
            "margin-left": "-15px"
        },
        "fast");
        $(".s_zjgP1").css("display", "none");
        $(".s_zjgP2").css("display", "none");
        $(".s_zjgP3").css("display", "none");
        $(".s_zjgP4").css("display", "none");
        $(".s_zjgP5").css("display", "none");
        $(".s_zjgP6").css("display", "none");
        $(".s_zjgP7").css("display", "none");
        $(".s_zjgP8").css("display", "block");
    });

    //找学校鼠标悬停效果
    $(".s_zxxLeftDiv").mouseenter(function() {
        $(this).find(".s_sqtj").css("background-color", "#fb8728");
        $(this).find(".s_sqtjPai").removeClass("cColor-626262");

        $(this).find(".s_sqtjPai").css("color", "#fb8728");
        $(this).find(".s_sqtj > a").css("color", "#fff");
		
		$(this).find(".s_sqtjPai").prev("p").css("color", "#fb8728");
		/* $(this).find(".s_sqtjPai").prev("p").css("font-weight", "bold"); */
		
    });
    $(".s_zxxLeftDiv").mouseleave(function() {
        $(this).find(".s_sqtj").css("background-color", "#fafafa");
        $(this).find(".s_sqtjPai").css("color", "#626262");
        $(this).find(".s_sqtj > a").css("color", "#626262");
		
		
		/* $(this).find(".s_sqtjPai").prev("p").css("font-weight", "normal"); */
		$(this).find(".s_sqtjPai").prev("p").css("color", "#626262");
    });

    

    //表单验证
    $(".demoform").Validform();


//$(document).ready()结束。。。。。。
});







$(function() {
//声音文本段落省略号
    $(".s_head p").dotdotdot({
        
    });	
	
});



//声音左右移动效果函数
var s_soundNum = 0;

function MoveLeft() {

    s_soundNum = s_soundNum + 421;
    if (s_soundNum >= 1264) {
        s_soundNum = 0;
    }
    $(".s_sound").animate({
        left: "-" + s_soundNum + "px"
    },
    "fast");	
}
function MoveRight() {
    s_soundNum = s_soundNum - 421;
    if (s_soundNum <= 0) {
        s_soundNum = 1264;
    }
    $(".s_sound").animate({
        left: "-" + s_soundNum + "px"
    },
    "fast");
	
}
window.setInterval("MoveLeft()",3000);


//图片懒加载
$(function() {
    $("img").not(".noLazy").lazyload({
        effect: "fadeIn"
    });
});