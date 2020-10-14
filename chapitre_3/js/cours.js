//Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// Suppression du contenu HTML de la liste
//document.getElementById("langages").innerHTML = "";

//Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation ";

//Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");
document.querySelector("h1").id = "titre";


//Les classes
var titreElt = document.querySelector("h1");
titreElt.classList.remove("debut");
titreElt.classList.add("titre");
console.log(titreElt);

//Ajout d'élément
var pythonElt = document.createElement("li");
pythonElt.id = "python";
pythonElt.textContent = "Python";
document.getElementById("langages").appendChild(pythonElt);

var html5Elt = document.createElement("li"); // création d'un élément
html5Elt.id = "HTML 5"; // creation de l'id pour le "li"
html5Elt.textContent = "HTML 5"; // saisie du string on obtient <li>HTML 5</li>
document.getElementById("langages").appendChild(html5Elt); // rattacher l'id li à l'id langages

var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément

// Création d'un élément li
var perlElt = document.createElement("li");
// Définition de son identifiant
perlElt.id = "perl";
// Définition de son contenu textuel
perlElt.textContent = "Perl";
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById('langages').insertBefore(perlElt, document.getElementById("php"));

var trucElt = document.createElement("li");
trucElt.id = "truc";
trucElt.textContent = "Truc";
document.getElementById("langages").insertBefore(trucElt, document.getElementById('perl'));

// Ajout d'un élément au tout début de la liste
document.getElementById("langages").insertAdjacentHTML("afterBegin",'<li id="javascript">Javascript</li>');

//Remplacer un noeud existant
var bashElt = document.createElement("li");
bashElt.id = "bash";
bashElt.textContent = "Bash";
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

//Supprimer un noeud existant
document.getElementById("langages").removeChild(document.getElementById("bash"));

var paragrapheElt = document.createElement("p");
var lienElt = document.createElement("a");
lienElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lienElt.textContent = "liste";

//paragrapheElt.textContent = "En voici une " + lienElt.textContent + " plus complète";
paragrapheElt.appendChild(document.createTextNode("En voici une "));
paragrapheElt.appendChild(lienElt);
paragrapheElt.appendChild(document.createTextNode(" plus complète."));

document.getElementById("contenu").appendChild(paragrapheElt);
//document.querySelector("p").appendChild("a");
