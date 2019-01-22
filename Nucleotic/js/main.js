$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#login-submit').click(function(e){
		$('#connected').delay(500).fadeIn(500);
		$("#connexion").fadeOut(500);
		e.preventDefault();
	});
	$('#logout').click(function(e){
		$("#connexion").delay(500).fadeIn(500);
		$('#connected').fadeOut(500);
		e.preventDefault();
	});
});