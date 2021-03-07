<?php
// appel bdd-- page fonction delete
require_once "co_bdd.php";
// -- si récupère bien l'id souhaité
    if($_GET['id'])
        {
                // assigne l'id a $id
                $id = $_GET['id'];
                // appelle la fonction crud (c'est crud putain faut que je corrige mes com)
                // pour supprimer la station correspondante
                $result = $crud->supprimer($id);
                // si ça marche
                    if($result)
                        {
                            // redirige vers la page des stations
                            header("location: ../viewrecords.php");
                        }
                    // sinon affiche erreur (ça se voit que j'avais la flemme là ?)
                    else
                        {
                            echo 'erreur del';
                        }
        }
    // si récup pas l'id (oui flemme visible)
    else
        {
            include "../includes/mErr.php";
        }





?>