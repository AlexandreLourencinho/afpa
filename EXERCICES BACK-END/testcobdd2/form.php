<?php 
// titre page...
    $titre = "formulaire ajout" ;
    // appel header et bdd
    include "includes/header.php";
    require_once 'scripts/co_bdd.php';
?>
<!-- formulaire d'ajout -->

<!-- bouton retour liste -->
    

    <br>
    <br>
<section id="cover">
    <div id="cover-caption">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <a href="viewrecords.php"><button class="btn btn-primary">Retour à la liste des stations</button></a>
                <h1 class='text-info'>Saisie d'un nouvel enregistrement</h1>
                    <form action ="../success.php" method="post">

                        <label for="nom_for_label">Nom de la station :</label><br>
                        <input type="text" value="" name="nom" id="nom_for_label">
                        <br><br>

                        <label for="altitude_for_label">Altitude :</label><br>
                        <input type="text" value=""  name="altitude" id="altitude_for_label">
                        <br><br>

                        <input type="submit" name ="submit" value="Ajouter" class="btn btn-info">

                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- footer -->
<?php include("includes/footer.php"); ?>