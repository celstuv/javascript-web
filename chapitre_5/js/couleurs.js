/*
Exercice : modifier les couleurs
*/
//définir la div
var divsElts = document.getElementsByTagName("div");

//Trouver la touche pressée
// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function (event) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(event.charCode));
    console.log(String.fromCharCode(event.charCode));
    console.log(event.charCode);
  });

function choixCouleur(e) {
  if (event.keyCode == 82) {//rouge
      for (var i = 0; i < divsElts.length; i++) {
          divsElts[i].style.backgroundColor = "red";
        }
  } else if (event.keyCode == 74) { //jaune
    for (var i = 0; i < divsElts.length; i++) {
        divsElts[i].style.backgroundColor = "yellow";
      }
  } else if (event.keyCode == 86) { //vert
    for (var i = 0; i < divsElts.length; i++) {
        divsElts[i].style.backgroundColor = "green";
      }
  } else  if (event.keyCode == 66){ // blanc
    for (var i = 0; i < divsElts.length; i++) {
        divsElts[i].style.backgroundColor = "white";
      }
  } else {
     alert('Veuillez choisir parmi les lettres R, J, V ou B, svp');
  }
  console.log("touche :" + e.keyCode);

}
document.addEventListener("keydown", choixCouleur);

//ou
/*
Exercice : changer la couleur des divs
*/

document.addEventListener("keypress", function (e) {
    var touche = String.fromCharCode(e.charCode); // Récupération de la touche pressée
    touche = touche.toUpperCase(); // Pour gérer indifféremment minuscules et majuscules
    var couleur = "";
    switch (touche) {
    case "B":
        couleur = "white";
        break;
    case "J":
        couleur = "yellow";
        break;
    case "V":
        couleur = "green";
        break;
    case "R":
        couleur = "red";
        break;
    default:
        console.log("Touche " + touche + " non gérée");
    }
    // Changement de couleur de fond pour toutes les divs
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = couleur;
    }
});
