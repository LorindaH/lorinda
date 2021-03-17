// JavaScript Document
//function() {
//  $(".menu_container").toggleClass("open");
//}
//function() {
//  $(".menu_overlay").toggleClass("show");
//}
//(event) => {
//  icon.classList.toggle("open");
//}
//function(t) {
//  return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
//}

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});