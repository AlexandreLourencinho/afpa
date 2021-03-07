<?php 
// titre page
$titre="enregistrements";
// appel bdd et header
include "includes/header.php";
require_once "scripts/co_bdd.php";
// appelle la fonction qui liste les stations
$resultats = $crud->getStations();
?>

<!-- tableau contenant les stations -->
    <table class="table">
    <!--  tête de tableau -->
        <thead>
            <th>#</th>
            <th> Nom station</th>
            <th> Altitude </th>
            <th>Actions</th>
        </thead>
        <!-- boucle qui crée le tableau tant qu'il y a des données a afficher -->
        <?php while($r = $resultats->fetch(PDO::FETCH_ASSOC))
        // ouverture de l'accolade et fermeture dans l'autre balise php :
        // permet que rien ne s'affiche si erreur
              { ?>
              <!--  début du tableau généré dynamiquement -->
              <!-- via noms de variables php -->
        <tr>
            <td><?php echo $r['sta_id'] ?></td>
            <td><?php echo $r['sta_nom'] ?></td>
            <td><?php echo $r['sta_altitude'] ?></td>
            <td>
            <a href="details.php?id=<?php echo $r['sta_id']?>" class="btn btn-dark"> détails</a>
            <a href="editer.php?id=<?php echo $r['sta_id']?>" class="btn btn-warning">EDITER</a>
            <!-- bouton supprimé avec alerte JS -->
            <a onclick="return confirm('êtes vous sûr de vouloir supprimer cette station?');"
             href="supprimertest.php?id=<?php echo $r['sta_id']?>" class="btn btn-danger">SUPPRIMER</a>
            </td>
        </tr>
        <!-- fermeture de l'accolade citée plus haut -->
        <?php } ?>
    </table>





<!-- footer -->
<?php 
include("includes/footer.php"); 
?>