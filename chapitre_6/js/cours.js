var pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";

//L'utilisateur d'un formulaire qui clique sur une
//zone de saisie pour y taper une information déclenche
//l'apparition d'un événement de type focus
pseudoElt.addEventListener("focus", function () {
  document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});

//Le changement de cible de saisie provoque
// l'apparition d'un événement de type blur
//  événement focus disparait.
pseudoElt.addEventListener("blur", function (e) {
  document.getElementById("aidePseudo").textContent = "";
});

// Focus sur la zone de saisie du pseudo
pseudoElt.focus();

// Blur sur la zone de saisie du pseudo
pseudoElt.blur();

//Affichage de la demande de confirmation d'inscription
document.getElementById("confirmation").addEventListener("change", function (e) {
  console.log("Demande de confirmation : " + e.target.checked);
})

// Affichage du type d'abonnement choisi
//Lors d'un changement de valeur d'un groupe de bouton radio,
//la propriétée.target.value de l'événementchangecontient
//la valeur de l'attributvaluede la nouvelle balise<input> sélectionnée.
var aboElts = document.getElementsByName("abonnement");
  for (var i = 0 ; i < aboElts.length ; i++) { //parcourir l'élément abonnement
    aboElts[i].addEventListener("change", function (e) {
      console.log("Formule d'abonnement choisie : " + e.target.value);
    });
}

//Affichage du code de nationnalité choisi
//Comme pour les boutons radio, la propriétée.target.value de
//l'événement change contient la valeur de l'attribut value de
//la balise <option> associé au nouveau choix, et non pas le
//texte affiché dans la liste déroulante.
document.getElementById("nationalite").addEventListener("change", function (e) {
  console.log("code de nationnalité : " + e.target.value);
});


var form = document.querySelector("form");
console.log("Nombre de champs de saisie : " + form.elements.length); // Affiche 10
console.log(form.elements[0].name); // Affiche pseudo
console.log(form.elements.mdp.type); // Affiche "password"

// var form = document.getElementsByTagName('form');

// Affiche de toutes les données saisies ou choisies
// form.addEventListener("submit", function (e) {
//     var pseudo = form.elements.pseudo.value;
//     var mdp = form.elements.mdp.value;
//     var courriel = form.elements.courriel.value;
//     console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
//         mdp + " et le courriel " + courriel);
//     if (form.elements.confirmation.checked) {
//         console.log("Vous avez demandé une confirmation d'inscription par courriel");
//     } else {
//         console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
//     }
//     switch (form.elements.abonnement.value) {
//     case "abonewspromo":
//         console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
//         break;
//     case "abonews":
//         console.log("Vous êtes abonné(e) à la newsletter");
//         break;
//     case "aborien":
//         console.log("Vous n'êtes abonné(e) à rien");
//         break;
//     default:
//         console.log("Erreur : code d'abonnement non reconnu");
//     }
//     switch (form.elements.nationalite.value) {
//     case "FR":
//         console.log("Vous êtes français(e)");
//         break;
//     case "BE":
//         console.log("Vous êtes belge");
//         break;
//     case "SUI":
//         console.log("Vous êtes suisse");
//         break;
//     default:
//         console.log("Erreur : code de nationalité non reconnu");
//     }
//     e.preventDefault(); // Annulation de l'envoi des données
// });


document.getElementById("mdp").addEventListener("input", function(e) {
  var mdp = e.target.value;
  var longueurMdp = "faible";
  var couleurMsg = "red";

  if (mdp.length >= 8) {
    longueurMdp = "suffisante";
    couleurMsg = "green";
  } else if (mdp.length >= 4) {
    longueurMdp = "moyenne";
    couleurMsg = "orange";
  }

  var aideMdpElt = document.getElementById("aideMdp");
  aideMdpElt.textContent = "longueur : " + longueurMdp;
  aideMdpElt.style.color = couleurMsg;
});

// Contrôle du courriel en fin de saisie
document.getElementById("courriel").addEventListener("blur", function(e) {
  var validiteCourriel = "";
  if (e.target.value.indexOf("@") === -1) {
    validiteCourriel = "Adresse invalide";
  }
  document.getElementById('aideCourriel').textContent = validiteCourriel;
});

var regex = /@/; // La chaîne doit contenir le caractère @
console.log(regex.test("")); //Afiche false
console.log(regex.test("@")); // Affiche true
console.log(regex.test("sophie&mail.fr")); //Affiche false
console.log(regex.test("sophie@mail.fr")); //Affiche true


//contrôle du courriel en fin de saisie
document.getElementById("courriel").addEventListener("blur", function (e) {
  // Correspond à une chaîne de la forme xxx@yyy.zzz
  var regexCourriel = /.+@.+\..+/;
  var validiteCourriel = "";
  if (!regexCourriel.test(e.target.value)) {
    validiteCourriel = "Adresse invalide";
  }
  document.getElementById("aideCourriel").textContent = validiteCourriel;
});
