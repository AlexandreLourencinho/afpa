

// expressions régulières -----------------------------------------------------------------------------------
var fnom= new RegExp(/^[A-Za-zéàï -]+$/);
// var fdate = new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}$/);
// var fmail= new RegExp(/^\S+@\S+\.\S+$/);
var fcodep = new RegExp(/^[0-9]{5}$/);
var fville = new RegExp(/^[a-zA-z -]+$/);
var fadresse = new RegExp (/^[A-Za-z0-9 -]+$/);
// fonction checkform-----------------------------------------------------------------------------------
function checkForm(form)
{
    var bool=true
    //   check nom vide-----------------------------------------------------------------------------------
    if(form.nom.value == "") {
        document.getElementById("nomerr").style.color = "#ff0000";
        document.getElementById("nomerr").innerHTML = "Le champ est vide!";
        form.nom.focus();
        bool=false;
    }  
// chek nom regex-----------------------------------------------------------------------------------
    else if(!fnom.test(form.nom.value)) {
        document.getElementById("nomerr").style.color = "#ff0000";
        document.getElementById("nomerr").innerHTML = "Uniquement des lettres majuscules ou minuscules";
        form.nom.focus();
        bool=false;
    }
    else
    {
        document.getElementById("nomerr").innerHTML = "";
    }

    //   check  prenom vide-----------------------------------------------------------------------------------
    if(form.prenom.value == "") {
        document.getElementById("prenerr").style.color = "#ff0000";
        document.getElementById("prenerr").innerHTML = "Le champ est vide!";
        form.prenom.focus();
        bool=false;
    }
//     // check  prenom regex -----------------------------------------------------------------------------------
    else if(!fnom.test(form.prenom.value)) {
        document.getElementById("prenerr").style.color = "#ff0000";
        document.getElementById("prenerr").innerHTML = "Uniquement des lettres majuscules ou minuscules";
        form.prenom.focus();
        bool=false;
    }        
    else 
    {
        document.getElementById("prenerr").innerHTML = "";
    }
    // check code postal vide ---------------------------------------------------------------------------------------
    if(form.codep.value == "") {
        document.getElementById("codeperr").style.color = "#ff0000";
        document.getElementById("codeperr").innerHTML ="le champs est vide!";
            form.codep.focus();
            bool=false;
    }
    // check code postal regex-----------------------------------------------------------------------------------
    else if(!fcodep.test(form.codep.value)) {
        document.getElementById("codeperr").style.color = "#ff0000";
        document.getElementById("codeperr").innerHTML ="entrez un code postal au format valide. exemple : 84560"
        form.codep.focus();
        bool=false;
    }
    else
    {
        document.getElementById("codeperr").innerHTML = ""
    }
// check ville vide-----------------------------------------------------------------------------------
    if(form.ville.value == "") {
        document.getElementById("villerr").style.color = "#ff0000";
        document.getElementById("villerr").innerHTML ="le champs est vide!"
        form.ville.focus();
        bool=false;
}
// check ville regex-----------------------------------------------------------------------------------
    else if(!fville.test(form.ville.value)) {
        document.getElementById("villerr").style.color = "#ff0000";
        document.getElementById("villerr").innerHTML ="Entrez un nom de ville!"
        form.ville.focus();
        bool=false;
    }
    else{
        document.getElementById("villerr").innerHTML = "";
    }
  // check adresse vide-----------------------------------------------------------------------------------
    if(form.adresse.value == "") {
        document.getElementById("adresserr").style.color = "#ff0000";
        document.getElementById("adresserr").innerHTML ="Le champ est vide!";
    form.adresse.focus();
    bool=false;
    }
// check adresse regex-----------------------------------------------------------------------------------
    else if(!fadresse.test(form.adresse.value)) {
        document.getElementById("adresserr").style.color = "#ff0000";
        document.getElementById("adresserr").innerHTML = "Entrez une adresse valide"
    form.adresse.focus();
    bool=false;
    } 
    else
    {
        document.getElementById("adresserr").innerHTML = "";
    } 
    // zone de texte----------------------------------------------------------------------------------------
    if(form.reclamation.value == "") {
        document.getElementById("texterr").style.color = "#ff0000";
        document.getElementById("texterr").innerHTML ="Le champ est vide!";
    form.reclamation.focus();
    bool=false;
    }
    else
    {
        document.getElementById("texterr").innerHTML = ""
    }
    // checkbox -----------------------------------------------------------------------------------
    if(form.Check1.checked==false) {
        document.getElementById("checkerr").style.color = "#ff0000";
        document.getElementById("checkerr").innerHTML = "Vous devez cocher cette case pour nous autoriser a traiter le formulaire.";
        bool=false;
      }
    //   validation was successful
    return bool;


}
