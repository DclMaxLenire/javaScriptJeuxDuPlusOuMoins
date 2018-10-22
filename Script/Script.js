
var nombreAlea;
var min = 0;
var max;
var nombreSaisie;
var victoire = false;
var coups = 0;
var coupsSaisie =0;
        // L'utilisateur choisis le nombre maximum //
        max = parseInt(prompt("Choisissez le nombre maximum"));
        // L'utilisateur choisis le nombre de coups //
        coupsSaisie = parseInt(prompt("Choissisez le nombre de coups maximum"));
        console.log("Vous avez choisis de jouer avec " + coupsSaisie + " coups");
        /* Tirer un chiffre entre 1 et 100 */

        var nombreAlea = Math.floor(Math.random() * (max - min) );
       while (!victoire) 

        // L'utilisateur choisis un nombre //
        {nombreSaisie = parseInt(prompt("Trouvez le bon nombre"));
        // Nombre de coup //
        coups++;
        if (coups == 5) {
                console.log("Déja 5 coups");
        } if (coups == 10) {
                console.log("Et de 10 coups, courage");
        } if (coups == 15) {
                console.log("Déja 15 coups vaut mieux abandonner");
        // Les chiffre sont comparé et si le chiffre choisis est plus grand affiché c'est moins//
        } if (nombreSaisie > nombreAlea) {
        console.log("C'est moins");
        // Les chiffre sont comparé et si le chiffre choisis est plus petit affiché c'est moins//
        } else if (nombreSaisie < nombreAlea) {                                     
        console.log("C'est plus");
        // Si aucune différence victoire et true donc brise la boucle //
        } else if (nombreSaisie = nombreAlea) {  
                victoire = true;      
        console.log("Bravo !!! Vous avez gagné en " + coups + " coups !");
        // Sortie de boucle //
        break;
        // Sortie de boucle si le nombre de coups choisis est atteint //
        } if (coups == coupsSaisie){
                victoire = true;
        console.log("Nombre de coups atteint, vous avez perdus");
        break;
        }
        }
        




