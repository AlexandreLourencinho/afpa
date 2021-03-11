<?php
// titre page
$titre = "Se connecter";
// appel bdd et script
require "../../model/bdd/conn_db.php";
require "../../model/CRUD/crud_user.php";
// s'il y a eu une requete post, alors...
$crud_user = new user($pdo);
if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        $pseudo = strtolower(trim($_POST['pseudo']));
        $mdp = $_POST['mdp'];
        $new_mdp = md5($mdp . $pseudo);
        $email = $_POST['email'];

        $resultat = $crud_user->getUser($pseudo, $new_mdp, $email);
        //var_dump($resultat);
        if(!$resultat) 
            {
                echo "<div class='alert alert-danger'> nom d'utilisateur ou mot de passe incorrect ! Essayez a nouveau.</div>";
            }
        else 
            {
                $_SESSION['pseudo'] = $pseudo;
                $_SESSION['user_Id'] = $resultat['user_id'];
                header("location: ../../view/tableau_produits.php");
            }

    }
include "../../view/includes/header.php";
?>

<h1 class="text-center text-primary"><?php echo $titre; ?></h1>

    <form action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="POST">
        <table class="table table-sm">
            <tr>
                <td><label for="pseudo"> Nom d'utilisateur : *</label></td>
                <td><input type="text" name="pseudo" class="form-control" id="pseudo" value="<?php if($_SERVER['REQUEST_METHOD'] == 'POST'){ echo $_POST['pseudo'];} ?>"></td>
            </tr>
            <tr>
            <td><label for="email"> Votre email : *</label></td>
            <td><input type="text" name="email" class="form-control" id="email"></td>
            </tr>
            <tr>
                <td><label for="mdp"> Votre mot de passe : *</label></td>
                <td><input type="password" name="mdp" id="mdp" class="form-control"></td>
            </tr>
        </table>
        <input type="submit" value="login" class="btn btn-info btn-block rounded">
        <a href="#"> Mot de passe oublié?</a>
    </form>
<br><br>

<?php include '../../view/includes/footer.php'; ?>