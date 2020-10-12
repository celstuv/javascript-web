var h = document.head;
console.log(h);

if (document.body.nodeType === document.ELEMENT_NODE) { //un nœud "élément" (balise HTML)
  console.log("Body est un noeud élément");
}else {
  console.log('Body et un noeud textuel'); //document.TEXT_NODE pour un nœud textuel.
}

//Accès au 1er enfant du noeud body
console.log(document.body.childNodes[1]);

// Affiche les noeuds enfants
for (var i = 0; i < document.body.childNodes.length; i++) {
  console.log(document.body.childNodes[i]);
}

var h1 = document.body.childNodes[1];
console.log(h1.parentNode); // Affiche le noeud Body
console.log(document.parentNode); //Affiche null : document n'a aucun noeud parent
