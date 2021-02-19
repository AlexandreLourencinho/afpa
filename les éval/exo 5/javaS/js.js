// Exercice 5 : vérification d'un formulaire
// Effectuez le contrôle de saisie de votre formulaire Jarditou en Javascript.

// Lorsqu'une erreur est détectée, l'utilisateur doit en être informé grâce à l'affichage d'un message sous le champ concerné.

// Le formulaire ne peut être envoyé que lorsque tout est bon.
// ++++++++++++++++++++++++++++++++++++++++
// Laurent Briaux02/16/2021
// Bonjour tout le monde,
// Pour le dernier exercice, la date et l’émail vous laissez bootstrap gérer les contraintes!
// Pour les plus avancés, vous pouvez le faire en js, un petit peu d’exercice ne fait pas de mal :innocent:
// Bon courage

// expressions régulières -----------------------------------------------------------------------------------
var fnom= new RegExp(/^[A-Za-zéàïèøÀÉÇüÜëËÙù-]+$/);
// var fdate = new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}$/);
// var fmail= new RegExp(/^\S+@\S+\.\S+$/);
var fcodep = new RegExp(/^[0-9]{5}$/);
var fville = new RegExp(/^[A-Za-z0-9éàïèøÀÉÇüÜëËÙù -]+$/);
var fadresse = new RegExp (/^[A-Za-z0-9éàïèøÀÉÇüÜëËÙù -]+$/);
var name=form.nom.value
// fonction checkform-----------------------------------------------------------------------------------
function checkForm(form)
{
    // var retour false ou true
    var bool=true
    //   check nom vide-----------------------------------------------------------------------------------
    if(form.nom.value == "") {
        document.getElementById("nomerr").style.color = "#ff0000";
        document.getElementById("nomerr").innerHTML = "Le champ est vide!";
        document.getElementById('nom').style.borderColor = "red";
        form.nom.focus();
        bool=false;
    }  
// chek nom regex-----------------------------------------------------------------------------------
    else if(!fnom.test(form.nom.value)) {
        document.getElementById("nomerr").style.color = "#ff0000";
        document.getElementById("nomerr").innerHTML = "Uniquement des lettres majuscules ou minuscules";
        document.getElementById('nom').style.borderColor = "red";
        form.nom.focus();
        bool=false;
    }
    else
    {
        document.getElementById("nomerr").innerHTML = "";
        document.getElementById('nom').style.borderColor = "limegreen";
    }

    //   check  prenom vide-----------------------------------------------------------------------------------
    if(form.prenom.value == "") {
        document.getElementById("prenerr").style.color = "#ff0000";
        document.getElementById("prenerr").innerHTML = "Le champ est vide!";
        form.prenom.focus();
        document.getElementById('prenom').style.borderColor = "red";
        bool=false;
    }
//     // check  prenom regex -----------------------------------------------------------------------------------
    else if(!fnom.test(form.prenom.value)) {
        document.getElementById("prenerr").style.color = "#ff0000";
        document.getElementById("prenerr").innerHTML = "Uniquement des lettres majuscules ou minuscules";
        document.getElementById('prenom').style.borderColor = "red";
        form.prenom.focus();
        bool=false;
    }        
    else 
    {
        document.getElementById('prenom').style.borderColor = "limegreen";
        document.getElementById("prenerr").innerHTML = "";
    }
    // check code postal vide ---------------------------------------------------------------------------------------
    if(form.codep.value == "") {
        document.getElementById("codeperr").style.color = "#ff0000";
        document.getElementById("codeperr").innerHTML ="le champs est vide!";
        document.getElementById('codep').style.borderColor = "red";
            form.codep.focus();
            bool=false;
    }
    // check code postal regex-----------------------------------------------------------------------------------
    else if(!fcodep.test(form.codep.value)) {
        document.getElementById("codeperr").style.color = "#ff0000";
        document.getElementById("codeperr").innerHTML ="entrez un code postal au format valide. exemple : 84560"
        document.getElementById('codep').style.borderColor = "red";
        form.codep.focus();
        bool=false;
    }
    else
    {
        document.getElementById('codep').style.borderColor = "limegreen";
        document.getElementById("codeperr").innerHTML = ""
    }
// check ville vide-----------------------------------------------------------------------------------
    if(form.ville.value == "") {
        document.getElementById("villerr").style.color = "#ff0000";
        document.getElementById("villerr").innerHTML ="le champs est vide!"
        document.getElementById('ville').style.borderColor = "red";
        form.ville.focus();
        bool=false;
}
// check ville regex-----------------------------------------------------------------------------------
    else if(!fville.test(form.ville.value)) {
        document.getElementById("villerr").style.color = "#ff0000";
        document.getElementById("villerr").innerHTML ="Entrez un nom de ville!"
        document.getElementById('ville').style.borderColor = "red";
        form.ville.focus();
        bool=false;
    }
    else{
        document.getElementById('ville').style.borderColor = "limegreen";
        document.getElementById("villerr").innerHTML = "";
    }
  // check adresse vide-----------------------------------------------------------------------------------
    if(form.adresse.value == "") {
        document.getElementById("adresserr").style.color = "#ff0000";
        document.getElementById("adresserr").innerHTML ="Le champ est vide!";
        document.getElementById('adresse').style.borderColor = "red";
    form.adresse.focus();
    bool=false;
    }
// check adresse regex-----------------------------------------------------------------------------------
    else if(!fadresse.test(form.adresse.value)) {
        document.getElementById("adresserr").style.color = "#ff0000";
        document.getElementById("adresserr").innerHTML = "Entrez une adresse valide"
        document.getElementById('adresse').style.borderColor = "red";
    form.adresse.focus();
    bool=false;
    } 
    else
    {
        document.getElementById('adresse').style.borderColor = "limegreen";
        document.getElementById("adresserr").innerHTML = "";
    } 
    // zone de texte----------------------------------------------------------------------------------------
    if(form.reclamation.value == "") {
        document.getElementById("texterr").style.color = "#ff0000";
        document.getElementById("texterr").innerHTML ="Le champ est vide!";
        document.getElementById('reclamation').style.borderColor = "red";
    form.reclamation.focus();
    bool=false;
    }
    else
    {
        document.getElementById('reclamation').style.borderColor = "limegreen";
        document.getElementById("texterr").innerHTML = ""
    }
    // checkbox -----------------------------------------------------------------------------------
    if(form.Check1.checked==false) {
        document.getElementById("checkerr").style.color = "#ff0000";
        document.getElementById("checkerr").innerHTML = "Vous devez cocher cette case pour nous autoriser a traiter le formulaire.";
        document.getElementById('Check1').style.borderColor = "red";
        bool=false;
      }
    //   validation was successful
    return bool;


}
