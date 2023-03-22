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

/***DATI
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg ***/

//selezione l'elemento container della DOM
const containerEl = document.querySelector('.container');
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

//Stampo su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//Stampare le stesse informazioni su DOM sottoforma di stringhe

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

//Trasformare la stringa foto in una immagine effettiva
//Organizzare i singoli membri in card/schede


