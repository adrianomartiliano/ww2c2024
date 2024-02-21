<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

include "./conexao.php";

// Consulta SQL para recuperar os dados desejados da tabela
$sql = "SELECT nickname, pontos, kills, pc FROM X1PRATA ORDER BY grupo, pontos DESC, kills DESC, pc DESC";
$resultado = $conn->query($sql);

// Verifica se a consulta retornou resultados
if ($resultado->num_rows > 0) {
    $dados = array();
    while ($linha = $resultado->fetch_assoc()) {
        $dados[] = $linha;
    }
    // Retorna os dados no formato JSON
    echo json_encode($dados);
} else {
    // Se não houver resultados, retorna uma mensagem
    echo json_encode(array("message" => "Nenhum dado encontrado."));
}

// Fecha conexão com o banco de dados
$conn->close();
?>