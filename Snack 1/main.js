// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal 

// ARRAY DI OGGETTI
let listaBici = [

    // proprietà bici 1
    {
        nomeBici: 'Bianchi',
        pesoBici: 10
    },

    // proprietà bici 2
    {
        nomeBici: 'Merida',
        pesoBici: 8
    },

    // proprietà bici 3
    {
        nomeBici: 'Trek',
        pesoBici: 6
    },

    // proprietà bici 4
    {
        nomeBici: 'Kona',
        pesoBici: 10
    },

    // proprietà bici 5
    {
        nomeBici: 'Santa Cruz',
        pesoBici: 10
    },

    // proprietà bici 6
    {
        nomeBici: 'Giant',
        pesoBici: 10
    }
];

// stampo array di oggetti
console.log(listaBici);


// STAMPA A SCHERMO LA BICI CON PESO MINORE
// variabile per ceracre la bici più leggera nell'array
let biciLeggera = listaBici[0];

// cerco la bici più leggera nell'array di bici
for (let i = 0; i < listaBici.length; i++) {
    // condizione
    // se tra tutti gli oggetti dell'array della listaBici, la biciLeggera è minore
    // allora la biciLeggera è uguale a bici
    if (listaBici[i].pesoBici < biciLeggera.pesoBici) {
        biciLeggera = listaBici[i];
    }
};

// DESTRUTTURING 
// variabili proprietà bici è uguale alla bici più leggera
const {nomeBici, pesoBici} = biciLeggera;

// STAMPA LA BICI PIU LEGGERA IN CONSOLE E HTML
console.log(`La bici più leggera è ${nomeBici} con un peso pari a ${pesoBici}`);
document.getElementById('bici').innerHTML = `La bici più leggera è ${nomeBici} con un peso pari a ${pesoBici}`;


