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
});

function myFunction() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('recherche');
	filter = input.value.toUpperCase();
	ul = document.getElementById("liste");
	li = ul.getElementsByTagName('li');  
	for (i = 0; i < li.length; i++) {
  	a = li[i].getElementsByClassName("panel-heading")[0];
  	txtValue = a.textContent || a.innerText;
  	if (txtValue.toUpperCase().indexOf(filter) > -1) {
		li[i].style.display = "";
  	} else {
		li[i].style.display = "none";
  	}
	}
}
	
var el = document.querySelector('.fas');
document.querySelector('#increment').addEventListener('click', function(){
		var hide = new Boolean (false);
    let count = Number(el.getAttribute('data-count')) || 0;
    el.setAttribute('data-count', count + 1);
    el.classList.remove('notify');
    el.offsetWidth = el.offsetWidth;
		el.classList.add('notify');
    if(hide == false){
        el.classList.add('show-count');
		}
}, false);
document.querySelector('.fas').addEventListener('click', function(){
	el.setAttribute('data-count', count=0);
	el.classList.remove('show-count');
},false);
