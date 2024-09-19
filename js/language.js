var _Message_AllFields_De = "Alle Felder m&uuml;ssen ausgef&uuml;llt sein.";
var _Message_ValidMail_De = "E-Mail Adresse ung&uuml;ltig.";
var _Message_SuccessfullySend_De = "Ihre Nachricht wurde gesendet.";
var _Message_ErrorSend_De = "Fehler beim Versenden der Nachricht.";
var _Message_SendMessage_De = "Sende Nachricht ...";

var _Message_AllFields_En = "All fields must be filled.";
var _Message_ValidMail_En = "Invalid E-Mail.";
var _Message_SuccessfullySend_En = "Your message has been sent.";
var _Message_ErrorSend_En = "Error sending message.";
var _Message_SendMessage_En = "Sending message ...";

var _CurrentLanguage = "de";

function SetLanguage( language )
{
	if ( language == 'de' ) {
		_CurrentLanguage = "de";
	}
	else if ( language == "en" ) {
		_CurrentLanguage = "en";
	}
	else {
		_CurrentLanguage = "de";
	}
}

function Message_AllFields()
{
	if ( _CurrentLanguage == "de" ) {
		return _Message_AllFields_De;
	}
	else if ( _CurrentLanguage == "en" ) {
		return _Message_AllFields_En;
	}
	else {
		return _Message_AllFields_De;
	}
}

function Message_InvalidEmail()
{
	if ( _CurrentLanguage == "de" ) {
		return _Message_ValidMail_De;
	}
	else if ( _CurrentLanguage == "en" ) {
		return _Message_ValidMail_En;
	}
	else {
		return _Message_ValidMail_De;
	}
}

function Message_SuccessfullySend()
{
	if ( _CurrentLanguage == "de" ) {
		return _Message_SuccessfullySend_De;
	}
	else if ( _CurrentLanguage == "en" ) {
		return _Message_SuccessfullySend_En;
	}
	else {
		return _Message_SuccessfullySend_De;
	}
}

function Message_ErrorSend()
{
	if ( _CurrentLanguage == "de" ) {
		return _Message_ErrorSend_De;
	}
	else if ( _CurrentLanguage == "en" ) {
		return _Message_ErrorSend_En;
	}
	else {
		return _Message_ErrorSend_De;
	}
}

function Message_SendingMessage()
{
	if ( _CurrentLanguage == "de" ) {
		return _Message_SendMessage_De;
	}
	else if ( _CurrentLanguage == "en" ) {
		return _Message_SendMessage_En;
	}
	else {
		return _Message_SendMessage_De;
	}	
}