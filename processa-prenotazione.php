<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $data = htmlspecialchars($_POST["data"]);
    $orario = htmlspecialchars($_POST["orario"]);

    // Simula l'elaborazione dei dati (ad es. invio di un'email o salvataggio su database)
    // Per ora, visualizziamo i dati sul browser
    echo "<h1>Prenotazione Ricevuta</h1>";
    echo "<p>Nome: $nome</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Data: $data</p>";
    echo "<p>Orario: $orario</p>";
}
?>
