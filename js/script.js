// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var studente={'nome':"pippo", 'cognome':'birillo', 'eta':30}

for (var key in studente){
    console.log(key + " = " + studente[key])
}