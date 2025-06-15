<?php
header('Content-Type: application/json');

$id = $_GET['id'] ?? '';
if (empty($id)) {
    echo json_encode(['error' => 'ID не указан']);
    exit;
}

// Подключение к базе данных
$host = "pg4.sweb.ru";
$port = "5433";
$dbname = "prytkovmis";
$user = "prytkovmis";
$password = "FD5JDS9ABe^47";

$connStr = "host=$host port=$port dbname=$dbname user=$user password=$password";
$conn = pg_connect($connStr);

if (!$conn) {
    echo json_encode(['error' => 'Ошибка подключения к БД']);
    exit;
}

// Защита от SQL-инъекций
$id = pg_escape_string($conn, $id);
$result = pg_query($conn, 'SELECT last_name, first_name, address FROM "option_1"."comp_center" WHERE id = \'' . $id . '\'');

if (!$result) {
    echo json_encode(['error' => 'Ошибка запроса: ' . pg_last_error($conn)]);
    exit;
}

$row = pg_fetch_assoc($result);
if (!$row) {
    echo json_encode(['error' => 'Данные не найдены']);
    exit;
}

// Возвращаем данные в формате JSON
echo json_encode([
    'field1' => $row['last_name'] ?? '',
    'field2' => $row['first_name'] ?? '',
    'field3' => $row['address'] ?? ''
]);