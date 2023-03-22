/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  
Ogni membro è caratterizzato dalle seguenti informazioni:
-nome
-ruolo
-foto
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */


//seleziono l'elemento .row della DOM
const rowEl = document.querySelector('.row');

//creo l'array di oggetti rappresentanti i membri del team
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]

iterateArray(team);

//Trasformare la stringa foto in una immagine effettiva
//Organizzare i singoli membri in card/schede

/*creare due funzioni: 
una che itera l'array 
l'altra che si occupa di stampare la scheda in pagina*/

/**
 * funzione per iterare dentro l'array
 * @param {array} array 
 */
function iterateArray(array) {
    //attraverso un for loop ciclo dentro l'array 
    for (let i = 0; i < team.length; i++) {
        //assegno ad una variabile ogni oggetto dell'array
        const team_member = team[i];
        //invoco la funzione per stampare in pagina
        printInDOM(rowEl, team_member);
    }
}


/**
 * funzione per stampare le card in pagina
 * @param {Element} DOMel 
 * @param {Object} object 
 */
function printInDOM(DOMel, object) {
    // aggiungo il markup da stampare in pagina e lo assegno ad una variabile
    const colMarkup =  `
    <div class="col-12 col-sm-6 col-lg-4">
        <div class="card mb-4 pb-4">
            <img src="./assets/img/${object.photo}" alt="${object.name}">
            <div class="card-body ps-4">
                <h4 class="pt-3">${object.name}</h4>
                <span class="d-block py-3">${object.role}</span>
                <a href="#" class="link-info">overview</a>
            </div>
        </div>
    </div>
    `
    //assegno all'elemento della DOM il markup con le card 
    DOMel.innerHTML += colMarkup;
}

/*
//attraverso un for loop ciclo dentro l'array 
for (let i = 0; i < team.length; i++) {
    //assegno ad una variabile ogni oggetto dell'array
    const team_member = team[i];
    //stampo in console i dati dell'oggetto
    //console.log(`Name: ${team_member.name}; Role: ${team_member.role}; Photo: ${team_member.photo}`);

    const colMarkup =  `
    <div class="col">
        <div class="card">
            <img src="./assets/img/${team_member.photo}" alt="${team_member.name}">
            <div class="card-body">
                <h4>${team_member.name}</h4>
                <span>${team_member.role}</span>
            </div>
        </div>
    </div>
    `
    //assegno ad ogni div l'innerHTML con le info dei membri 
    rowEl.innerHTML += colMarkup;
} 
 */
