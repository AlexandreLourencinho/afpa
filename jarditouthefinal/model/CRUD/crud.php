<?php
// crée une classe crud pour rassembler les fonctions utilisée, appelée ensuite
// avec le $crud
class crud
{
        // objet base de donnée privée
        private $db;
        // constructor pour ini une variable privée pour la co a la bdd
        function __construct($conn)
        {
                $this->db = $conn;
        }
        // fonction pour rentrer un truc dans la base jarditou - public , utilisée par tout le monde
        public function create($pro_cat_id, $pro_ref, $pro_libelle, $pro_description, $pro_prix, $pro_stock, 
                                     $pro_couleur, $extension, $pro_d_ajout, $pro_photo, $pro_bloque)
        {
            try 
            {
                       // si image choisie                     
                    if(isset($_POST['illu']))
                        {
                            date_default_timezone_set('Europe/Paris');
                            $pro_d_ajout = date("Y-m-d H:i:s");
                            // prépare l'execution script sql avec placeholders
                            $sql = "INSERT INTO produits (pro_cat_id, pro_ref, pro_libelle, pro_description, pro_prix, pro_stock, pro_couleur, 
                            pro_photo, pro_d_ajout, pro_bloque) VALUES (:pro_cat_id, :pro_ref, :pro_libelle, :pro_description, :pro_prix, :pro_stock, :pro_couleur, 
                            :pro_photo, '".$pro_d_ajout."', :pro_bloque)";
                            // prépare l'execution du script sql en remplaçant les placeholders
                            $stmt = $this->db->prepare($sql);
                            $stmt->bindparam(":pro_cat_id", $pro_cat_id);
                            $stmt->bindparam(":pro_ref", $pro_ref);
                            $stmt->bindparam(":pro_libelle", $pro_libelle);
                            $stmt->bindparam(":pro_description", $pro_description);
                            $stmt->bindparam(":pro_prix", $pro_prix);
                            $stmt->bindparam(":pro_stock", $pro_stock);
                            $stmt->bindparam(":pro_couleur", $pro_couleur);
                            $stmt->bindparam(":pro_d_ajout", $pro_d_ajout);
                            // ----------------------------- SECURITE - VERIFICATION DU TYPE DE FICHIER AUTORISE -----------------------------
                            // On met les types autorisés dans un tableau (ici pour une image)
                            // Liste des types autorisés : https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
                            $aMimeTypes = array("image/gif", "image/jpeg", "image/jpg", "image/pjpeg", "image/png", "image/x-png", "image/tiff", "image/bmp");                            
                            // On ouvre l'extension FILE_INFO
                            $finfo = finfo_open(FILEINFO_MIME_TYPE);                            
                            // On extrait le type MIME du fichier via l'extension FILE_INFO 
                            $mimetype = finfo_file($finfo, $_FILES["illu"]["tmp_name"]);                            
                            // On ferme l'utilisation de FILE_INFO 
                            finfo_close($finfo);                            
                            if (!in_array($mimetype, $aMimeTypes))
                                {
                                // Le type n'est pas autorisé, donc ERREUR                            
                                    echo "Type de fichier non autorisé";    
                                    exit;
                                            
                                } 
                            else 
                                {
                                    /* Le type est parmi ceux autorisés, donc OK, on va pouvoir déplacer et renommer le fichier */      
                                    // Requête SQL pour récupérer le nouveau nom qui est l'ID
                                    $extension = substr (strrchr ($_FILES['illu']['name'], "."), 1);
                                    $nouveauNom = $new_id.'.'.$extension;
                                    $cheminEtNomTemporaire = $_FILES['illu']['tmp_name']; 
                                    // ['fichier'] récupère le name du fichier qui s'appelle fichier à la ligne 189 dans l'input de produits_ajout.php
                                    $cheminEtNomDefinitif = '../view/assets/images/jarditou_photos/'.$nouveauNom;
                                    $moveIsOk = move_uploaded_file($cheminEtNomTemporaire, $cheminEtNomDefinitif); 
                                    // Fonction qui permet de renommer et déplacer le fichier dans le dossier souhaité
                                    if ($moveIsOk) 
                                        {
                                            echo "Le fichier a été uploadé dans ".$cheminEtNomDefinitif;
                                        }
                                    else 
                                        {
                                            echo "Suite à une erreur, le fichier n'a pas été uploadé";
                                        }
                                }
                            // Condition si le produit n'est pas bloqué alors cela affiche 0 ou NULL dans le tableau phpMyAdmin
                            if ($_POST['bloque']==0) 
                                {
                                    $bloque = NULL;
                                } 
                            else if  ($_POST['bloque']==1) 
                                { 
                                    // Si le produit est bloqué alors cela affiche 1 dans le tableau phpMyAdmin
                                    $bloque = 1;
                                }
                            $stmt->bindparam(':pro_photo', $extension);
                            $stmt->bindparam(':pro_bloque', $bloque);
                            
                            // executer la commande sql
                            $stmt->execute();
                            if($stmt)
                                {
                                    //$message = "Le produit a été rajouté dans la base de données";
                                    $new_id = (int)($pdo->lastInsertId()); // En lien avec l'insertion d'image et le renommage du fichier qui sera l'ID
                                    $message = "Insertion réussie";
                                    return true;
                                }
                            else
                                {
                                    $message = "Echec de l'insertion";
                                }
                        }
                    else
                        {
                            date_default_timezone_set('Europe/Paris');
                            $pro_d_ajout = date("Y-m-d H:i:s");
                            $pro_photo = NULL;
                            // prépare l'execution script sql avec placeholders
                            $sql = "INSERT INTO produits (pro_cat_id, pro_ref, pro_libelle, pro_description, pro_prix, pro_stock, pro_couleur, 
                            pro_photo, pro_d_ajout, pro_bloque) VALUES (:pro_cat_id, :pro_ref, :pro_libelle, :pro_description, :pro_prix, :pro_stock, :pro_couleur, 
                            :pro_photo, '".$pro_d_ajout."', :pro_bloque)";
                            // prépare l'execution du script sql en remplaçant les placeholders
                            $stmt = $this->db->prepare($sql);
                            $stmt->bindparam(":pro_cat_id", $pro_cat_id);
                            $stmt->bindparam(":pro_ref", $pro_ref);
                            $stmt->bindparam(":pro_libelle", $pro_libelle);
                            $stmt->bindparam(":pro_description", $pro_description);
                            $stmt->bindparam(":pro_prix", $pro_prix);
                            $stmt->bindparam(":pro_stock", $pro_stock);
                            $stmt->bindparam(":pro_couleur", $pro_couleur);
                            $stmt->bindparam(":pro_d_ajout", $pro_d_ajout);
                            $stmt->bindparam(":pro_photo", $pro_photo);
                            // Condition si le produit n'est pas bloqué alors cela affiche 0 ou NULL dans le tableau phpMyAdmin
                            if ($_POST['bloque']==0) 
                                {
                                    $bloque = NULL;
                                } 
                            else if  ($_POST['bloque']==1) 
                                { 
                                    // Si le produit est bloqué alors cela affiche 1 dans le tableau phpMyAdmin
                                    $bloque = 1;
                                }
                            $stmt->bindparam(':pro_photo', $extension);
                            $stmt->bindparam(':pro_bloque', $bloque);
                            // executer la commande sql
                            $stmt->execute();
                            if($stmt)
                                {
                                    //$message = "Le produit a été rajouté dans la base de données";
                                    $new_id = (int)($pdo->lastInsertId()); // En lien avec l'insertion d'image et le renommage du fichier qui sera l'ID
                                    $message = "Insertion réussie";
                                    return true;
                                }
                            else
                                {
                                    $message = "Echec de l'insertion";
                                }
                            
                        } 
                    }
                // si erreur => display l'erreur
            catch (Exception $e) 
                {
                            // $e obtient le message d'erreur et l' "echo" 
                            echo $e->getMessage();
                            // retour : pas d'insertion
                            return false;
                }
    }





                // fonction -publique ici aussi - pour éditer une station
                public function update($pro_cat_id, $pro_ref, $pro_libelle, $pro_description, $pro_prix, $pro_stock, 
                $pro_couleur, $extension, $pro_d_ajout, $pro_photo, $pro_bloque)
                {
                        try {
                            if(isset($_POST['illu']))
                                {
                                    date_default_timezone_set('Europe/Paris'); // Toujours le datetime avant la variable $date
                                    $pro_d_ajout = date("Y-m-d H:i:s");
                                    // requete SQL pour update
                                    $sql = "UPDATE produits SET pro_ref=:pro_ref, pro_cat_id=:pro_cat_id, pro_libelle=:pro_libelle, 
                                    pro_description=:pro_description, pro_prix=:pro_prix, pro_stock=:pro_stock, pro_couleur=:pro_couleur, 
                                    pro_bloque=:pro_bloque, pro_d_modif='".$date."' WHERE pro_id=:pro_id";
                                    // prépare l'execution du script sql en remplaçant les placeholders
                                    $stmt = $this->db->prepare($sql);
                                    // lie les paramètres placeholders de la requete sql
                                    // aux variables correspondantes
                                    $stmt->bindparam(":pro_cat_id", $pro_cat_id);
                                    $stmt->bindparam(":pro_ref", $pro_ref);
                                    $stmt->bindparam(":pro_libelle", $pro_libelle);
                                    $stmt->bindparam(":pro_description", $pro_description);
                                    $stmt->bindparam(":pro_prix", $pro_prix);
                                    $stmt->bindparam(":pro_stock", $pro_stock);
                                    $stmt->bindparam(":pro_couleur", $pro_couleur);
                                    $stmt->bindparam(":pro_d_ajout", $pro_d_ajout);
                                    // ----------------------------- SECURITE - VERIFICATION DU TYPE DE FICHIER AUTORISE -----------------------------
                                    // On met les types autorisés dans un tableau (ici pour une image)
                                    // Liste des types autorisés : https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
                                    $aMimeTypes = array("image/gif", "image/jpeg", "image/jpg", "image/pjpeg", "image/png", "image/x-png", "image/tiff", "image/bmp");                            
                                    // On ouvre l'extension FILE_INFO
                                    $finfo = finfo_open(FILEINFO_MIME_TYPE);                            
                                    // On extrait le type MIME du fichier via l'extension FILE_INFO 
                                    $mimetype = finfo_file($finfo, $_FILES["illu"]["tmp_name"]);                            
                                    // On ferme l'utilisation de FILE_INFO 
                                    finfo_close($finfo);                            
                                        if (!in_array($mimetype, $aMimeTypes))
                                            {
                                            // Le type n'est pas autorisé, donc ERREUR                            
                                                echo "Type de fichier non autorisé";    
                                                exit;
                                                        
                                            } 
                                        else 
                                            {
                                                /* Le type est parmi ceux autorisés, donc OK, on va pouvoir déplacer et renommer le fichier */      
                                                // Requête SQL pour récupérer le nouveau nom qui est l'ID
                                                $extension = substr (strrchr ($_FILES['illu']['name'], "."), 1);
                                                $nouveauNom = $new_id.'.'.$extension;
                                                $cheminEtNomTemporaire = $_FILES['illu']['tmp_name']; 
                                                // ['fichier'] récupère le name du fichier qui s'appelle fichier à la ligne 189 dans l'input de produits_ajout.php
                                                $cheminEtNomDefinitif = '../view/assets/images/jarditou_photos/'.$nouveauNom;
                                                $moveIsOk = move_uploaded_file($cheminEtNomTemporaire, $cheminEtNomDefinitif); 
                                                // Fonction qui permet de renommer et déplacer le fichier dans le dossier souhaité
                                                if ($moveIsOk) 
                                                    {
                                                        echo "Le fichier a été uploadé dans ".$cheminEtNomDefinitif;
                                                    }
                                                else 
                                                    {
                                                        echo "Suite à une erreur, le fichier n'a pas été uploadé";
                                                    }
                                            }
                                    // Condition si le produit n'est pas bloqué alors cela affiche 0 ou NULL dans le tableau phpMyAdmin
                                    if ($_POST['bloque']==0) 
                                        {
                                            $bloque = NULL;
                                        } 
                                    else if  ($_POST['bloque']==1) 
                                        { 
                                            // Si le produit est bloqué alors cela affiche 1 dans le tableau phpMyAdmin
                                            $bloque = 1;
                                        }
                                    $stmt->bindparam(':pro_photo', $extension);
                                    $stmt->bindparam(':pro_bloque', $bloque);
                                    // executer la commande sql
                                    $stmt->execute();
                                    // retour : requete ok
                                    return true;
                                }
                            else
                                {
                                    date_default_timezone_set('Europe/Paris'); // Toujours le datetime avant la variable $date
                                    $pro_d_ajout = date("Y-m-d H:i:s");
                                    $pro_photo = NULL;
                                    // requete SQL pour update
                                    $sql = "UPDATE produits SET pro_ref=:pro_ref, pro_cat_id=:pro_cat_id, pro_libelle=:pro_libelle, 
                                    pro_description=:pro_description, pro_prix=:pro_prix, pro_stock=:pro_stock, pro_couleur=:pro_couleur, 
                                    pro_bloque=:pro_bloque, pro_d_modif='".$date."' WHERE pro_id=:pro_id";
                                    // prépare l'execution du script sql en remplaçant les placeholders
                                    $stmt = $this->db->prepare($sql);
                                    // lie les paramètres placeholders de la requete sql
                                    // aux variables correspondantes
                                    $stmt->bindparam(":pro_cat_id", $pro_cat_id);
                                    $stmt->bindparam(":pro_ref", $pro_ref);
                                    $stmt->bindparam(":pro_libelle", $pro_libelle);
                                    $stmt->bindparam(":pro_description", $pro_description);
                                    $stmt->bindparam(":pro_prix", $pro_prix);
                                    $stmt->bindparam(":pro_stock", $pro_stock);
                                    $stmt->bindparam(":pro_couleur", $pro_couleur);
                                    $stmt->bindparam(":pro_d_ajout", $pro_d_ajout);
                                    $stmt->bindparam(":pro_photo", $pro_photo);
                                    // Condition si le produit n'est pas bloqué alors cela affiche 0 ou NULL dans le tableau phpMyAdmin
                                    if ($_POST['bloque']==0) 
                                        {
                                            $bloque = NULL;
                                        } 
                                    else if  ($_POST['bloque']==1) 
                                        { 
                                            // Si le produit est bloqué alors cela affiche 1 dans le tableau phpMyAdmin
                                            $bloque = 1;
                                        }
                                    $stmt->bindparam(':pro_bloque', $bloque);
                                    }
                                    // executer la commande sql
                                    $stmt->execute();
                                    if($stmt)
                                        {
                                            //$message = "Le produit a été rajouté dans la base de données";
                                            $new_id = (int)($pdo->lastInsertId()); // En lien avec l'insertion d'image et le renommage du fichier qui sera l'ID
                                            $message = "Insertion réussie";
                                            return true;
                                        }
                                    else
                                        {
                                            $message = "Echec de l'insertion";
                                        }
                                }
                        // si erreur
                        catch (Exception $e) 
                        {
                                // pareil qu'au dessus : $e obtient le message d'erreur et l'echo 
                                // + retour requête pas ok
                                echo $e->getMessage();
                                return false;
                        }
                }
                // fonction publique pour voir les détails d'une station
        public function read($id)
        {
                // preparation de la requête sql + identification table
                $sql = "SELECT * FROM produits, categories WHERE pro_id = :id and pro_cat_id = cat_id";
                // appel de la fonction de préparation de la requete sql
                $stmt = $this->db->prepare($sql);
                // retourner le placeholder :id dans le $id
                $stmt->bindparam(':id', $id);
                // executer la requete sql
                $resultat = $stmt->execute();
                // match avec la dtb
                $resultat = $stmt->fetch();
                // retourner le resultat de la requete
                return $resultat;
        }
        // fonction qui appelle l'affichage de toutes les infos de toutes les stations
        public function readd()
        {
                $sql = "SELECT * FROM produits, categories where pro_cat_id = cat_id";
                // pas bien sur de comment le $this et le -> marche. ou même pourquoi 
                // le db marche sans le $ 
                // et quid du query ici ?-- se renseigner
                $resultat = $this->db->query($sql);
                // retourne le resultat définit juste au dessus
                return $resultat;
        }
        public function delete($id)
        {
                try {
                
                $sql = "DELETE FROM produits where pro_id = :id";
                $stmt = $this->db->prepare($sql);
                $stmt->bindparam(':id', $id);
                $stmt->execute();
                return true; 


                }
                catch (Exception $e) 
                {
                        // pareil qu'au dessus : $e obtient le message d'erreur et l'echo 
                        // + retour requête pas ok
                        echo $e->getMessage();
                        return false;
                }

        }


        
}
?>