function SubmitMessage()
{
	HideResult();

	// check that all fields are not empty
	var message = ValidateRequired("message");
	var name = ValidateRequired("name");
	var subject = ValidateRequired("subject");
	var email = ValidateRequired("email");
	
	if ( !email || !name || !subject || !message )
	{
		var displayText = Message_AllFields;
		DisplayResult( displayText);
		return;
	}
	
	// check email
	var mail = ValidateEmail();
	if ( !mail )
	{
		var displayText = Message_InvalidEmail
		DisplayResult( displayText);
		return;
	}
	
	// continue sending message
	
	var messageText = $('#message').val();	
	var nameText = $('#name').val();
	var subjectText = $('#subject').val();
	var emailText = $('#email').val();
	
	// let's start with the ajax call to the server
	$.ajax({
		url: "mail.php",
		type: "POST",
		data: "name=" + nameText + "&email=" + emailText + "&subject=" + subjectText + "&message=" + messageText,
		beforeSend: function () {
			HideResult();
			DisplayResult(Message_SendingMessage);
		},
		success: function (result, status, error) {
			if ( result == "success" )
			{
				$('#name').val("");
				$('#email').val("");
				$('#subject').val("");
				$('#message').val("");
				DisplayResult(Message_SuccessfullySend);
			}
			else
			{
				DisplayResult(Message_ErrorSend);
			}
		},
		error: function (request, status, error) {
			DisplayResult(Message_ErrorSend);
		}
	});
}

function SubmitReservation()
{
	HideResult();

	// check that all fields are not empty
	var phone = ValidateRequired("phone");
	var firstname = ValidateRequired("firstname");
	var lastname = ValidateRequired("lastname");
	var tickets = ValidateRequired("tickets");
	var email = ValidateRequired("email");
	
	if ( !email || !firstname || !tickets || !phone || !lastname )
	{
		var displayText = Message_AllFields;
		DisplayResult( displayText);
		return;
	}
	
	// check email
	var mail = ValidateEmail();
	if ( !mail )
	{
		var displayText = Message_InvalidEmail
		DisplayResult( displayText);
		return;
	}
	
	// continue sending message
	
	var phoneText = $('#phone').val();	
	var firstnameText = $('#firstname').val();
	var lastnameText = $('#lastname').val();
	var ticketsText = $('#tickets').val();
	var emailText = $('#email').val();
	
	// let's start with the ajax call to the server
	$.ajax({
		url: "reservation.php",
		type: "POST",
		data: "firstname=" + firstnameText + "&lastname=" + lastnameText + "&email=" + emailText + "&phone=" + phoneText + "&tickets=" + ticketsText,
		beforeSend: function () {
			HideResult();
			DisplayResult(Message_SendingMessage);
		},
		success: function (result) {
			if ( result == "success" )
			{
				$('#firstname').val("");
				$('#lastname').val("");
				$('#email').val("");
				$('#phone').val("");
				$('#tickets').val("");
				
				DisplayResult(Message_SuccessfullySend);
			}
			else
			{
				DisplayResult(Message_ErrorSend);
			}
			
		},
		error: function (request, status, error) {
			DisplayResult(Message_ErrorSend);
		}
	});
}

function ValidateEmail()
{
	var email = $('#email').val();
	var pattern = "^([\\w\\!\\#$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\`{\\|\\}\\~]+\\.)*[\\w\\!\\#$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\`{\\|\\}\\~]+@((((([a-zA-Z0-9]{1}[a-zA-Z0-9\\-]{0,62}[a-zA-Z0-9]{1})|[a-zA-Z])\\.)+[a-zA-Z]{2,6})|(\\d{1,3}\\.){3}\\d{1,3}(\\:\\d{1,5})?)$";
	var regex = new RegExp(pattern);
	var valid = regex.test(email);
	
	if ( valid )
	{
		return true;
	}
	else
	{
		return false;
	}	
}

function ValidateRequired(id)
{
	var text = $('#' + id).val();
	if ( $.trim(text) == "")
	{
		return false;
	}
	else
	{
		return true;
	}
}

function HideResult()
{
	$('#resultMessage').html('');
	$('#resultImage').css("visibility", "hidden");
}

function DisplayResult(message)
{
	// set text
	$('#resultMessage').html(message);
}

function ToggleMenu()
{
	$( "#header-menu" ).slideToggle( "slow" );
}

function ShowGalleryImage( i )
{
	var prefixPath = '';
	if ( _CurrentLanguage != 'de' )
	{
		prefixPath = '../';
	}

	var items = [
		{
			src: prefixPath + 'images/gallery/ensemble-zikoron-a.jpg',
			w: 800,
			h: 531,
			title: 'Ensemble Zikoron </br> &copy Uschi Koethe | Photography'
		},
		{
			src: prefixPath + 'images/gallery/ensemble-zikoron-b.jpg',
			w: 640,
			h: 425,
			title: 'Ensemble Zikoron </br> &copy Uschi Koethe | Photography'
		},
		{
			src: prefixPath + 'images/gallery/ensemble-zikoron-c.jpg',
			w: 581,
			h: 800,
			title: 'Ensemble Zikoron </br> &copy Uschi Koethe | Photography'
		},
		{
			src: prefixPath + 'images/gallery/lena.jpg',
			w: 530,
			h: 800,
			title: 'Lena Bittl </br> &copy Uschi Koethe | Photography'
		},
		{
			src: prefixPath + 'images/gallery/bernhard.jpg',
			w: 530,
			h: 800,
			title: 'Bernhard Bittl </br> &copy Uschi Koethe | Photography'
		},
		{
			src: prefixPath + 'images/gallery/corinna.jpg',
			w: 530,
			h: 800,
			title: 'Corinna Schr&ouml;der </br> &copy Uschi Koethe | Photography'
		},
		{
			src: prefixPath + 'images/gallery/anette.jpg',
			w: 581,
			h: 480,
			title: 'Annette Schmidt </br> &copy Uschi Koethe | Photography'
		},
		{
			src: prefixPath + 'images/gallery/hubert.jpg',
			w: 530,
			h: 800,
			title: 'Hubert St&auml;rk </br> &copy Uschi Koethe | Photography'
		},
		{
			src: prefixPath + 'images/gallery/heiko.jpg',
			w: 800,
			h: 800,
			title: 'Heiko Schaaf </br> &copy Uschi Koethe | Photography'
		},
	];

	var pswpElement = document.querySelectorAll('.pswp')[0];
	var options = {
		index: i,
		loop: true,
		closeOnScroll: false,
		shareEl: false
	};
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();

}