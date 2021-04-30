// récupération du bouton envoyer et réini pour le onclick
const form1 = document.getElementById('formulairecontact');
const formReset = document.getElementById('formulaireset');
// Regexp pour le nom et le prénom : caractères interdits : apostrophes, guillemets, chevrons, parenthèses, chiffres, point, slash, arobase
const fnom = new RegExp(/^[^'"<>0-9@./()]+$/g);
/* Regexp pour le mail : pattern sur principe du "tout autorisé sauf apostrophe guillemets chevrons espaces arobase" puis arobase puis "tout autorisé sauf apostrophe guillemets chevrons arobase espaces" puis
point puis "tout autorisé sauf apostrophe guillemets chevrons espaces arobase"*/
const fmail = new RegExp(/^[^'"<>@ ]+@+[^'"<>@ ]+\.[^'"<>@ ]+$/g);
//Regex pour le sujet : tout autorisé sauf chevrons guillemets et apostrophes, avec une taille max de 50 caractères (pas besoin de + ici)
const fsujet = new RegExp(/^[^'"<>]{1,50}$/g);
// regex pour le message, même qu'au dessus sans la limitation de caractères
const fmessage = new RegExp(/^[^<>'"/]+$/g);
// tableau des regex
const tabloregex = [fnom, fnom, fmail, fsujet, fmessage];
//tableau des ID de champ
const tableauID = ['nom', 'prenom', 'mail', 'sujet', 'message'];
// tableau des ID de champs d'erreur
const lesErreurs = ['errNom', 'errPrenom', 'errMail', 'errSujet', 'errMessage'];

//fonction changement de classe
function laclass(idede, laclasse, meussage) {
    document.getElementById(idede).className = laclasse;
    document.getElementById(idede).innerHTML = meussage;
}

// varibales utilisées
let bool, nom, prenom, mail, sujet, message, id2, zeindex, laregex;
// fonction de vérification
form1.onclick = function () {
    tableauID.forEach(function (id) {
        zeindex = tableauID.indexOf(id);
        laregex = tabloregex[zeindex];
        id2 = lesErreurs[zeindex];
        if (document.getElementById(id).value == "" || document.getElementById(id).value == null) {
            document.getElementById(id).className = 'form-control col-4 borderedwrong';
            laclass(id2, 'alert alert-warning col-4', 'Tous les champs sont obligatoires!')
            bool = false
        } else if (!(document.getElementById(id).value).match(laregex)) {
            document.getElementById(id).className = 'form-control col-4 borderedwrong';
            laclass(id2, 'alert alert-danger col-4', 'Pas de guillemets, d\'apostrophes, de parenthèses, de barre oblique (\'/\'), de points, de chiffres, d\'arobases ou de chevrons(\'<\' ou \'>\').')
            bool = false;
        } else {
            document.getElementById(id).className = 'form-control col-4 borderedgood';
            laclass(id2, 'd-none', "");
        }
    });
    return bool;
}
formReset.onclick = function () {
    lesErreurs.forEach(function (id) {
        laclass(id, 'd-none', '');
    });
    tableauID.forEach(function (id) {
        document.getElementById(id).className = 'form-control col-4 bordered2';
    })
};