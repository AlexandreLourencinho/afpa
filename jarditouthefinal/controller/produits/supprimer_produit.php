<?php   
$titre="erreur";    
// appel bdd et header
// include "../view/includes/header.php";
require_once "../../model/bdd/conn_db.php"; 
require_once "../../model/CRUD/crud.php";
//require_once "utilisateurs.php";
$crud = new crud($pdo);
        if(!isset($_GET['id']))
        {
                // message d'erreur
                echo "<h1 class='text-danger'>Une erreur est survenue : essayez a nouveau</h1>";
               
        }
        else 
        {
                // assigne l'id a $id
                $id = $_GET['id'];
                // appelle la fonction getdetails qui récupère les données d'une station
                $r = $crud->read($id);
                // titre page
                $titre = $r['pro_libelle'];
                include "../../view/includes/header.php";
?>
<section id="cover" class="shadow-lg">
    <div id="cover-caption">
        <div class="container shadow-lg justify-content-center">
            <div class="row justify-content-center">
            <img src="../../assets/IMG/<?php echo $id.'.'.$r['pro_photo'];?>" width="300" alt="" srcset="">
<h1 class="text-danger">&#9940; <b>Êtes vous sûr de vouloir supprimer <?php echo $r['pro_libelle']; ?> de la base de donnée?&#9940;</b></h1>
<h2 class="text-warning"><u>La suppression est irreversible.</u></h2>
</div>
<a href="../../view/tableau_produits.php" class='btn btn-primary'>retour à la liste des produits</a>

<a href="../../model/produits/supprimer_produit_script.php?id=<?php echo $r['pro_id']; ?>" class='btn btn-danger'
onclick="confirm('Êtes vous certain de vouloir supprimer <?php echo $r['pro_libelle'];?> de la liste des produits?')"> Confirmer la supression</a>
        </div>
    </div>
</section>











<?php } ?>
<?php include "../../view/includes/footer.php"; ?>
