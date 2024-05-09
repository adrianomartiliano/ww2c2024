<?php
// Incluir arquivo de conexão
include 'conexao.php';

// Verificar conexão
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

// Consulta SQL para buscar os jogadores do CAN2 e calcular a diferença entre semana4 e semana3
$sql = "SELECT jogador, (semana4 - semana3) AS diferenca FROM RANKING_CAN WHERE clan = 'CAN2' ORDER BY diferenca DESC";
$result = $conn->query($sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório CAN 2</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" type="text/css" href="relatorio.css">
</head>
<body>
    <h1>Relatório CAN 2</h1>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Jogador</th>
                <th>Pontos</th>
            </tr>
        </thead>
        <tbody>
            <?php
            // Inicializar o contador
            $posicao = 1;
            
            // Exibir os jogadores em forma de tabela
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $posicao++ . "</td>";
                    echo "<td>" . $row["jogador"] . "</td>";
                    // Formatar o número com separador de milhar
                    echo "<td>" . number_format($row["diferenca"], 0, ',', '.') . "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='3'>Nenhum jogador encontrado</td></tr>";
            }
            ?>
        </tbody>
    </table>
</body>
</html>

<?php
// Fechar conexão
$conn->close();
?>
