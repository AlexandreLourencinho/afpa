<?php 
include("includes/header.php");
require_once("scripts/co_bdd.php");
if(isset($_POST["submit"])){
    // extrait les valeurs incluses dans post
    $nom = $_POST["nom"];
    $altitude = $_POST["altitude"];
    $isSuccess = $crud->insertStation($nom,$altitude);
    if($isSuccess) {
        echo '<h1 class="text-center text-success"> Vous avez bien ajouté une station dans la BDD!</h1>';
    }
    else {
        echo '<h1 class="text-center text-danger">il y eu une erreur!!!!</h1>';
    }
}



?> 

<div class="card col-4">
<div class="card-body">
<h5 class="card-title text-primary">
<?php echo "nom de la station : " . $_POST["nom"] . ".";
?>
</h5>
<h6 class="card-subtitle text-primary">
<?php echo "altitude de la station : " . $_POST["altitude"] . "."; ?>
</h6></div></div>



<?php include("includes/footer.php"); ?>