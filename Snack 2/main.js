// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 
// e stampiamo tutto in console.


// ARRAY DI SQUADRE + PROPRIETA
let squadra = [
    
    {
        nome: 'Modena Football',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Imolese Calcio',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Ravenna Football',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Polisportiva Virtus',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

console.log(squadra);

// NUMERI RANDOM ASSEGNATI A PUNTI FATTI E FALLI SUBITI
// genero numeri random al posto degli 0 nelle proprietà, punti fatti e falli subiti,delle diverse squadre
let nuovoArraySquadra = [0];

for (let i = 0; i < squadra.length; i++){

    // genero i numeri random
    squadra[i].puntiFatti = Math.floor(Math.random() * 3) +1;
    squadra[i].falliSubiti = Math.floor(Math.random() * 3) +1;

    // destrutturing
    // creo un nuovo array dove le proprietà sono solo nome e falli subiti
    let {nome, falliSubiti} = squadra[i];
    nuovoArraySquadra.push({nome, falliSubiti});
    // STAMPO IN CONSOLE
    console.log(`${nome} ha subito ${falliSubiti} falli!`);

}
