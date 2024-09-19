<?php

// get everything from input form
$mailRequest = $_REQUEST['email'];
$messageRequest = $_REQUEST['message'];
$nameRequest = $_REQUEST['name'];
$subjectRequest = $_REQUEST['subject'];

$to = "Zikorons@gmail.com";
$subject = $subjectRequest;
$messageRequest = wordwrap($messageRequest, 70);

$message = '<html><body>';
$message .= '<p><b>Name:</b> ' . $nameRequest . '</br>';
$message .= '<b>Mail:</b> ' . $mailRequest . '</p>';
$message .= '<p>' . $messageRequest . '</p>';
$message .= '</body></html>';

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: hubert.staerk@ensemble-zikoron.de' . "\r\n";

$mail = mail($to,$subject,$message,$headers, "-f hubert.staerk@ensemble-zikoron.de");

if($mail){
  echo "success";
}else{
  echo "error"; 
}
?>