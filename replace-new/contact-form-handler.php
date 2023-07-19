<?php
  if (! empty($_POST["send"])) {
    $name = $_POST["userName"];
    $email = $_POST["userEmail"];
    $phonet = $_POST["userPhone"];
    $subject = "Replace contact form";
    $toEmail = "bnlphta@email2telegram.com";
    $mailHeaders = "From: " . $name . "<" . $email . "> ". $phone ."\r\n";

    mail($toEmail, $subject, $content, $mailHeaders)
  }
?>