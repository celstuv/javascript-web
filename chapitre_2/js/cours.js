console.log(document.body.childNodes[5].childNodes[1]);

// Compte les éléments à partir d'un sélecteur
// ( selecteur = tous les types de sélecteur :
// - getElementsByTagName
// - getElementsByClassName
// - getElementById )
function compterElements(selecteur) {
    return document.querySelectorAll(selecteur).length;
}

console.log(compterElements("h2"));
console.log(compterElements("p"));
console.log(compterElements("ul"));
console.log(compterElements("li"));


var titresElt = document.getElementsByTagName("h2");
console.log(titresElt[0]); //Merveilles du monde antique
console.log(titresElt[1]); //Nouvelles merveilles du monde
console.log(titresElt[2]); //Références
console.log(titresElt.length);

var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0 ; i < merveillesElts.length ; i++) {
  console.log(merveillesElts[i]);
}
//Element portant l'id "nouvelle"
console.log(document.getElementById('nouvelles'));

//Tous les élements fils de l'id antiques ayant la classe existe
console.log(document.getElementById('antiques').getElementsByClassName('existe').length);// Affiche 1
console.log(document.getElementById('nouvelles').getElementsByClassName('existe').length);// Affiche 7
console.log(document.getElementById('antiques').getElementsByClassName('existe'));

// Tous les paragraphes
console.log(document.querySelectorAll("p").length); //Affiche 3
// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); //Affiche 2
// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); //Affiche 8
// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length);
// Le premier paragraphe
console.log(document.querySelector("p"));


//Récupérer le contenu HTML du document avec balises
console.log(document.getElementById('contenu').innerHTML);
//Récupérer le contenu HTML du document sans balises
console.log(document.getElementById('contenu').textContent);
// Récupérer la valeur de l'attribut.
// on récupère le lien dans href https://fr.wikipedia.org/wiki/Sept_merveilles_du_monde
console.log(document.querySelector("a").getAttribute("href"));
// Certains attributs sont directement accessibles sous la forme de propriétés.
//C'est notamment le cas pour les attributsid, hrefetvalue.
// L'identifiant de la 1ere ligne
console.log(document.querySelector("ul").id);
console.log(document.querySelector("a").href);
// On peut vérifier la présence d'un attribut sur un élément grâce à la méthodehasAttribute
if (document.querySelector("a").hasAttribute("target")) {
  console.log("Le premier lien possède l'attribut target");
}else {
  console.log("Le premier lien ne possède pas l'atttribut target");
}

//Dans une page web, une balise peut posséder plusieurs classes. La propriéte classList permet
//de récupérer la liste des classes d'un élément du DOM. Elle s'utilise comme un tableau
//Liste des classes de l'élément identifié par antiques
var classes =  document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1
console.log(classes[0]); // merveilles

// Vous avez aussi la possibilité de tester la présence d'une classe dans un élément en
// appelant la méthodecontainssur la liste des classes.
if (document.getElementById("antiques").classList.contains("merveilles")) {
  console.log("L'élément identifié par antiques possède la classe merveille");
}else {
  console.log("L'élément identifié par antique ne possède pas la classe merveille");
}
