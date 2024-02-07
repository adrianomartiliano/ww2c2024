<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

include "./conexao.php";

// Recebe os dados enviados pelo formulário React
$data = json_decode(file_get_contents("php://input"));
var_dump($data);

// Preparando a consulta SQL para inserir os dados
$sql = "INSERT INTO X1PRATA (id, nickname, clan, contato) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
if ($data !== null) {
    $stmt->bind_param("isss", $data->id, $data->nickname, $data->clan, $data->contato);
} else {
    echo "Dados recebidos do formulário estão vazios ou inválidos.";
}


// Executando a consulta SQL
if ($stmt->execute()) {
    echo json_encode(array("message" => "Dados adicionados com sucesso."));
} else {
    echo json_encode(array("message" => "Erro ao adicionar dados."));
}

// Fechar a conexão com o banco de dados
$stmt->close();
$conn->close();
?>

