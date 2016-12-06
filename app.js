$('.page-1').hide(function('.page-2', '.page-3', '.page-4', '.page-5', '.page-6', '.page-7', .page-8') {
});

$('.start').click(function() {
	$('.page-1').hide();
});

$('.page-2').hide(function('.page-1', '.page-3', '.page-4', '.page-5', '.page-6', '.page-7', .page-8') {
});

$('.next1').submit(function() {
	$('.page-2').hide();
});

$('.page-3').hide(function('.page-1', '.page-2', '.page-4', '.page-5', '.page-6', '.page-7', .page-8') {
});

$('.next2').submit(function() {
	$('page-3').hide();
});

$('.page-4').hide(function('.page-1', '.page-2', '.page-3', '.page-5', '.page-6', '.page-7', .page-8') {
});

$('.next3').submit(function() {
	$('page-4').hide();
});

$('.page-5').hide(function('.page-1', '.page-2', '.page-3', '.page-'4, '.page-6', '.page-7', .page-8') {
});

$('.next4').submit(function() {
	$('page-5').hide();
});

$('.page-6').hide(function('.page-1', '.page-2', '.page-3', '.page-4', '.page-5', '.page-7', .page-8') {
});

$('.next5').submit(function() {
	$('page-6').hide();
});

$('.page-7').hide(function('.page-1', '.page-2', '.page-3', '.page-4', '.page-5', '.page-6', '.page-8') {
});

$('.next6').submit(function() {
	$('page-7').hide();
});

$('.page-8').hide(function('.page-1', '.page-2', '.page-3', '.page-4', '.page-5', '.page-6', '.page-7') {
});

$('.next6').submit(function() {
	$('page-7').hide();
});

$('#quiz-form-1').submit(function(event) {
	event.preventDefault();
});

$('#quiz-form-2').submit(function(event) {
	event.preventDefault();
});

$('#quiz-form-3').submit(function(event) {
	event.preventDefault();
});

$('#quiz-form-4').submit(function(event) {
	event.preventDefault();
});

$('#quiz-form-5').submit(function(event) {
	event.preventDefault();
});

$('#quiz-form-6').submit(function(event) {
	event.preventDefault();
});

$('#quiz-form-7').submit(function(event) {
	event.preventDefault();
});

function colors() {
	return (['green', 'red']);
}

function colorAnswer1() {
	var selectedAnswer = colors();
	if (selectedAnswer === '.button-A') {
		$(#quiz-form-2.'.button-A').addClass('.green-on');
	}
	if (selectedAnswer === '.button-B') {
		$(#quiz-form-2.'.button-B').addClass('.red-on');
	}
	if (selectedAnswer === '.button-C') {
		$(#quiz-form-2.'.button-C').addClass('.red-on');
	}
	if (selectedAnswer === '.button-D') {
		$(#quiz-form-2.'.button-D').addClass('.red-on');
	}
	// If wrong answer is chosen, can I put selected button as red, as well as correct button to turn green so they know what the right answer is?

	function colorAnswer2() {
	var selectedAnswer = colors();
	if (selectedAnswer === '.button-A') {
		$(#quiz-form-3.'.button-A').addClass('.red-on');
	}
	if (selectedAnswer === '.button-B') {
		$(#quiz-form-3.'.button-B').addClass('.red-on');
	}
	if (selectedAnswer === '.button-C') {
		$(#quiz-form-3.'.button-C').addClass('.green-on');
	}
	if (selectedAnswer === '.button-D') {
		$(#quiz-form-3.'.button-D').addClass('.red-on');
	}

	function colorAnswer3() {
	var selectedAnswer = colors();
	if (selectedAnswer === '.button-A') {
		$(#quiz-form-4.'.button-A').addClass('.red-on');
	}
	if (selectedAnswer === '.button-B') {
		$(#quiz-form-4.'.button-B').addClass('.green-on');
	}
	if (selectedAnswer === '.button-C') {
		$(#quiz-form-4.'.button-C').addClass('.red-on');
	}
	if (selectedAnswer === '.button-D') {
		$(#quiz-form-4.'.button-D').addClass('.red-on');
	}

	function colorAnswer4() {
	var selectedAnswer = colors();
	if (selectedAnswer === '.button-A') {
		$(#quiz-form-5.'.button-A').addClass('.red-on');
	}
	if (selectedAnswer === '.button-B') {
		$(#quiz-form-5.'.button-B').addClass('.red-on');
	}
	if (selectedAnswer === '.button-C') {
		$(#quiz-form-5.'.button-C').addClass('.red-on');
	}
	if (selectedAnswer === '.button-D') {
		$(#quiz-form-5.'.button-D').addClass('.green-on');
	}

	function colorAnswer5() {
	var selectedAnswer = colors();
	if (selectedAnswer === '.button-A') {
		$(#quiz-form-6.'.button-A').addClass('.green-on');
	}
	if (selectedAnswer === '.button-B') {
		$(#quiz-form-6.'.button-B').addClass('.red-on');
	}
	if (selectedAnswer === '.button-C') {
		$(#quiz-form-6.'.button-C').addClass('.red-on');
	}
	if (selectedAnswer === '.button-D') {
		$(#quiz-form-6.'.button-D').addClass('.red-on');
	}

	function colorAnswer6() {
	var selectedAnswer = colors();
	if (selectedAnswer === '.button-A') {
		$(#quiz-form-7.'.button-A').addClass('.red-on');
	}
	if (selectedAnswer === '.button-B') {
		$(#quiz-form-7.'.button-B').addClass('.red-on');
	}
	if (selectedAnswer === '.button-C') {
		$(#quiz-form-7.'.button-C').addClass('.green-on');
	}
	if (selectedAnswer === '.button-D') {
		$(#quiz-form-7.'.button-D').addClass('.red-on');
	}

	function sortAnswers(answers) {
		var given = [];
		for (var i=0; i<answers.length; i++) {
			if (answers[i]) === '.green-on')
             given.push(answers[i]);
            if (answers[i]) === '.red-on')
             given.push(answers[i]); 
             // Will it know where to push the answer? How do I set green as correct and red as incorrect?

		}


	}
	
}


