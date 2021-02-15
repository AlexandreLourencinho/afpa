var fnom= new RegExp(/^[A-Za-z]+$/);
var fdate = new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}$/);
var fmail= new RegExp(/^\S+@\S+\.\S+$/);
var fcodep = new RegExp(/^[0-9]{5}$/);
var fville = new RegExp(/^[a-zA-z -]+$/);
var fadresse = new RegExp (/^[A-Za-z0-9 -]+$/);
// var nomt=document.getElementById("nom").value
// var datet = document.getElementById("date").value
// var mailt = document.getElementById("mail").value
// var codept= document.getElementById("codep").value
// var villet = document.getElementById("ville").value
// var prenomt = document.getElementById(" prenom").value
// var adresset = document.getElementById("adresse").value
// var nomt=fnom.test("nom")
// console.log(nomt)
// function checkRadio() {
//     var r = document.getElementsByName("sexe")
//     var c = -1
    
//     for(var i=0; i < r.length; i++){
//        if(r[i].checked) {
//           c = i; 
//        }
//     }
//     if (c == -1) alert("please select radio");
//     }
function checkForm(form)
{
    //   check nom vide
    if(form.nom.value == "") {
        document.getElementById("nomerr").style.color = "#ff0000";
        document.getElementById("nomerr").innerHTML = "Le champ est vide!";
        form.nom.focus();
        return false;
    }  
// chek nom regex
    if(!fnom.test(form.nom.value)) {
        document.getElementById("nomerr").style.color = "#ff0000";
        document.getElementById("nomerr").innerHTML = "Uniquement des lettres majuscules ou minuscules";
        form.nom.focus();
        return false;
    }
      check  prenom vide
    if(form.prenom.value == "") {
        document.getElementById("prenomerr").style.color = "#ff0000";
        document.getElementById("prenomerr").innerHTML = "Le champ est vide!";
        form.prenom.focus();
        return false;
    }
//     // check  prenom regex 
    if(!fnom.test(form.prenom.value)) {
        document.getElementById("prenomerr").style.color = "#ff0000";
        document.getElementById("prenomerr").innerHTML = "Uniquement des lettres majuscules ou minuscules";
        form.prenom.focus();
        return false;
    }        
        //   check mail vide
    if(form.mail.value == "") {
        document.getElementById("emailerr").style.color = "#ff0000";
        document.getElementById("emailerrl").innerHTML = "Le champ est vide!";
            form.mail.focus();
            return false;
    }  
        //   check mail regex
    if(!fmail.test(form.mail.value)) {
            mail.setCustomValidity("le format d'email n'est pas valide. utilisez un email type damien.rieu@nomdomaine.fr");
            form.mail.focus();
            return false;
    }
        //   check code postal vide
    if(form.codep.value == "") {
            codep.setCustomValidity("Le champ est vide!");
            form.codep.focus();
            return false;
    }
    // check code postal regex
    if(!fcodep.test(form.codep.value)) {
        codep.setCustomValidity("le code postal n'est composé que de 5 chiffres.");
        form.mail.focus();
        return false;
    }
// check ville vide
    if(form.ville.value == "") {
        ville.setCustomValidity("Le champ est vide!");
        form.ville.focus();
        return false;
}
// check ville regex
    if(!fville.test(form.ville.value)) {
        ville.setCustomValidity("Entrez un nom de ville!");
        form.ville.focus();
        return false;
    }
  // check adresse vide
    if(form.adresse.value == "") {
    adresse.setCustomValidity("Le champ est vide!");
    form.adresse.focus();
    return false;
    }
// check adresse regex
    if(!fadresse.test(form.adresse.value)) {
    adresse.setCustomValidity("Entrez une adresse valide!");
    form.adresse.focus();
    return false;
    }  
    // check radio value
    if(radioValue = checkRadio(form.sexe)) {
        ("Error: No value was selected!");
        return false;
      }


















    if(form.Check1.checked==false) {
        Check1.setCustomValidity("Vous devez cocher cette case pour nous autoriser à traiter ce formulaire.");
        return false;
      }
      validation was successful
    return true;


}

// function checkName(nom){
//         //   check nom vide
//     if(form.nom.value == "") {
//         nom.setCustomValidity("Le champ est vide!");
//         form.nom.focus();
//         return false;
//     }  
// // chek nom regex
//     if(!fnom.test(form.nom.value)) {
//         nom.setCustomValidity("Uniquement des lettres majuscules ou minuscules");
//         form.nom.focus();
//         return false;
//     }

// }
