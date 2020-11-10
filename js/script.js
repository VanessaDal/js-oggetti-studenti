// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var studente=
    {
    'nome':"pippo", 
    'cognome':'birillo', 
    'eta':30
    }

for (var key in studente){
    console.log(key + " = " + studente[key])
}

//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var arrayStudenti = [
    {
      'nome' : 'Vanessa',
      'cognome' : "D'Alessandro",
      'eta' : '32'
    },
    {
      'nome' : 'Billy',
      'cognome' : 'Ballo',
      'eta' : '36'
    },
    {
      'nome' : 'Maccio',
      'cognome' : 'Capatonda',
      'eta' : '40'
    }
  ];
  
  console.log(arrayStudenti);
  
  for (var i = 0; i < arrayStudenti.length; i++) {
    console.log(arrayStudenti[i].nome + ' ' + arrayStudenti[i].cognome);
  };