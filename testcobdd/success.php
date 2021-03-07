<?php 
//titre page
    $titre = "succès" ;
    //appel header et bdd
    include "includes/header.php";
    require_once("scripts/co_bdd.php");
    // si le submit est bien arrivé a destination
        if(isset($_POST["submit"])){
            // extrait les valeurs incluses dans post
            $nom = $_POST["nom"];
            $altitude = $_POST["altitude"];
            $isSuccess = $crud->insertStation($nom,$altitude);
            // si la fonction d'insertion a bien été executée
            if($isSuccess) {
                echo '<h1 class="text-center text-success"> Vous avez bien ajouté une station dans la BDD!</h1>';
            }
            // s'il y eu une erreur!!!!!
            else {
                echo '<h1 class="text-center text-danger">il y eu une erreur!!!!</h1>';
            }
        }
?> 
<!-- display info station rentrée -->
<div class="card col-12 col-lg-4">
    <div class="card-header">
        <h3 class="card-title text-primary">
            <?php echo "nom de la station : " . $_POST["nom"] . ".";?>
        </h3>
    </div>
    <div class="card-body">
        <h5 class="card-subtitle text-secondary">
            <?php echo "altitude de la station : " . $_POST["altitude"] . "."; ?>
        </h5>
    </div>
</div>

<?php include("includes/footer.php"); ?>
