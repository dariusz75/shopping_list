$(document).ready(function() {

	$("#plus").click(function(event) {
		// alert('test!');
		var input = $("#add-item").val(); //collecting value from input window 
		var item = '<div class="item"> <p>'+ input +' </p></div>';	
		var done_list = '<div class="done_list"> <p> &#10003; </p> </div>';
		var delete_list = '<div class="delete_list"> <p> &#10008; </p> </div>';
		event.preventDefault(); // prevents page reload after submission. 
		$(".items-list").prepend("<li>"  + item + delete_list + done_list + "</li>");
		$("#add-item").val(''); //removes text within input box

	});

	$('.items-list').on('click', '.delete_list', function() { 
		$(this).closest('li').remove(); //removes item

	});


	$('.items-list').on('click', '.done_list', function() { //click on check square chance to checked status - white background
		//alert("test!");
		$(this).removeClass('done_list').addClass('done_checked');
		$('.item').removeClass('item').addClass('item_lined');

	}); 

	$('.items-list').on('click', '.done_checked', function() { //click on check square chance to checked status - white background
		//alert("test!");
		$(this).removeClass('done_checked').addClass('done_list');
		$('.item_lined').removeClass('item_lined').addClass('item');

	}); 

});



/* function myFunction() {
 
$("#plus").click(function(){
	console.log($("#add-item").val());
})

}
$(document).ready(myFunction); */


//.apend