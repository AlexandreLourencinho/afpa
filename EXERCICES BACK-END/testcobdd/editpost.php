<?php 
// pas besoin d'un titre...
$titre = "editpost " ;
// appelle la BDD
require_once("scripts/co_bdd.php");
// si récupère l'id
    if(isset($_POST["submit"])){
        // extrait les valeurs incluses dans post
        $id = $_POST['id'];
        $nom = $_POST["nom"];
        $altitude = $_POST["altitude"];
        // appelle la fonction qui va éditer
        $result = $crud->editStation($id, $nom, $altitude);
        // si réussi
        if($result == true)
        {
            // redirection a la page des vues si ça a marché
            header("location: viewrecords.php");
        }
        // sinon : message d'erreur
        else
        {
            echo "error";
        }
    }
    // si ne récupère pas l'id
        else {
            echo '<h1 class="text-center text-danger">il y eu une erreur!!!!</h1>';
        }
    
?> 