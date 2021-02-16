

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
    //   check nom vide-----------------------------------------------------------------------------------
    if(form.nom.value == "") {
        document.getElementById("nomerr").style.color = "#ff0000";
        document.getElementById("nomerr").innerHTML = "Le champ est vide!";
        form.nom.focus();
        return false;
    }  
// chek nom regex-----------------------------------------------------------------------------------
    if(!fnom.test(form.nom.value)) {
        document.getElementById("nomerr").style.color = "#ff0000";
        document.getElementById("nomerr").innerHTML = "Uniquement des lettres majuscules ou minuscules";
        form.nom.focus();
        return false;
    }
    //   check  prenom vide-----------------------------------------------------------------------------------
    if(form.prenom.value == "") {
        document.getElementById("nomerr").innerHTML="";
        document.getElementById("prenerr").style.color = "#ff0000";
        document.getElementById("prenerr").innerHTML = "Le champ est vide!";
        form.prenom.focus();
        return false;
    }
//     // check  prenom regex -----------------------------------------------------------------------------------
    if(!fnom.test(form.prenom.value)) {
        document.getElementById("prenerr").style.color = "#ff0000";
        document.getElementById("prenerr").innerHTML = "Uniquement des lettres majuscules ou minuscules";
        form.prenom.focus();
        return false;
    }        
    // check code postal vide ---------------------------------------------------------------------------------------
    if(form.codep.value == "") {
        document.getElementById("nomerr").innerHTML="";
        document.getElementById("prenerr").innerHTML ="";
        document.getElementById("codeperr").style.color = "#ff0000";
        document.getElementById("codeperr").innerHTML ="le champs est vide!";
            form.codep.focus();
            return false;
    }
    // check code postal regex-----------------------------------------------------------------------------------
    if(!fcodep.test(form.codep.value)) {
        document.getElementById("nomerr").innerHTML="";
        document.getElementById("prenerr").innerHTML ="";
        document.getElementById("codeperr").style.color = "#ff0000";
        document.getElementById("codeperr").innerHTML ="entrez un code postal au format valide. exemple : 84560"
        form.codep.focus();
        return false;
    }
// check ville vide-----------------------------------------------------------------------------------
    if(form.ville.value == "") {
        document.getElementById("codeperr").innerHTML="";
        document.getElementById("nomerr").innerHTML="";
        document.getElementById("prenerr").innerHTML ="";
        document.getElementById("villerr").style.color = "#ff0000";
        document.getElementById("villerr").innerHTML ="le champs est vide!"
        form.ville.focus();
        return false;
}
// check ville regex-----------------------------------------------------------------------------------
    if(!fville.test(form.ville.value)) {
        document.getElementById("codeperr").innerHTML="";
        document.getElementById("nomerr").innerHTML="";
        document.getElementById("prenerr").innerHTML ="";
        document.getElementById("villerr").style.color = "#ff0000";
        document.getElementById("villerr").innerHTML ="Entrez un nom de ville!"
        form.ville.focus();
        return false;
    }
  // check adresse vide-----------------------------------------------------------------------------------
    if(form.adresse.value == "") {
        document.getElementById("villerr").innerHTML="";
        document.getElementById("codeperr").innerHTML="";
        document.getElementById("nomerr").innerHTML="";
        document.getElementById("prenerr").innerHTML ="";
        document.getElementById("adresserr").style.color = "#ff0000";
        document.getElementById("adresserr").innerHTML ="Le champ est vide!";
    form.adresse.focus();
    return false;
    }
// check adresse regex-----------------------------------------------------------------------------------
    if(!fadresse.test(form.adresse.value)) {
        document.getElementById("villerr").innerHTML="";
        document.getElementById("codeperr").innerHTML="";
        document.getElementById("nomerr").innerHTML="";
        document.getElementById("prenerr").innerHTML ="";
        document.getElementById("adresserr").style.color = "#ff0000";
        document.getElementById("adresserr").innerHTML = "Entrez une adresse valide"
    form.adresse.focus();
    return false;
    }  
    // zone de texte----------------------------------------------------------------------------------------
    if(form.reclamation.value == "") {
        document.getElementById("villerr").innerHTML="";
        document.getElementById("codeperr").innerHTML="";
        document.getElementById("nomerr").innerHTML="";
        document.getElementById("prenerr").innerHTML ="";
        document.getElementById("adresserr").innerHTML="";
        document.getElementById("texterr").style.color = "#ff0000";
        document.getElementById("texterr").innerHTML ="Le champ est vide!";
    form.reclamation.focus();
    return false;
    }
    // checkbox -----------------------------------------------------------------------------------
    if(form.Check1.checked==false) {
        document.getElementById("villerr").innerHTML="";
        document.getElementById("codeperr").innerHTML="";
        document.getElementById("nomerr").innerHTML="";
        document.getElementById("prenerr").innerHTML ="";
        document.getElementById("adresserr").innerHTML="";
        document.getElementById("texterr").innerHTML="";
        document.getElementById("checkerr").style.color = "#ff0000";
        document.getElementById("checkerr").innerHTML = "Vous devez cocher cette case pour nous autoriser a traiter le formulaire.";
        return false;
      }
    //   validation was successful
    return true;


}
