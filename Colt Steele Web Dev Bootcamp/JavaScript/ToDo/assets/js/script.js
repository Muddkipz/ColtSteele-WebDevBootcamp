//check off specific todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo

$("ul").on("click", "span", (function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
}));

//listen for enter to be pressed in input, update li's
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabs new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

//add fadeout to input
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(500);
});
