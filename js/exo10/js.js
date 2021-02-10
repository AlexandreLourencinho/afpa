var nombre = prompt("rentrez un nombre"),
  multi = prompt("entrez un multiplicateur"),
  cube = null,
  produit = null,
  imj = document.createElement("img");
imj.src = "papillon.jpg";
// fonction image
function afficheimg(imj) {
  var block = document.getElementById("body");
  block.appendChild(imj);
}
afficheimg(imj);

// fonction produit cube
function exo10(nombre, multi) {
  cube = nombre * nombre * nombre;
  produit = nombre * multi;
  console.log(produit + " - " + cube);
}
exo10(nombre, multi);
console.log(
  "le produit de " +
    nombre +
    " par " +
    multi +
    " est de " +
    produit +
    " \nle cube de " +
    nombre +
    " est " +
    cube
);
document.write(
  "le cube de " +
    nombre +
    " est égal à " +
    cube +
    "<br>" +
    "le produit de " +
    nombre +
    " x " +
    multi +
    " est de " +
    produit
);
