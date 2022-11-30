/**
 *
 Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata 
si colora di azzurro ed emetto un messaggio in console con 
il numero della cella cliccata.

Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
 *
 */


//creo un evento che si scatena cliccando sul bottone "play"
document.getElementById('myBtn').addEventListener('click', function() {

//recupero il div griglia nel documento

const myGrid = document.getElementById('myGrid');

//creo un ciclo per aggiungere i 100 quadrati alla griglia
  for (let i = 0; i < 100; i++) {
    //creo il div
    const newSquare = document.createElement('div');
    //assegno la mia classe css al nuovo div
    newSquare.classList.add('square')
    //creo un p dove inserire i numeri da 1 a 100
    newSquare.innerHTML = '<span class="m-auto">' + (i + 1) + '</span>'

    //creo un evento on click per cambiare colore ai quadrati
    newSquare.addEventListener("click", function(){
    newSquare.classList.add('color-blue');

    });
    
    //aggiungo il nuovo div alla griglia
    myGrid.appendChild(newSquare);
  }


}, {once: true});