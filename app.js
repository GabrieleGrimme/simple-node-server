const fs = require('fs'); //CommonJS <> ES6 Modules (import fs from 'fs')

const name = 'Bulbasaur';

fs.writeFile('pokemon.txt', 'Pokemon #1 ' + name, (error) =>  { // schreibe in den text, 
    if (error) {
        console.log(error.message);// wird ein error Objekt übergeben
        return false;
}

console.log('File was written.');

});