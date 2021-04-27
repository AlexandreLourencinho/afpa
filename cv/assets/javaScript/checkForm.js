/* Déclaration des Regexp qui permettront la validation - ou non- du formulaire
 Récupération avec la const form qui permet l'utilisation du onclick, plus bas*/
const form = document.getElementById('formulairecontact');
// Regexp pour le nom et le prénom : caractères interdits : apostrophes, guillemets, chevrons, parenthèses, chiffres, point, slash, arobase
const fnom = new RegExp(/^[^'"<>0-9@./()]+$/g);
/* Regexp pour le mail : pattern sur principe du "tout autorisé sauf apostrophe guillemets chevrons espaces arobase" puis arobase puis "tout autorisé sauf apostrophe guillemets chevrons arobase espaces" puis
point puis "tout autorisé sauf apostrophe guillemets chevrons espaces arobase"*/
const fmail = new RegExp(/^[^'"<>@ ]+@+[^'"<>@ ]+\.[^'"<>@ ]+$/g);
//Regex pour le sujet : tout autorisé sauf chevrons guillemets et apostrophes, avec une taille max de 50 caractères (pas besoin de + ici)
const fsujet = new RegExp(/^[^'"<>]{1,50}$/g);
// regex pour le message, même qu'au dessus sans la limitation de caractères
const fmessage = new RegExp(/^[^<>'"]+$/g);
/* fonction qui check le formulaire, appelée via le clique sur le bouton envoyer*/
form.onclick = function() {
    /* la variable qui sera utilisée comme variable de retour : set sur "true", deviendra false a la moindre erreur dans le formulaire et empêchera l'envoi d'icelui*/
    let bool = true;
    /*les variables récupérant les valeurs des champs du formulaire*/
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let mail = document.getElementById('mail').value;
    let sujet = document.getElementById('sujet').value;
    let message = document.getElementById('message').value;
    /* vérifie que le champ nom n'est pas null / vide*/
    if (nom == "" || nom == null) {
        document.getElementById('errNom').innerHTML = "<div class='alert alert-warning col-12'>Tous les champs sont obligatoires! Vous devez entrer votre nom.</div>";
        document.getElementById('nom').style.borderColor = "red";
        bool = false;
    }
    /* compare la valeur du champ nom avec la regex préparée et déclarée plus haut (fnom ici)*/
    else if (!nom.match(fnom)) {
        document.getElementById('errNom').innerHTML = "<div class='alert alert-danger col-12'>Pas de guillemets, d'apostrophes, de parenthèses, de barre oblique ('/'), de points, de chiffres, d'arobases ou de chevrons('<' ou '>').</div>";
        document.getElementById('nom').style.borderColor = "red";
        bool = false;
    }
    // vide le message d'erreur, passe le cadre au vert
    else {
        document.getElementById('errNom').innerHTML = "";
        document.getElementById('nom').style.borderColor = "limegreen";
    }
    /* vérifie que le champ prénom n'est pas null / vide*/
    if (prenom == "" || prenom == null) {
        document.getElementById('errPrenom').innerHTML = "<div class='alert alert-warning col-12'>Tous les champs sont obligatoires! vous devez entrer votre prénom.</div>";
        document.getElementById('prenom').style.borderColor = "red";
        bool = false;
    }
    /* compare la valeur du champ prénom avec la regex préparée et déclarée plus haut (ici, comme pour le nom, car mêmes contraintes, fnom)*/
    else if (!prenom.match(fnom)) {
        document.getElementById('errPrenom').innerHTML = "<div class='alert alert-danger col-12'>Pas de guillemets, d'apostrophes, de parenthèses, de barre oblique ('/'), de points, de chiffres, d'arobases ou de chevrons('<' ou '>').</div>";
        document.getElementById('prenom').style.borderColor = "red";
        bool = false;
    }
    // vide le message d'erreur, passe le cadre au vert
    else {
        document.getElementById('errPrenom').innerHTML = "";
        document.getElementById('prenom').style.borderColor = "limegreen";
    }
    /* vérifie que le champ mail n'est pas null / vide*/
    if (mail == "" || mail == null) {
        document.getElementById('errMail').innerHTML = "<div class='alert alert-warning col-12'>Tous les champs sont obligatoires! Vous devez entrer votre mail.</div>";
        document.getElementById('mail').style.borderColor = "red";
        bool = false;
    }
    /* compare la valeur du champ mail avec la regex préparée et déclarée plus haut (ici fmail)*/
    else if (!mail.match(fmail)) {
        document.getElementById('errMail').innerHTML = "<div class='alert alert-danger col-12'>Pas de guillemets, d'apostrophes, d'espaces ou de chevrons('<' ou '>').</div>";
        document.getElementById('mail').style.borderColor = "red";
        bool = false;
    }
    // vide le message d'erreur, passe le cadre au vert
    else {
        document.getElementById('errMail').innerHTML = "";
        document.getElementById('mail').style.borderColor = "limegreen";
    }
    /* vérifie que le champ sujet n'est pas null / vide*/
    if (sujet == "" || sujet == null) {
        document.getElementById('errSujet').innerHTML = "<div class='alert alert-warning col-12'> Tous les champs sont obligatoires! Vous devez préciser le sujet de votre demande de contact.</div>";
        document.getElementById('sujet').style.borderColor = "red";
        bool = false;
    }
    /* compare la valeur du champ sujet avec la regex préparée et déclarée plus haut(ici fsujet)*/
    else if (!sujet.match(fsujet)) {
        document.getElementById('errSujet').innerHTML = "<div class='alert alert-danger col-12'>Pas de guillemets, d'apostrophes ou de chevrons('<' ou '>').</div>";
        document.getElementById('sujet').style.borderColor = "red";
        bool = false;
    }
    // vide le message d'erreur, passe le cadre au vert
    else {
        document.getElementById('errSujet').innerHTML = "";
        document.getElementById('sujet').style.borderColor = "limegreen";
    }
    /* vérifie que le champ message n'est pas null / vide*/
    if (message == "" || message == null) {
        document.getElementById('errMessage').innerHTML = "<div class='alert alert-warning col-12'> Tous les champs sont obligatoires! Faites moi part de votre message ici.</div>";
        document.getElementById('message').style.borderColor = "red";
        bool = false;
    }
    /* compare la valeur du champ message avec la regex préparée et déclarée plus haut (ici fmessage)*/
    else if (!message.match(fmessage)) {
        document.getElementById('errMessage').innerHTML = "<div class='alert alert-danger'>Pas d'apostrophe, de guillemets ou de chevrons('<' ou '>').</div>";
        document.getElementById('message').style.borderColor = "red";
        bool = false;
    }
    // vide le message d'erreur, passe le cadre au vert
    else {
        document.getElementById('errMessage').innerHTML = "";
        document.getElementById('message').style.borderColor = "limegreen";
    }
    /* retour de la variable bool qui permet ou non l'envoi du formulaire*/
    return bool;
};