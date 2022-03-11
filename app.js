/**
 * Det här är en demo på hur man kan lägga data (objekt, arrays m.m) i en separat
 * fil, i json-format, och sedan hämta den till sin JavaScript-kod.
 *
 * Eftersom funktionen fetch() är asynkron behöver vi vänta på den med await. För att
 * göra det behöver vi anropa den i en funktion som vi deklarerat som async.
 *
 * Observera att fetch() är en funktion som finns i en webbläsare. Det fungerar inte på samma
 * sätt om ni vill köra er javascript i Node.
 */

async function getWords() {
  const data = await fetch("data.json") //Man kan hämta en json-fil med data på json-format.
  const words = await data.json() //Funktionen json() gör om resultatet från fetch() till json.

  // I demonstrations-syfte loggas data ut här och skrivs till bodyn.
  console.log(words)

  words.forEach(function (word) {
    document.body.innerText += word
  })
}

getWords()
