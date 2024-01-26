<?php
$host = ''; // Endereço do servidor do banco de dados
$usuario = ''; // Nome de usuário do banco de dados
$senha = ''; // Senha do banco de dados
$banco = ''; // Nome do banco de dados

// Estabelece a conexão com o banco de dados
$conexao = new mysqli($host, $usuario, $senha, $banco);

// Verifica se houve erro na conexão
if ($conexao->connect_error) {
    die('Erro de conexão: ' . $conexao->connect_error);
}
?>
