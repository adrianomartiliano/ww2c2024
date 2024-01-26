<?php

include 'conexao.php';

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebe os dados do formulário
    $nome = $_POST["nome"];
    $clan = $_POST["clan"];
    $recado = $_POST["recado"];

    // Prepara a consulta SQL para inserção de dados
    $sql = "INSERT INTO sugestoes (nome, clan, recado) VALUES ('$nome', '$clan', '$recado')";

    // Executa a consulta
    if ($conexao->query($sql) === TRUE) {
        echo "Sugestão enviada com sucesso!";
    } else {
        echo "Erro ao enviar sugestão: " . $conexao->error;
    }

    // Fecha a conexão com o banco de dados
    $conexao->close();
} else {
    echo "Erro: método de requisição inválido.";
}
?>


?>