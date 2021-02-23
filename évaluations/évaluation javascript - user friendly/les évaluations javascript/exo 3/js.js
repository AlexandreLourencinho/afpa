// Exercice 3 : recherche d'un prénom
// Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.

// Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case. Si le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime.

//  var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// ( exemple : ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "]; )

var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// LE TABLEAU DES PRENOMS
function tableau(){
    // SI LE PRENOM EST DANS LE TABLEAU, RECUPERE SON INDEX, ET LE VIRE POUR LE REMPLACER PAR UN " " 
    var prenom=document.getElementById("prenomsup").value
    if (tab.includes(prenom, [0]))
    {
        document.getElementById("prenomr").innerHTML="vous avez rentré "+prenom+" !";
        var index=tab.indexOf(prenom);
        tab.splice(index, 1);
        tab.push(" ");
        console.log(tab);
        // affichage prenoms restants + le prenom rentré + cadre en vert + vide messsage d'erreur
        document.getElementById("affi").innerHTML = "Voici les prénoms restants de la liste :" +"<br>"+tab+"<br>";
        document.getElementById('prenomsup').style.borderColor = "limegreen";
        document.getElementById("erreur").innerHTML = "";
    }
    // SI LE PRENOM N'EST PAS DANS LE TABLEAU
    else{
        // vide message succès + cadre en rouge + informe que prenom pas dans la liste
        document.getElementById("erreur").innerHTML = "Le prénom n'est pas dans la liste!";
        document.getElementById('prenomsup').style.borderColor = "red";
        document.getElementById("prenomr").innerHTML="";
    }
}
function reload()
{
    document.location.reload()
}




// }
// NOTE : l'affichage s'actualise au fur et a mesure des prénoms
// rentrés sans faire "annuler" sur firefox, mais pas sur Opéra  et sur Chrome. Probablement
// une subtilité de ces navigateurs à prendre en compte sur le script dont je n'ai pas connaissance.