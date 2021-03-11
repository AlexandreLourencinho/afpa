<?php   
$titre="Ajoutez un produit!";    
// appel bdd et header
// include "../view/includes/header.php";
require_once "../../model/bdd/conn_db.php";
require_once "../../model/CRUD/crud.php";
//require_once "utilisateurs.php";
$crud = new crud($pdo); 
$requete = "SELECT * FROM categories group by cat_id"; // Requête SQL pour sélectionner les catégories 
$result = $pdo->query($requete);
date_default_timezone_set('Europe/Paris'); 
$pro_d_ajout = date("Y-m-d");
include "../../view/includes/header.php";
?>
<section id="cover">
    <div id="cover-caption">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    <div class="card col-12 shadow-lg">                    
                        <form method="POST" action="../../model/produits/ajouter_produit_script.php" enctype="multipart/form-data">
                            <div class="form-group">
                                <label for="ref">Référence :</label>
                                    <input type="text" id="ref" class="form-control" name="pro_ref" required>

                                <input type="hidden" name='pro_id' id='pro_id'>

                                <label for="pro_cat_id">Catégorie :</label>
                                <select class="custom-select" name="pro_cat_id" id="pro_cat_id" required>
                               <?php while($r = $result->fetch(PDO::FETCH_OBJ)) // Pour afficher la liste des catégories sous forme d'un menu déroulant 
                               // Renvoi de l'enregistrement sous forme d'un objet
                                        {?>
                                    <option value="<?php echo $r->cat_id;?>"><?=$r->cat_id."-".$r->cat_nom?></option>
                                            <?php } ?>                                        
                                </select>


                                <label for="ref">Libellé :</label>
                                    <input type="text" required class="form-control" name="pro_libelle">


                                <label for="ref">Description :</label>
                                    <textarea id='txtarea' required name="pro_description" type="text" class="form-control"
                                    ></textarea>


                                <label for="ref">Prix :</label>
                                    <input type="text" class="form-control" name="pro_prix" required>


                                <label for="ref">Stock :</label>
                                    <input type="text" class="form-control" name="pro_stock" required>


                                <label for="ref">Couleur :</label>
                                    <input type="text" class="form-control" name="pro_couleur" required>


                                <label for="pro_bloque">Produit bloqué? :</label> <br>
                                <input type="radio" class="mr-1" name="pro_bloque" value="1" id="pro_bloque">oui
                                <input type="radio" class="ml-1 mr-1" name="pro_bloque" id="pro_bloque" value="0">non <br>


                                <label for="pro_d_ajout">Date d'ajout : </label>
                                    <input type="text" class="form-control" name="pro_d_ajout" id='pro_d_ajout' readonly value="<?php echo $pro_d_ajout; ?>">
                                <br>

                                <label for="pro_photo">choisissez une photo d'illustration</label>
                                <input type="file" accept="image/*" class="btn btn-primary" id="pro_photo" required name="pro_photo">                                
                                 <br> <br>
                                <input type="hidden" name="pro_id">
                                <button name="submit" value="submit" type="submit" class="btn btn-success mb-3">Ajouter le produit à la liste!</button>
                                <a href="../../view/tableau_produits.php" class="btn btn-primary mb-1">Retour a la liste des produits</a>                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>







<!-- footer -->
<?php include "../../view/includes/footer.php"; ?>