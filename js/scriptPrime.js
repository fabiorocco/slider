// Demander à l'internaute un chiffe, tant qu'il a pas saisit un entier on lui redemande, si c'est un entier, on lui indique si c'est un nombre entier
var number, isPrime = true, i = 2;
do{
    number = prompt('Un chiffre');
}while(!Number.isInteger(parseFloat(number)));
for (var cpt = i; cpt <= Math.sqrt(number); cpt++) {
    if (!(number%cpt)) {
        isPrime = false;
        break;
    }
}
if (isPrime && number >= i) {
    alert("Le chiffre "+number+" est premier");
} else {
    alert("Le chiffre "+number+" n\'est pas premier");
}
