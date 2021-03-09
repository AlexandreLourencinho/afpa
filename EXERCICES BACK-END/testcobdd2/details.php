<?php   
        // nomme la page
        $titre = "détails";
        // appelle le header et la bdd
        include "includes/header.php";
        require_once "scripts/co_bdd.php";
        // si l ' id n'est pas récupéré 
        if(!isset($_GET['id']))
        {
                // message d'erreur
                include "includes/mErr.php";
               
        }
        else 
        {
                // assigne l'id a $id
                $id = $_GET['id'];
                // appelle la fonction getdetails qui récupère les données d'une station
                $r = $crud->getDetails($id);
        
        ?>
<!-- affichage de la carte station -->


<section id="cover">
        <div id="cover-caption">
                <div class="container">
                        <div class="row">
                                <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                        <div class="card col-12">
                                                <div class="card-header">
                                                                <h3 class="card-title text-primary">
                                                                <?php echo "identifiant de la station : " 
                                                                . $r['sta_id']?>
                                                                </h3>
                                                </div>
                                                <div class="card-body">
                                                <h5 class="card-subtitle text-secondary">
                                                                <?php echo "nom de la station : " 
                                                                . $r["sta_nom"] . ".";?>
                                                                </h5>
                                                <p class="card-text"><?php echo "altitude de la station : " 
                                                . $r["sta_altitude"] . "."; ?></p>
                                                <!-- bouton pour retourner a la liste des stations -->
                                                <a href="viewrecords.php" 
                                                class="btn btn-primary">Retour a la liste des stations</a>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</section>

<?php } ?>
<!-- appelle le footer -->
<?php include("includes/footer.php"); ?>