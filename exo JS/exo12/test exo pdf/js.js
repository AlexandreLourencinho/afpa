// var a = prompt("ici")
// tablo=a.split(" ")
// console.log(tablo)
// var b=tablo.join(" ")
// console.log(b)
// var i
// var c = tablo.length
// for (i=0; i<c; i++)
//     {
//         alert(tablo[i])
//         console.log(tablo[i])
//     }
/////////////////////////////CA CEST MOI
var prenom;
var tablo = [];
while ((prenom = prompt("entrez un prénom"))) 
{
  tablo.push(prenom);
}
  if (tablo.length > 0)
   {
    alert(tablo.join(" "));
  } 
  else {
    alert("il n'y a aucun prénom en mémoire!");
  }
console.log(tablo)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var nicks = [], // Création du tableau vide
//   nick;
// while ((nick = prompt("Entrez un prénom :"))) {
//   nicks.push(nick);
// }
// if (nicks.length > 0) {
//   // On regarde le nombre d'items
//   alert(nicks.join(" ")); // Affiche les prénoms à la suite
// } else {
//   alert("Il n'y a aucun prénom en mémoire !");
// }
