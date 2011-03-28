$(document).ready(function(){
	$(".project").click(function(event){
		var viewer_parent = $("#viewer");
		var viewer = $("#viewer_content");
		viewer.empty();
		viewer.append($(this).html());
		viewer_parent.css('background-color',
		  $(this).css('background-color'));
		event.preventDefault();
	});
	$(".top.left.project").click();
});