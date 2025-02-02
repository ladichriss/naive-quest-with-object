const question = document.querySelector('.body-question');
const button = document.querySelector('.button');
const form = document.querySelector('.form');
const punteggio = document.querySelector('.result');
let contatore = 0;
let total_score = 0;

button.addEventListener('click', function(event) {
    event.preventDefault();
    let user_answer = document.querySelector('.input-user').value;
    if (contatore < questions.length) {
        questions[contatore].risposta_utente = user_answer.toLowerCase();

        if (questions[contatore].risposta_utente === questions[contatore].risposta_corretta) {
            total_score = total_score + questions[contatore].punteggio;
        }

        contatore = contatore + 1;

        if (contatore < questions.length) {
            question.textContent = `Domanda ${contatore + 1} - ${questions[contatore].testo_domanda}`;
        } else { 
            question.textContent = "Hai finito le domande!"
            punteggio.textContent = `Il tuo punteggio è: ${total_score}/13`;
        }

    }
})

let questions = [
    {
        "n_domanda": 1,
        "testo_domanda": "Qual è la capitale dell'Italia?",
        "risposta_utente": "",
        "risposta_corretta": "roma",
        "punteggio": 2
    },
    {
        "n_domanda": 2,
        "testo_domanda": "Come si chiama il Presidente della Repubblica Italiana?",
        "risposta_utente": "",
        "risposta_corretta": "sergio mattarella",
        "punteggio": 4
    },
    {
        "n_domanda": 3,
        "testo_domanda": "Da quanti giorni è composta una settimana?",
        "risposta_utente": "",
        "risposta_corretta": "7",
        "punteggio": 4
    },
    {
        "n_domanda": 4,
        "testo_domanda": "Qual è il nome dell'animale che dice: 'miao' ?",
        "risposta_utente": "",
        "risposta_corretta": "gatto",
        "punteggio": 1,
    },
    {
        "n_domanda": 5,
        "testo_domanda": "Quale è il nome della stagione in cui si celebra il Natale?",
        "risposta_utente": "",
        "risposta_corretta": "inverno",
        "punteggio": 2,
    }
]