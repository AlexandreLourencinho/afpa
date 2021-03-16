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
        // fonction pour rentrer un truc dans la base hotel - public , utilisée par tout le monde
        public function insertStation($sta_nom, $altitude)
        {
                try 
                {
                        // prépare l'execution script sql avec placeholders
                        $sql = "INSERT INTO station(sta_nom, sta_altitude) VALUES (:sta_nom, :altitude)";
                        // prépare l'execution du script sql en remplaçant les placeholders
                        $stmt = $this->db->prepare($sql);
                        $stmt->bindparam(":sta_nom", $sta_nom);
                        $stmt->bindparam(":altitude", $altitude);
                        // executer la commande sql
                        $stmt->execute();
                        return true;




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
                public function editStation($id, $nom, $altitude)
                {
                        try {
                                // requete SQL pour update
                                $sql = "UPDATE `station` SET `sta_nom`=:sta_nom,`sta_altitude`=:sta_altitude 
                                WHERE sta_id = :id"; 
                                // prépare l'execution du script sql en remplaçant les placeholders
                                $stmt = $this->db->prepare($sql);
                                // lie les paramètres placeholders de la requete sql
                                // aux variables correspondantes
                                $stmt->bindparam(':id', $id);
                                $stmt->bindparam(":sta_nom", $nom);
                                $stmt->bindparam(":sta_altitude", $altitude);
                                // executer la commande sql
                                $stmt->execute();
                                // retour : requete ok
                                return true;
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
        public function getDetails($id)
        {
                // preparation de la requête sql + identification table
                $sql = "SELECT * FROM station WHERE sta_id = :id";
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
        public function getStations()
        {
                $sql = "SELECT * FROM `station`";
                // pas bien sur de comment le $this et le -> marche. ou même pourquoi 
                // le db marche sans le $ 
                // et quid du query ici ?-- se renseigner
                $resultat = $this->db->query($sql);
                // retourne le resultat définit juste au dessus
                return $resultat;
        }
        public function supprimer($id)
        {
                try {
                
                $sql = " DELETE FROM station where sta_id = :id";
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