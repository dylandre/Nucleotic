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
		$('connected').fadeOut(500);
		e.preventDefault();
	});

	$('#Save').click(function (e) {
		$('#MenuSave').delay(500).fadeIn(500);
		$('.checkbox').delay(500).fadeIn(500);
		});
		
	  $('#Save').click(function (e) {
		$('#Restau').fadeOut(500);
		$('#Deco').fadeOut(500);
		$('#Contact').fadeOut(500);
		$('#MenuSave').delay(500).fadeIn(1500);
		$('.checkbox').delay(500).fadeIn(1500);
		$('#Return').delay(500).fadeIn(1500);
		});
		
	  $('#Restau').click(function (e) {
		$('#Save').fadeOut(500);
		$('#Deco').fadeOut(500);
		$('#Contact').fadeOut(500);
		$('#Return').delay(500).fadeIn(1500);
		$('#MenuRestau').delay(500).fadeIn(1500);
		});
		
	  $('#Contact').click(function (e) {
		$('#Restau').fadeOut(500);
		$('#Save').fadeOut(500);
		$('#Deco').fadeOut(500);
		$('#MenuContact').delay(500).fadeIn(1500);
		$('#Return').delay(500).fadeIn(1500);
		});
		
	  $('#Return').click(function (e) {
		$('#MenuSave').fadeOut(500);
		$('#MenuContact').fadeOut(500);
		$('#MenuRestau').fadeOut(500);
		$('.checkbox').fadeOut(500);
		$('#Return').fadeOut(500);
		$('#Save').delay(500).fadeIn(1500);
		$('#Contact').delay(500).fadeIn(1500);
		$('#Restau').delay(500).fadeIn(1500);
		$('#Deco').delay(500).fadeIn(1500);
		});
		
});
function checkfunction() {
	let checkBoxes = document.getElementsByClassName("checkbox");
	let text = document.getElementById("text");
	console.log(checkBoxes)
	for(checkbox of checkBoxes){
	if (checkbox.checked == true){
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
}
};