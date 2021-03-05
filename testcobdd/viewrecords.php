<?php 
include("includes/header.php");
require "scripts/co_bdd.php";
$resultats = $crud->getStations();
?>


    <table class="table">
        <tr>
            <th>#</th>
            <th> Nom station</th>
            <th> Altitude </th>
        </tr>
<?php while($r = $resultats->fetch(PDO::FETCH_ASSOC))
{
    ?>
<tr>
<td><?php echo $r['sta_id'] ?></td>
<td><?php echo $r['sta_nom'] ?></td>
<td><?php echo $r['sta_altitude'] ?></td>
</tr>
<?php } ?>
    </table>






<?php 
include("includes/footer.php"); 
?>