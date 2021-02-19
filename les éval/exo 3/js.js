// Exercice 3 : recherche d'un prénom
// Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.

// Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case. Si le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime.

//  var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// ( exemple : ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "]; )


// LE TABLEAU DES PRENOMS
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// L'AFFICHAGE DU TABLEAU DES PRENOMS
// LA BOUCLE POUR TROUVER UN PRENOM
while(window.confirm("Rentrez, ou rerentrez, un prénom de la liste pour le supprimer."+"\n En voici la liste: "+tab+"\n Appuyez sur annuler pour arrêter de supprimer des prénoms de la liste.")==true)
{
    // LE PROMPT DEMANDE LE PRENOM
    var prenom=prompt("entrez un prénom :")
    // SI LE PRENOM EST DANS LE TABLEAU, RECUPERE SON INDEX, ET LE VIRE POUR LE REMPLACER PAR UN " " 
    if (tab.includes(prenom, [0]))
    {
        alert("vous avez rentré "+prenom+" !")
        var index=tab.indexOf(prenom);
        tab.splice(index, 1);
        tab.push(" ");
        console.log(tab);

    }
    // SI LE PRENOM N'EST PAS DANS LE TABLEAU
    else{
        alert("le prénom n'est pas dans le tableau!")
    }
}
// afiche ce qu'il reste de prénoms de la liste initiale.
document.write("Voici les prénoms restants de la liste : "+tab+"<br>");