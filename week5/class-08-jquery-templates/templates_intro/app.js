var presidentObject = {
    presidents: [
        'Washington',
        'Adams',
        'Jefferson',
        'Madison',
        'Monroe',
        'Adams',
        'Jackson',
        'Van Buren',
        'Harrison',
        'Tyler',
        'Polk',
        'Taylor',
        'Fillmore',
        'Pierce',
        'Buchanan',
        'Lincoln',
        'Johnson',
        'Grant',
        'Hayes',
        'Garfield',
        'Arthur',
        'Cleveland',
        'Harrison',
        'Cleveland',
        'McKinley',
        'Roosevelt',
        'Taft',
        'Wilson',
        'Harding',
        'Coolidge',
        'Hoover',
        'Roosevelt',
        'Truman',
        'Eisenhower',
        'Kennedy',
        'Johnson',
        'Nixon',
        'Ford',
        'Carter',
        'Reagan',
        'Bush',
        'Clinton',
        'Bush',
        'Obama',
    ]
};

//var $list = $('#list');

	presidentObject.presidents.forEach(function (president) {
	  $('#jquery-list').append('<option>' + president + '</option>')
	})

  var titleObj = {
	  title: 'Presidents',
	  description: 'A JSD Project'
	};

	// 3
	var titleTemplate = template(titleObj);



  var titleSource = $('#title-template').html();
	var titleCompiled = Handlebars.compile(titleSource);

  var titleTemplate = titleCompiled(titleObj);

  $('#title').append(titleTemplate);


  var myObj = { data: 'Hello, World!' };
	var template = Handlebars.compile($('#my-template').html());
	$('#myEl').append(template(myObj));

var presedents = $('#presedent-template').html();
var presedentCompiled = Handlebars.compile(presedentSourse)
var presedentTemplate = presedentCompiled(presidentObject)

  $('')
