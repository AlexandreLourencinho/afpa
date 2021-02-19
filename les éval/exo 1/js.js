// Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux
// Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).

// Le programme doit demander les âges successifs.

// Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.

// Donnez le programme Javascript correspondant qui affiche les résultats.





// alerte consignant ce qui va être fait
alert("nous allons classer les nombre de personne par tranche d'âge.")
// début de la fonction qui sera utilisée
var i=0;
function nbVieux()
{
    // les variables aux noms éponymes qui seront utilisées
    var nombre=0;
    var vieux=0;
    var jeune=0;
    var moyen=0;
  
    // début de la boucle tant que la personne n'est pas centenaire
        while(nombre<100 && nombre!=null && nombre!=undefined)
        {
            // LE PROMPT QUI DEMANDE L'AGE ET LE CLASSE
            var nombre=prompt("entrez l'âge de la personne. Nous arrêterons de classer les gens une fois qu'un âge centenaire aura été saisi.");
            // dit que c'est pas un age si c'est pas un age
            if (isNaN(nombre)==true || nombre==null || nombre==undefined)
            {
                alert("entrez un âge!");
                return false;
            }
// si age inférieur a 20 ans
            else if (nombre<20 && nombre>=0)
                {
                jeune++;
                }
            else if (nombre>40)
                {
                    vieux++;
                }
            else if (nombre>=100)
                {
                    moyen++;
                }
            else if (nombre<0)
                {
                    alert("un âge n'est jamais négatif!");
                }
        }
        // affichage des résultats - du classement des gens par âges
    document.write("Série numéro "+i+"<br>"+"Il y a "+jeune+" personnes de moins de 20 ans"+"<br>"+ " il y a "+moyen+" personnes de 20 a 40 ans"+"<br>"+"il y a "+vieux+" personnes de plus de 40 ans");
    document.write("<br>"+"<br>"+"<hr>");
}
// relance la fonction si l'utilisateur dit ok.
while(window.confirm("voulez vous lancer, ou relancer, la fonction de classement par âge?")==true)
{
    // incrémente le  I afin d'avoir l'affichage des numéros de séries.
    i++
    nbVieux();
}