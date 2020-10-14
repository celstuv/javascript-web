// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
for (var i = 0; i < journaux.length; i++) {
    var lienElt = document.createElement("a"); //  creation de l'élement a
    lienElt.textContent = journaux[i]; // écrire la liste des journaux
    lienElt.href = journaux[i]; //rattacher la liste des journaux au href
    // Ajoute un lien
    document.getElementById("contenu").appendChild(lienElt);
    // Ajoute une balise <br>
    document.getElementById("contenu").appendChild(document.createElement("br"));
}
