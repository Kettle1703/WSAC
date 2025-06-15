<?php
$input = $_POST["user_input"] ?? "";

if ($input === "qwe") {
    echo "qwerty";

} elseif ($input === "asd") {
    // Подключение к базе данных
    $host = "pg4.sweb.ru";
    $port = "5433";
    $dbname = "prytkovmis";
    $user = "prytkovmis";
    $password = "FD5JDS9ABe^47";

    $connStr = "host=$host port=$port dbname=$dbname user=$user password=$password";
    $conn = pg_connect($connStr);

    if (!$conn) {
        echo "Ошибка подключения к базе данных";
        exit;
    }

    $result = pg_query($conn, "SELECT id, type, date_buy FROM option_1.car");

    if (!$result) {
        echo "Ошибка запроса: " . pg_last_error($conn);
        exit;
    }

    $rows = [];
    while ($row = pg_fetch_assoc($result)) {
        $rows[] = implode(", ", $row);
    }

    echo "Результат: " . implode(" | ", $rows);

} else {
    echo "Введите текст заново";
}
