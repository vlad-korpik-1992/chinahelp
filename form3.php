<?php
$username = trim($_POST['name']);
$phone = trim($_POST['phone']);
$question1Answer = implode('|',$_POST['question1Answer']);
$question2Answer = trim($_POST['question2Answer']);
$question3Answer = trim($_POST['question3Answer']);
$question4Answer = trim($_POST['question4Answer']);
$to = "astronautoptima@gmail.com";
$subject = "Сообщение с сайта. Пройден квиз";
$message = "Имя: $username \nТелефон: $phone \nЧто Вас интересует в Китае? \n$question1Answer \nЕсть ли у вас уже поставщик в Китае? $question2Answer \nРаботали ли ранее с Китаем? $question3Answer \nЕсть ли у вас готовое техническое задание на поиск, производство? $question4Answer";

mail($to, $subject, $message);
?>