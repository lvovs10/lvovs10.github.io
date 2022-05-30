$fio = $_POST['fio'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);


$fio = urldecode($fio);
$email = urldecode($email);
$phone = urldecode($phone);


$fio = trim($fio);
$email = trim($email);
$phone = trim($phone);

mail("lvovsergei5@.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n");
if (mail("lvovsergei5@.ru", "Заказ с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
ini_set('display_errors','On');
error_reporting('E_ALL');
