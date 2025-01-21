const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

function calcul() {
  const inputPoids = document.getElementById("poidsinput");
  const inputTaille = document.getElementById("tailleinput");

  const poids = parseFloat(inputPoids.value); // Récupérer la valeur de l'input
  const taille = parseFloat(inputTaille.value); // Récupérer la valeur de l'input

  const imcBrute = poids / (taille / 100) ** 2;
  const imc = imcBrute.toFixed(2);
  const resultat = document.getElementById("resultats");

  if (imc >= 0 && imc < 18.5) {
    resultat.innerText = `"Maigreur,  votre imc est de: ${imc}"`; 
  } 
  if (imc >= 18.5 && imc < 25) {
    resultat.innerText = `"Bonne santé,  votre imc est de: ${imc}"`; 
  } 
  if (imc >= 25 && imc < 30) {
    resultat.innerText = `"Surpoids,  votre imc est de: ${imc}"`; 
  } 
  if (imc >= 30 && imc < 35) {
    resultat.innerText = `"Obésité modérée,  votre imc est de: ${imc}"`; 
  } 
  if (imc >= 35 && imc < 40) {
    resultat.innerText = `"Obésité sévère,  votre imc est de: ${imc}"`; 
  }
  if (imc >= 40 ) {
    resultat.innerText = `"Obésité morbide,  votre imc est de: ${imc}"`; 
  }  
  // ... Ajouter d'autres conditions pour les autres catégories d'IMC ...
}

const boutonImc = document.getElementById("bouttondimc");
boutonImc.addEventListener("click", calcul); 
  
function newmessage () {
  const messageAttente = document.getElementById("messageattente");
  messageAttente.innerText = "Résultat";
}

boutonImc.addEventListener("click", newmessage);
