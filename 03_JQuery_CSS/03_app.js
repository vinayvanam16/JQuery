$('#login-button').click(function(){
	$('#form-card-header').removeClass('bg-teal').addClass('bg-success');
	$('.card-title').text('Login Here');
	var submit_button = $('#submit_button');
	submit_button.removeClass('bnt-teal').addClass('btn-success');
	submit_button.text('Login');
});

$('#register-button').click(function(){
	$('#form-card-header').removeClass('bg-success').addClass('bg-warning');
	$('.card-title').text('Register Here');
	var submit_button = $('#submit_button');
	submit_button.removeClass('bnt-teal').addClass('btn-warning');
	submit_button.text('register');
});

$('#signup-button').click(function(){
	$('#form-card-header').removeClass('bg-teal').addClass('bg-success');
	$('.card-title').text('Signup Here');
	var submit_button = $('#submit_button');
	submit_button.removeClass('bnt-teal').addClass('btn-teal');
	submit_button.text('Signup');
});

