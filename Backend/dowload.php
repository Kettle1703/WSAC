<?php
$mode = $_POST['mode'] ?? '';
$filename = $_POST['filename'] ?? '';

$uploadDir = '/home/p/prytkovmis/public_html/uploads/';
$fullPath = $uploadDir . basename($filename);

if ($mode === 'upload') {
    if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
        http_response_code(400);
        echo "Ошибка при загрузке файла.";
        exit;
    }

    if (move_uploaded_file($_FILES['file']['tmp_name'], $fullPath)) {
        echo "Файл успешно загружен.";
    } else {
        http_response_code(500);
        echo "Ошибка при сохранении файла на сервере.";
    }

} elseif ($mode === 'download') {
    if (!file_exists($fullPath)) {
        http_response_code(404);
        echo "Файл не найден: $fullPath";
        exit;
    }

    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header("Content-Disposition: attachment; filename=\"" . basename($fullPath) . "\"");
    header('Content-Length: ' . filesize($fullPath));
    readfile($fullPath);
    exit;
} else {
    http_response_code(400);
    echo "Неверный режим работы.";
}
