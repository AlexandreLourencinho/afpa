<?php 
// titre page
$titre="nos produits!";
// appel bdd et header
include "../view/includes/header.php";
require_once "../model/bdd/conn_db.php";
require_once "../model/CRUD/crud.php";
//require_once "utilisateurs.php";
$crud = new crud($pdo);
// appelle la fonction qui liste les stations
$resultats = $crud->getProduits(); ?>

<!-- tableau contenant les produits -->
<table class="table table-striped table-hover table-responsive col-12">
    <!--  tête de tableau -->
        <thead>
            <th class="d-none d-lg-block">Photo</th>
            <th>ID</th>
            <th>Libellé</th>
            <th>Prix</th>
            <th>Stocks</th>
            <th>couleur</th>
            <th>Date d'ajout</th>
            <th>Dernière modification</th>
            <th>Blocage</th>
        </thead>
        <!-- boucle qui crée le tableau tant qu'il y a des données a afficher -->
        <?php while($r = $resultats->fetch(PDO::FETCH_ASSOC))
        // ouverture de l'accolade et fermeture dans l'autre balise php :
        // permet que rien ne s'affiche si erreur
              { ?>
              <!--  début du tableau généré dynamiquement -->
              <!-- via noms de variables php -->
        <tr>
            <td class="d-none d-lg-block"><img src="../assets/IMG/<?php echo $r['pro_id'].".".$r['pro_photo'] ?>"  style="max-width:20%;" class="img-fluid img-thumbnail d-none d-lg-block w-25"></td>
            <td><?php echo $r['pro_id'] ?></td>
            <td><a href="../view/details.php?id=<?php echo $r['pro_id']; ?>" class="text-danger"><u><b><?php echo strtoupper($r['pro_libelle']); ?></b></u></td>
            <td><?php echo $r['pro_prix'] ?></td>
            <td><?php echo $r['pro_stock'] ?></td>
            <td><?php echo $r['pro_couleur'] ?></td>
            <td><?php echo $r['pro_d_ajout'] ?></td>
            <td><?php echo $r['pro_d_modif'] ?></td>
            <td><?php echo $r['pro_bloque'] ?></td>
            <!-- <td>
            <a href="details.php?id=<?php // echo $r['sta_id']?>" class="btn btn-dark"> détails</a>
            <a href="editer.php?id=<?php //echo $r['sta_id']?>" class="btn btn-warning">EDITER</a>
            <!-- bouton supprimé avec alerte JS -->
            <!-- <a onclick="//return confirm('êtes vous sûr de vouloir supprimer cette station?');"href="supprimertest.php?id=<?php //echo $r['sta_id']?>" class="btn btn-danger">SUPPRIMER</a> -->
            <!-- </td> --> 
        </tr>
        <!-- fermeture de l'accolade citée plus haut -->
        <?php } ?>
    </table>
<!-- footer -->
<?php include "../view/includes/footer.php"; ?>