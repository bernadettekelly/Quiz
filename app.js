var totalCorrect = 0;
var totalIncorrect = 0;

$(document).ready(function(){
	$('.page').hide();
	$('.page-1').show();
	$('.total-correct').text(totalCorrect);
	$('.total-incorrect').text(totalIncorrect);
});

$('.start').click(function() {
	$('.page').hide();
	$('.page-2').show();
});

$('.next1').click(function(e) {
	e.preventDefault();
	$('.page').hide();
	$('.page-3').show();
});

$('.next2').submit(function() {
	$('.page').hide();
	$('.page-4').show();
});

$('.next3').submit(function() {
	$('.page').hide();
	$('.page-5').show();
});

$('.next4').submit(function() {
	$('.page').hide();
	$('.page-6').show();
});

$('.next5').submit(function() {
	$('.page').hide();
	$('.page-7').show();
});

$('.next6').submit(function() {
	$('.page').hide();
	$('.page-8').show();
});

$('.repeat').submit(function() {
	$('.page').hide();
	$('.page-1').show();
});

$('#quiz-form-1').submit(function(event){
  event.preventDefault();
});

$('#quiz-form-2 button[type="button"]').click(function(event){
	event.preventDefault();
	var chooseOne = $(event.currentTarget).attr('class');
	if(chooseOne == 'button-A'){
		totalCorrect++;
		$('.total-correct').text(totalCorrect);
	}
	else{
		totalIncorrect++;
		$('.total-incorrect').text(totalIncorrect);
	}
	$('#quiz-form-2 button[type="button"]').addClass('red-on');
	$('#quiz-form-2 .button-A').addClass('green-on');
});

$('#quiz-form-3 button[type="button"]').click(function(event){
	event.preventDefault();

$('#quiz-form-3').submit(function(event) {
	event.preventDefault();
	var chooseOne = $(event.currentTarget).attr('class');
	if(chooseOne == '.button-C'){
		totalCorrect++;
		$('.total-correct').text(totalCorrect);
	}
	else{
		totalIncorrect++;
		$('.total-incorrect').text(totalIncorrect);
	}
	$('#quiz-form-3 button[type="button"]').addClass('.red-on');
	$('#quiz-form-3 .button-C').addClass('.green-on');
});
})

$('#quiz-form-4 button[type="button"]').click(function(event){
	event.preventDefault();

$('#quiz-form-4').submit(function(event) {
	event.preventDefault();
	var chooseOne = $(event.currentTarget).attr('class');
	if(chooseOne == '.button-B'){
		totalCorrect++;
		$('.total-correct').text(totalCorrect);
	}
	else{
		totalIncorrect++;
		$('.total-incorrect').text(totalIncorrect);
	}
	$('#quiz-form-4 button[type="button"]').addClass('.red-on');
	$('#quiz-form-4 .button-B').addClass('.green-on');
});
})

$('#quiz-form-5 button[type="button"]').click(function(event){
	event.preventDefault();

$('#quiz-form-5').submit(function(event) {
	event.preventDefault();
	var chooseOne = $(event.currentTarget).attr('class');
	if(chooseOne == '.button-D'){
		totalCorrect++;
		$('.total-correct').text(totalCorrect);
	}
	else{
		totalIncorrect++;
		$('.total-incorrect').text(totalIncorrect);
	}
	$('#quiz-form-5 button[type="button"]').addClass('.red-on');
	$('#quiz-form-5 .button-D').addClass('.green-on');
});
})

$('#quiz-form-6 button[type="button"]').click(function(event){
	event.preventDefault();

$('#quiz-form-6').submit(function(event) {
	event.preventDefault();
	var chooseOne = $(event.currentTarget).attr('class');
	if(chooseOne == '.button-A'){
		totalCorrect++;
		$('.total-correct').text(totalCorrect);
	}
	else{
		totalIncorrect++;
		$('.total-incorrect').text(totalIncorrect);
	}
	$('#quiz-form-6 button[type="button"]').addClass('.red-on');
	$('#quiz-form-6 .button-A').addClass('.green-on');
});
})

$('#quiz-form-7 button[type="button"]').click(function(event){
	event.preventDefault();

$('#quiz-form-7').submit(function(event) {
	event.preventDefault();
	var chooseOne = $(event.currentTarget).attr('class');
	if(chooseOne == '.button-C'){
		totalCorrect++;
		$('.total-correct').text(totalCorrect);
	}
	else{
		totalIncorrect++;
		$('.total-incorrect').text(totalIncorrect);
	}
	$('#quiz-form-7 button[type="button"]').addClass('.red-on');
	$('#quiz-form-7 .button-C').addClass('.green-on');
});
})

$('#quiz-form-8').submit(function(event) {
	event.preventDefault();
});




