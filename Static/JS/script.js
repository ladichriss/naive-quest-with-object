
// PRIMA PAGINA (index.html) [variabili e costanti]
const question = document.querySelector('.body-question')
const button = document.querySelector('.button')
const form = document.querySelector('.form')
const punteggio = document.querySelector('.result')
const correzioni = document.querySelector('.correzioni')
let contatore = 0
let total_score = 0

// SECONDA PAGINA (questions.html) [variabili e costanti]
const testo_domanda1 = document.querySelector('.domanda1')
const risposta_corretta1 = document.querySelector('domanda-corretta1')

const testo_domanda2 = document.querySelector('.domanda2')
const risposta_corretta2 = document.querySelector('domanda-corretta2')

const testo_domanda3 = document.querySelector('.domanda3')
const risposta_corretta3 = document.querySelector('domanda-corretta3')

const testo_domanda4 = document.querySelector('.domanda4')
const risposta_corretta4 = document.querySelector('domanda-corretta4')

const testo_domanda5 = document.querySelector('.domanda5')
const risposta_corretta5 = document.querySelector('domanda-corretta5')

const button_correzioni = document.querySelector('button-correzioni')
const button_return = document.querySelector('button-return')

// PRIMA PAGINA (index.html) [script]
button.addEventListener('click', function(event) {
    event.preventDefault()
    let user_answer = document.querySelector('.input-user').value
    if (contatore < questions.length) {
        questions[contatore].risposta_utente = user_answer.toLowerCase()

        if (questions[contatore].risposta_utente === questions[contatore].risposta_corretta) {
            total_score = total_score + questions[contatore].punteggio
        }

        contatore = contatore + 1;

        if (contatore < questions.length) {
            question.textContent = `Domanda ${contatore + 1} - ${questions[contatore].testo_domanda}`
        } else { 
            question.textContent = "Hai finito le domande!"
            punteggio.textContent = `Il tuo punteggio è: ${total_score}/13`
            correzioni.textContent = "Clicca qui per ricevere le CORREZIONI 📋"
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


// // SECONDA PAGINA (questions.html) [script]
button.addEventListener('click', function(event) {
    event.preventDefault()
    if (questions[0].testo_domanda === questions[0].risposta_corretta) {
        testo_domanda1.textContent = "Domanda 1 - " + questions[0].testo_domanda
        risposta_corretta1.textContent = "Hai risposto: " + questions[0].risposta_utente + "✅"
    } else {
        testo_domanda1.textContent = "Domanda 1 - " + questions[0].testo_domanda
        risposta_corretta1.textContent = "Hai risposto: " + questions[0].risposta_utente + "❌"
    }

    if (questions[1].testo_domanda === questions[1].risposta_corretta) {
        testo_domanda1.textContent = "Domanda 2 - " + questions[1].testo_domanda
        risposta_corretta1.textContent = "Hai risposto: " + questions[1].risposta_utente + "✅"
    } else {
        testo_domanda1.textContent = "Domanda 2 - " + questions[1].testo_domanda
        risposta_corretta1.textContent = "Hai risposto: " + questions[1].risposta_utente + "❌"
    }
})