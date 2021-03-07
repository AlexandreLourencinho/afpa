<?php   
        // titre page
        $titre = "suppression";
        // appel des pages php header et bdd
        include "includes/header.php";
        require_once "scripts/co_bdd.php";
        // si l'id n'est pas récupéré
        if(!isset($_GET['id']))
                {   
                // echo message d'erreur
                        echo "<h1 class='text-danger'>Une erreur est survenue : essayez a nouveau</h1>";
                
                }
        else 
                {
                        // assigne l'id de la station choisie a $id
                        $id = $_GET['id'];
                        // appelle la même fonction que pour les détails pour afficher les détails de la station
                        $r = $crud->getDetails($id);
                
        ?>
<!-- affiche les détails de la station -->
<section id="cover">
        <div id="cover-caption">
                <div class="container">
                        <div class="row">
                                <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                <a href="viewrecords.php"><button class="btn btn-primary">
                                Retour à la liste des stations</button></a>
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
                                                        <p>voulez vous vraiment supprimer cette station ?</p>
                        <!-- bouton supprimer qui redirige vers la page de script 
                        permettant de supprimer la station -->
                        <!-- + retour javascript pour être BIEN SUR DE VOULOIR SUPPRIMER MON TAF PTIN -->
                                                        <a onclick="return confirm('êtes vous sûr de vouloir supprimer cette station?');"
                                                        href="supprimer.php?id=<?php echo $r['sta_id']?>"
                                                         class="btn btn-danger">SUPPRIMER</a>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</section>
<!-- fermeture accolade, pareil que les autres : n'affiche pas tout ça Î si erreur -->
        <?php } ?>
<!-- footer -->
<?php include("includes/footer.php"); ?>