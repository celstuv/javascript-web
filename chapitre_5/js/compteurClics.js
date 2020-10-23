// J'initialise ma fonction clic
function clic() {
  // J'incrémente les clics
  compteurClics++;
  // Je 
  document.getElementById("compteurClics").textContent = compteurClics;
}

var compteurClics = 0;

document.getElementById("clic").addEventListener("click", clic);

//console.log(compteurClics);

document.getElementById("desactiver").addEventListener("click", function() {
  document.getElementById("clic").removeEventListener("click", clic);
});
