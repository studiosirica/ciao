<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $messaggio = htmlspecialchars($_POST["messaggio"]);

    // Simula l'elaborazione dei dati (ad es. invio di un'email o salvataggio su database)
    // Per ora, visualizziamo i dati sul browser
    echo "<h1>Messaggio Ricevuto</h1>";
    echo "<p>Nome: $nome</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Messaggio: $messaggio</p>";
}
?>
