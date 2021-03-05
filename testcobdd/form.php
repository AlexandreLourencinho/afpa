<?php include("includes/header.php"); ?>

<body>
<?php
require_once 'scripts/co_bdd.php';
?>
    <h1>Saisie d'un nouvel enregistrement</h1>

    <a href="index.php"><button>Retour à la liste des stations</button></a>

    <br>
    <br>

    <form action ="../success.php" method="post">

        <label for="nom_for_label">Nom de la station :</label><br>
        <input type="text" value="" name="nom" id="nom_for_label">
        <br><br>

        <label for="altitude_for_label">Altitude :</label><br>
        <input type="text" value=""  name="altitude" id="altitude_for_label">
        <br><br>

        <input type="submit" name ="submit" value="Ajouter">

    </form>
</body>



<?php include("includes/footer.php"); ?>