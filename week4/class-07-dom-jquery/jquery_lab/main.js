/* Independent Practice

Making a favorites list: jQuery

You'll add the ability to complete tasks in your favorite things list. Your program must complete the following rules:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing").
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through).
- Each new item added by the user needs to also have the "complete task" link at the end.

*/


$('html').css({'font-family': 'sans-serif', 'color': '#666'});
$('h1').html('Hello world Twice');
// $('#fav-list').css({'padding': '15px', 'background': '#f2f2f2'})

$('#new-thing-button').click(function (event) {
	event.preventDefault();

	var val = $('#new-thing').val();
	$('#fav-list').append('<li class="fav-thing">' + val + '</li>');
	if ('#fav-list' !== ''){
		$('#new-thing').val('');
	}

})
