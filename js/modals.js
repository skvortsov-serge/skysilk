$(document).ready(function() {

	$('.bs-example-modal-sm').on('show.bs.modal', function(event) {
		var button = $(event.relatedTarget)
		var recipient = button.data('whatever')
		var modal = $(this)
		modal.find('.modal-title').text('Sign In')
		modal.find('.modal-body input').val(recipient)
	});

	$(function() {
		$('#sign-in-modal').on('hidden.bs.modal', function () {
			$('.email-parent').removeClass('has-error');
			$('.email-parent').removeClass('has-success');
			$('.password-parent').removeClass('has-error');
			$('.password-parent').removeClass('has-success');
			$('.invalid').remove();
		});

		$('#email, #password').on('focus', function() {
			$(this).closest('.form-group').find('.invalid').remove();
		});

		//при нажатии на кнопку с id="save"
		$('#save').click(function() {
			var emailInput = $('#email');
			var passwordInput = $('#password');
			var emailVal = emailInput.val();
			var passwordVal = passwordInput.val();
			var emailErrorRequired = $('<div class="invalid" style="display: none">Please, type here your email</div>');
			var emailErrorInvalid = $('<div class="invalid" style="display: none">Your email is not valid</div>');
			var passwordErrorRequired = $('<div class="invalid" style="display: none">Please, type here your password</div>');
			var passwordErrorShort = $('<div class="invalid" style="display: none"> Your password is too short, please type more than 6 charecters</div>');
			if(emailVal == '') {
				$('.email-parent').addClass('has-error');
				if ($('.email .invalid').length == 0) {
					$('.email').append(emailErrorRequired);
					emailErrorRequired.fadeIn();
				} 
			} else {
				$('.email-parent').removeClass('has-error');
				if (validateEmail(emailVal)) {
					$('.email-parent').addClass('has-success');
				} else {
					$('.email-parent').addClass('has-error');
					$('.email').append('<div class="invalid">Your email is not valid</div>');
					$('#contactForm')[0].reset();
				}
			}
			if(passwordInput.val() == '') {
				$('.password-parent').addClass('has-error');
				if ($('.password .invalid').length == 0) {
					$('.password').append(passwordErrorRequired);
					passwordErrorRequired.fadeIn();

				} 
			} else {
				$('.password-parent').removeClass('has-error');
				if (passwordVal.length < 6 ) {
					$('.password-parent').addClass('has-error');
					$('.password').append('<div class="invalid"> Your password is too short, please type more than 6 charecters</div>');
				} else {
					$('.password-parent').removeClass('has-error');
					$('.password-parent').addClass('has-success');
				}
			}
		});
	});


	function validateEmail(email) {
		console.log('email', email);
	 		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			 return re.test(email);
	}

	$(function() {
		$('[data-toggle="tooltip"]').tooltip();
	});
	// function validate() {
	//       $('input').append('<div id="emailInfo" class="info"></div>');
	//        var emailInfo = $('#emailInfo');
	//        var ele = $('#email');
	//        var pos = ele.offset();
	//        emailInfo.css({
	//                top: pos.top-3,
	//                left: pos.left+ele.width()+15
	//        });
	//        var patt = /^.+@.+[.].{2,}$/i;
	//        if(!patt.test(ele.val())) {
	//                        emailInfo.removeClass('correct').addClass('error').html('← give me a valid email adress, ok?').show();
	//                        ele.removeClass('normal').addClass('wrong');
	//        } else {
	//                        emailInfo.removeClass('error').addClass('correct').html('√').show();
	//                        ele.removeClass('wrong').addClass('normal');
	//        }
	// }

	// var jVal = {	
	// 	'email' : function() {

	// 	}
	// }

});
