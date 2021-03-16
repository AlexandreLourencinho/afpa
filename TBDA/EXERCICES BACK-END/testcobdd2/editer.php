<?php 
    // titre page
        $titre = "Editer";
        // appel bdd et script
        include "includes/header.php";
        require_once "scripts/co_bdd.php";
        // appel fonction qui rappel les stations
        $resultats = $crud->getStations();
        // si l'id est set et selon l'id....
        if(!isset($_GET["id"]))
        {
                include "includes/mErr.php";
               
        }
        else 
        // accolade ouverte ici et fermée en fin de page
        // dans l'autre balise php
        // permet de ne pas afficher tout le formulaire si erreur
        {
                // donne a $id l'id de la station
                $id = $_GET["id"];
                // appel la station correspondante
                $r = $crud->getDetails($id);
        
        ?>
    <br>
    <br>
    <!-- formulaire d'edit -->
<section id="cover">
    <div id="cover-caption">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    <h1>Saisie d'un nouvel enregistrement</h1>
                    <a href="viewrecords.php"><button class="btn btn-primary">Retour à la liste des stations</button></a>
                        <form action ="/scripts/editpost.php" method="post" class="justify-content-center">
                            <input type="hidden" name='id' value="<?php echo $r['sta_id']?>">

                            <label for="nom_for_label">Nom de la station :</label><br>
                                <input type="text" value="<?php echo $r['sta_nom'] ?>" name="nom" id="nom_for_label">
                                    <br><br>
                            <label for="altitude_for_label">Altitude :</label><br>
                                <input type="text" value="<?php echo $r['sta_altitude'] ?>" name="altitude" id="altitude_for_label">
                                    <br><br>
                            <input type="submit" name ="submit" value="Sauvegarder les changements" class = "btn btn-success">

                        </form>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- fermture accolade affichage -->
<?php } ?>
<!-- footer -->
<?php include("includes/footer.php"); ?>