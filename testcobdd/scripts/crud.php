<?php

// // Récupération des informations passées en POST, nécessaires à la modification

// $nom_station=$_POST['nom'];
// $altitude_station=$_POST['altitude'];

// // Connexion à la base de données

// require "co_bdd.php";

// try {
// // Construction de la requête INSERT sans injection SQL

// $requete = $db->prepare("INSERT INTO station (sta_nom,sta_altitude) VALUES (:sta_nom,:sta_altitude)");

// $requete->bindValue(':sta_nom', $nom_station, PDO::PARAM_STR);
// $requete->bindValue(':sta_altitude', $altitude_station, PDO::PARAM_INT);

// $requete->execute();

// // Libération de la connexion au serveur de BDD
// $requete->closeCursor();
// }

// // Gestion des erreurs
// catch (Exception $e) {

//         echo "La connexion à la base de données a échoué ! <br>";
//         echo "Merci de bien vérifier vos paramètres de connexion ...<br>";
//         echo "Erreur : " . $e->getMessage() . "<br>";
//         echo "N° : " . $e->getCode();
//         die("Fin du script");
// }

// // Redirection vers la page index.php
// header("Location: ../index.php");
// exit;


class crud
{
        // objet base de donnée privée
        private $db;
        // constructor pour ini une variable privée pour la co a la bdd
        function __construct($conn)
        {
                $this->db = $conn;
        }
        // fonction pour rentrer un truc dans la base hotel
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
                catch (Exception $e) 
                {
                        echo $e->getMessage();
                        return false;
                }
        }
        public function getStations()
        {
                $sql = "SELECT * FROM `station`";
                $resultat = $this->db->query($sql);
                return $resultat;
        }
}
?>