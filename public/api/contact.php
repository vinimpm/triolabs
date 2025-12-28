<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name = htmlspecialchars($data['name'] ?? '');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$company = htmlspecialchars($data['company'] ?? '');
$message = htmlspecialchars($data['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Campos obrigatórios não preenchidos']);
    exit;
}

$destinatario = 'contato@triolab.com.br';
$assunto = "Novo contato do site - $name";

$corpo = "
Nome: $name
Email: $email
Empresa: $company

Mensagem:
$message
";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($destinatario, $assunto, $corpo, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao enviar mensagem']);
}
?>
