// Menu Open
$(document).ready(function(){
	$("#nav-icon").click(function(){
		$(".menu_container").toggleClass("open");
		$(".menu_overlay").toggleClass("show");
		$(".navigation").toggleClass("open");
		$(this).toggleClass('open');
	});
});