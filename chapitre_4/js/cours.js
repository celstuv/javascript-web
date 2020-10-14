var pElt = document.querySelector("p");
pElt.style.color =  "red";
pElt.style.margin = "50px";
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";


//Style permet de mettre du CSS et récupérer du CSS qd il est ajouté via JavaScript ou dans l'HTML
var paragraphesElt = document.getElementsByTagName("p");
console.log(paragraphesElt[0].style.color); //red
console.log(paragraphesElt[1].style.color); //green
console.log(paragraphesElt[2].style.color); // N'affiche rien

//donne moi le css de l'élément ayant pour id para et dont le CSS est dans le fichier style.css
var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB
