// Exercice 3 : recherche d'un prénom
// Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.

// Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case. Si le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime.

//  var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// ( exemple : ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "]; )


// LE TABLEAU DES PRENOMS
function tableau(){
    // L'AFFICHAGE DU TABLEAU DES PRENOMS EST DANS LE HTML. SINONT : DANS UNE ALERT AU BESOIN
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// alert (tab) 
while (window.confirm("Voulez-vous trouver un prénom de la liste? appuyez sur annuler pour arrêter.")==true){
// LA BOUCLE POUR TROUVER UN PRENOM
    // LE PROMPT DEMANDE LE PRENOM
    var prenom=prompt("entrez un prénom de la liste :")
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
        alert("Ce n'est pas dans la liste !")
    }
    // afiche ce qu'il reste de prénoms de la liste initiale.
    document.getElementById("affi").innerHTML = "Voici les prénoms restants de la liste :" +"<br>"+tab+"<br>";
}
}
// NOTE : l'affichage s'actualise au fur et a mesure des prénoms
// rentrés sans faire "annuler" sur firefox, mais pas sur Opéra  et sur Chrome. Probablement
// une subtilité de ces navigateurs à prendre en compte sur le script dont je n'ai pas connaissance.