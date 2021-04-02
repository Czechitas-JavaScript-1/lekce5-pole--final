// Pro výpis do stránky můžeš použít funkci vypisText('text');
// Její kód je přiložen na konci tohoto souboru.
// Nebo můžeš pomocí console.log('text'); vypisovat do konzole prohlížeče.


// Úkol 1 - Založ nové pole se seznamem jmen (alespoň 5)
// Vypiš jeho obsah do stránky - JavaScript spojí pole automaticky do řetězce
let jmena = ['Alena', 'Jana', 'Marie', 'Filoména', 'Hortenzie'];
vypisText(jmena);


// Úkol 2 - Vypiš třetí jméno v pořadí
// Nezapomeň, že pole se čísluje od 0
vypisText(jmena[2]);





// Úkol 3 - Kolik jmen je v poli?
// Pole má vlastnost pole.length
vypisText('Počet jmen v poli: ' + jmena.length);




// Úkol 4 - Vypiš znovu seznam jmen, ALE...
// Tentokrát použij cyklus .forEach() a před každé jméno přidej
// číslo indexu, na kterém se jméno nachází
// 0. Alena
// 1. Jana
// 2. Marie
// atd.
jmena.forEach(vypisTextSIndexem);




// Úkol 5 - přidej na konec pole další jméno
// OK: pole.push()
// NOK: pole.unshift() - tato funkce přidává na začátek pole
// Doplněný seznam jmen vypiš (jednoduše jako v příkladu 1)
jmena.push('Kroketa');
vypisText(jmena);



// Úkol 6 - odeber z pole první a poslední jméno a vypiš
// obě jména a pak i výsledné pole
// pole.shift()
// pole.pop()










// *********************************************
function vypisText(txt) {
    document.querySelector('#vystup').innerText += txt + '\n';
}

function vypisTextSIndexem(element, index) {
    document.querySelector('#vystup').innerText += index + '. ' + element + '\n';
}