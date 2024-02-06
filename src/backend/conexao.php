<?php
$host = 'auth-db1186.hstgr.io'; // Endereço do servidor do banco de dados
$usuario = 'u516367395_goku'; // Nome de usuário do banco de dados
$senha = '0qX[fTH&'; // Senha do banco de dados
$banco = 'u516367395_ww2c'; // Nome do banco de dados

// Conectando ao banco de dados MySQL
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verifica se houve erro na conexão
if ($conexao->connect_error) {
    die('Erro de conexão: ' . $conexao->connect_error);
}
?>
