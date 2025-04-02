
//inizializzazione variabili
const lampadina = document.getElementById('lampadina');
const interruttore = document.getElementById('btn-on-off');

//Inizializzazione eventi
//Accensione e spegnimento lampadina tramite bottone
interruttore.addEventListener('click', function() {
    //se la lampadina è spenta
    if (lampadina.src.includes('white')) {
        lampadina.src = './img/yellow_lamp.png';
        interruttore.innerText = 'Spegni';
    } 
    //se la lampadina è accesa
    else {
        lampadina.src = './img/white_lamp.png';
        interruttore.innerText = 'Accendi';
    }
});
  