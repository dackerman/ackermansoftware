// Javascript for navigating github projects.
// author: David Ackerman (dackerman)

var dackerman = {};

dackerman.get_location = function(){
    return window.location.hash + "_id";
}

dackerman.set_location = function(element){
    window.location.hash = $(element).attr('id').slice(0, -3);
}

$(document).ready(function(){
	$(".project").click(function(event){
	    dackerman.set_location(this);
		var viewer_parent = $("#viewer");
		var viewer = $("#viewer_content");
		viewer.empty();
		viewer.append($(this).html());
		viewer_parent.css('background-color',
		  $(this).css('background-color'));
		event.preventDefault();
	});
	
	//Go to hashed page, or default.
	if(window.location.hash == ''){
	    $("#101goals_id").click(); 
	} else {
	    $(dackerman.get_location()).click(); 
	}
});