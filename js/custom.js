$(document).ready(function() {
 
	$(".search_icon").click(function() {
	   $(".search_bar").toggleClass("searceHide");
	 });

	$(".mainSidebar .ellipse_icon").click(function() {
	   $(".jd_left_sidebar").toggleClass("leftSidebar");
	   $(".jd_right").toggleClass("jdRightWithSidebar");
	   $(".body_wrapper").toggleClass("rightSiderbarcontent");	   
	   $(".profile_main").toggleClass("profileOnSidebar");
	     
	 });

	$(".ellipse_icon_resposive").click(function(){
		$(this).toggleClass("hideEllipse")
	});
	 $(".menus .menus_item").click(function() {
	   $(".jd_left_sidebar").addClass("leftSidebar");
	   $(".jd_right").addClass("jdRightWithSidebar");
	   $(".body_wrapper").addClass("rightSiderbarcontent");	   
	   $(".profile_main").addClass("profileOnSidebar");   
	 });

	$(".ellipse_icon_resposive").click(function() {
	   $(".menu_wrapper").toggleClass("mainSidebarHide");
	   $(".jd_left_sidebar").toggleClass("leftSidebar");
	 });

	
	$(".header_select1 .dropdown-menu li").click(function() {
		var select_text = $(this).text();
		$(".header_select1 .dropdown-toggle").text(select_text);
	   
	 });
	$(".header_select2 .dropdown-menu li").click(function() {
		var select_text = $(this).text();
		$(".header_select2 .dropdown-toggle").text(select_text);
	   
	 });
	$(".header_select3 .dropdown-menu li").click(function() {
		var select_text = $(this).text();
		$(".header_select3 .dropdown-toggle").text(select_text);
	 });
	 $(".commom_droSelect .dropdown-menu li").click(function() {
		var select_text = $(this).text();
		$(this).parents('.commom_droSelect').find(".dropdown-toggle").text(select_text);
	 });
	$(".checkAll").click(function(){
		$('.checked').not(this).prop('checked', this.checked);
	});
	
//   form password show hide js
	$(".password img").click(function() {
		$(".password").toggleClass("ieHide");
		// $(this).toggleClass("fa-eye fa-eye-slash");
		var input = $(".passHide");
		input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
	});

//   resume sidebard js
	$(".resumeBtn").click(function(){
		$(".parsing_applicant_Main").toggleClass("resumeSidebarHide");
	});
	$(".resumeList").click(function(){
		$(".parsing_applicant_Main").removeClass("resumeSidebarHide");
	});
});