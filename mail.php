<?php
// Подключение библиотеки
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Получение данных
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Данные
$name = $data['name'];
$phone = $data['phone'];

// Контент письма
$title = 'Заявка с сайта';
$body = '<p>Имя: <strong>'.$name.'</strong></p>'.
        '<p>Телефон: <strong>'.$phone.'</strong></p>';

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->SMTPAuth   = true;

  // Настройки почты отправителя
  $mail->Host       = 'smtp.yandex.com';
  $mail->Username   = 'msannayakubovich@yandex.ru';
  $mail->Password   = 'zryxwbsewlkednyn';
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('msannayakubovich@yandex.ru', 'Заявка с сайта');

  // Получатель письма
  $mail->addAddress('msannayakubovich@yandex.ru');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send('d');

  // Сообщение об успешной отправке
  echo ('Заявка отправлена успешно!');

} catch (Exception $e) {
  header('HTTP/1.1 400 Bad Request');
  echo('Заявка не отправлена! Причина ошибки: {$mail->ErrorInfo}');
}
