<?php

// get everything from input form
$mail = $_REQUEST['email'];
$tickets = $_REQUEST['tickets'];
$firstname = $_REQUEST['firstname'];
$lastname = $_REQUEST['lastname'];
$phone = $_REQUEST['phone'];

// set subject
$subject =  'Reservierung Forstenried 01.04.2017 - ' . $firstname . ' ' . $lastname;

// target address
$to = 'Zikorons@gmail.com'; //destination email

// construct email body
$message1 = '<h2>Reservierung Forstenried 01.04.2017</h2>';
$message2 = '<p>Name: ' . $firstname . " " . $lastname . '</p>';
$message3 = '<p>Mail: ' . $mail . '</p>';
$message4 = '<p>Telefon: ' . $phone . '</p>';
$message5 = '<p>Tickets: ' . $tickets . '</p>';
$message = '<html><body><p>' . $message1 . $message2 . $message3 . $message4 . $message5 .'</p></body></html>';

// always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// more headers
$headers .= 'From: hubert.staerk@ensemble-zikoron.de' . "\r\n";

$mail = mail($to,$subject,$message,$headers, "-f hubert.staerk@ensemble-zikoron.de");

if($mail){
  echo "success";
}else{
  echo "error"; 
}
?>