// LE TABLEAU DES PRENOMS
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// L'AFFICHAGE DU TABLEAU DES PRENOMS
document.write(tab)
// LA BOUCLE POUR TROUVER UN PRENOM
while(window.confirm("Rentrez un prénom du tableau pour le supprimer.")==true)
{
    // LE PROMPT DEMANDE LE PRENOM
    var prenom=prompt("entrez un prénom :")
    // SI LE PRENOM EST DANS LE TABLEAU, RECUPERE SON INDEX, ET LE VIRE POUR LE REMPLACER PAR UN " " 
    if (tab.includes(prenom, [0]))
    {
        alert("vous avez trouvé "+prenom+" !")
        var index=tab.indexOf(prenom);
        tab.splice(index, 1);
        tab.push(" ");
        console.log(tab);
        document.write(tab+"<br>");

    }
    // SI LE PRENOM N'EST PAS DANS LE TABLEAU
    else{
        alert("le prénom n'est pas dans le tableau!")
    }
}