$(document).ready(function() {
    

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

   

 

    

    //表单验证
    $(".demoform").Validform();


//$(document).ready()结束。。。。。。
});