// Users should be able to:
// 1. Enter an item into #new-item
// 2. Submit the form #item-form (remember to prevent the form's default behavior!)
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #new-item should clear


// Bonus: Focus on #new-item after the item is added
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user
// Legendary Bonus: Remove individual <li> elements when they are clicked

// $(document).ready(function () {
//
// 	// jQuery submit
// 	$('#item-form').submit(function (event) {
// 		event.preventDefault();
//
// 		// get DOM input
// 		var input = $('#new-item').val().trim();
//
// 		if (input === "") {
// 			return alert('no input!');
// 		} else {
// 			// append new <li>
// 			$('#list').append('<li>' + input + '</li>');
//
// 			// clear input
// 			$('#new-item')
// 				.val('')
// 				.focus();
// 		}
// 	})
// 	$(document).on('click', 'li', function () {
// 		$(this).remove();
// 	});
//
// })


$(document).ready(function () {

	var initTodos = {
		todos: [
			'data type',
			'Array',
			'Object',
			'Function',
		]
	}

	// jQuery submit
	$('#item-form').submit(function (event) {
		event.preventDefault();
		// get DOM input
		var input = $('#new-item').val().trim();

		var source = $('#add-list').html();
		var template = Handlebars.compile(source);
		var listTemplate = template(input);
	 	$('#list').append(listTemplate);

		$('#new-item')
		 				.val('')
		 				.focus();

	});


	var source = $('#init-template').html();
	var template = Handlebars.compile(source);
	var listTemplate = template(initTodos);
 	$('#list').append(listTemplate);


})
