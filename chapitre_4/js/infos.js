var elt =  document.getElementById('infos'); //identifier infos
elt.innerHTML = "Informations sur l'élément"; // donner un string à infos

var lienUlElt =  document.createElement("ul"); // créer ul
elt.appendChild(lienUlElt); //attribuer ul à infos

var lienLiElt = document.createElement('li'); // créer li
lienLiElt.innerHTML = "Hauteur : 54px"; // donner un string à li

var lienLiElt2 = document.createElement('li');
lienLiElt2.innerHTML = "Longueur : 98.6406px";


lienUlElt.appendChild(lienLiElt); // attribuer li à ul
lienUlElt.appendChild(lienLiElt2); // attribuer li à ul



var styleElement = getComputedStyle(document.getElementById("contenu"));
console.log(styleElement);
console.log(styleElement.width);
console.log(styleElement.height);
var listeElt = document.createElement("ul");
var longueurElt = document.createElement("li");
longueurElt.textContent = "Longueur : " + styleElement.width;
var hauteurElt = document.createElement("li");
hauteurElt.textContent = "Hauteur : " + styleElement.height;
listeElt.appendChild(hauteurElt);
listeElt.appendChild(longueurElt);
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(listeElt);
