<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Tutaj wpisz swój adres e-mail
    $to = "magnesy.olkusz@gmail.com";

    $body = "";
    $body .= "From: ".$name. "\r\n";
    $body .= "Email: ".$email. "\r\n";
    $body .= "Message: ".$message. "\r\n";

    mail($to,$subject,$body);

    echo "Email sent!";
} else {
    echo "No data received!";
}
?>