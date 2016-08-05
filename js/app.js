$(document).ready(function() {
	
	$('.shopping-list').on('click', '.shopping-item-delete', function() {
		$(this).closest('li').remove();
	});

	$('.shopping-list').on('click', '.shopping-item-toggle', function() {
		$(this).closest('li').toggleClass("shopping-item__checked").css("color", "grey");

	});

	$("#js-shopping-list-form").submit(function(event) {
		// console.log(event);

		event.preventDefault();

		var item = $('#shopping-list-entry').val()
		//$('.shopping-list').append($('<li>').val());
		if (item == ""){
			alert("Fill out the form");
			return;
		}

		$('.shopping-list').append('<li>' 
			+ '<span class="shopping-item">' 
			+ item + '</span>' 
			+ '<div class="shopping-item-controls">'
            + '<button class="shopping-item-toggle">'
            + '<span class="button-label">check</span>'
            + '</button>&nbsp;'
          	+ '<button class="shopping-item-delete">'
            + '<span class="button-label">delete</span>'
          	+ '</button>'
        	+ '</div></li>'

		);

		$('#shopping-list-entry').val("");


	});


	

});
