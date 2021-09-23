// Bonjour
alert("Bonjour et bienvenue sur le jeu le pendu. ")
alert("Bonne chance")


// variables
let wordsList = [
    "Lion",
    "Voiture",
    "Ecole",
    "enfant",
    "velo",
    "Pomme"
];
let wordIA = wordsList[Math.floor(Math.random()*wordsList.length)];


let wodsListUnderscores = [
    "_ _ _ _",
    "_ _ _ _ _ _ _",
    "_ _ _ _ _",
    "_ _ _ _ _ _",
    "_ _ _ _",
    "_ _ _ _ _"
];

let wordUnderscores = wodsListUnderscores[Math.floor(Math.random()*wodsListUnderscores.length)];

alert(`vous avez le droit à 7 essais`)
alert(wordUnderscores);







// function list(){
//     let lion = wordsList[0] === wodsListUnderscores[0];
//     let voiture = wordsList[1] === wodsListUnderscores[1];
//     let ecole = wordsList[2] === wodsListUnderscores[2];
//     let enfant = wordsList[3] === wodsListUnderscores[3];
//     let velo = wordsList[4] === wodsListUnderscores[4];
//     let pomme = wordsList[5] === wodsListUnderscores[5]

// };

// alert(list);

//Affichage prompt



