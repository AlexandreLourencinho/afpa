var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
while(window.confirm("voulez-vous tenter de trouver un prénom?")==true)
{
    var prenom=prompt("entrez un prénom :")
    if (tab.includes(prenom, [0]))
    {
        alert("vous avez trouvé "+prenom+" !")
        var index=tab.indexOf(prenom);
        tab.splice(index, 1);
        tab.push(" ");
        console.log(tab);
        document.write(tab+"<br>");

    }
    else{
        alert("le prénom n'est pas dans le tableau!")
    }
}