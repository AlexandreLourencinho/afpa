// // nomnbre pairs et impairs
var chiffre = window.prompt("azy donne un chiffre frère");
if (chiffre % 2 == 0) {
  alert("le nombre est pair");
} else {
  alert("le nombre est impair");
}
// // majeur ou mineur
var annee = window.prompt("bon c'bon donne ton année de naissance maintenant");
var age;
var date = new Date().getFullYear();
console.log(date);
console.log(annee);
age = date - annee;
console.log(age);
if (age >= 18) {
  alert("vous êtes majeur et avez " + age + " ans");
} else {
  alert("t'es un gamin wesh et t'as à peine " + age + " ans");
}
// // calculette
alert("bon calculette maintenant");
var nb1 = window.prompt("azy donne ton premier chiffre");
var ope = window.prompt("l'opérateur maintenant banane");
var nb2 = window.prompt("azy lache ton deuxieme chiffre cousin");
var result;
if (ope == "/" && nb2 == 0) {
  alert("erreur : on ne divise pas par 0, enculé");
} else if (ope == "+") {
  result = parseInt(nb1) + parseInt(nb2);
  alert(result);
} else if (ope == "-") {
  result = parseInt(nb1) - parseInt(nb2);
  alert(result);
} else if (ope == "/") {
  result = parseInt(nb1) / parseInt(nb2);
  alert(result);
} else if (ope == "*") {
  result = parseInt(nb1) * parseInt(nb2);
  alert(result);
} else {
  alert("opérateur inconnu");
}
// exemple  switch conditions cours (a appliquer)

// var modele = prompt("marque"); 

// switch (modele)
// {   
//   case "208" :
//      alert("Modèle 208 : marque Peugeot");  
//      break; 

//   case "Clio" :
//      console.log("Modèle Clio : marque Renault"); 
//      break;  

//   case "C3" :
//      console.log("Modèle C3 : marque Citroën");
//      break;
// } 
// var tableau = ["Paul", "Pierre", "Anne", "Sophie"];

// for (var i in tableau) 
// {
//     console.log(tableau[i]);
// }