<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Configurações do banco de dados
$host = 'auth-db1186.hstgr.io'; // Endereço do servidor do banco de dados
$usuario = 'u516367395_goku'; // Nome de usuário do banco de dados
$senha = '0qX[fTH&'; // Senha do banco de dados
$banco = 'u516367395_ww2c'; // Nome do banco de dados

// Conexão com o banco de dados
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verifica conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

// Consulta SQL para recuperar os dados desejados da tabela
$sql = "SELECT * FROM recado";
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
