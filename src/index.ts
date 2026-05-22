import {AngeboteProvider} from "./AngeboteProvider.js"
import {azubiAngebotResponse } from "./azubiAngebotResponse.js";
import {studiAngebotResponse} from "./studiAngebotResponse.js"
    
// Dieser code Dient als Beispiel zur verwendung der SDK

const Provider = new AngeboteProvider();

// Ausbildung
const AzubiAngebotListe:azubiAngebotResponse = await Provider.getAzubiAngebote({bart:102}); // bart 102 --> nur Berufsausbildungen
console.log(AzubiAngebotListe.getAngebotliste()[1].getAbschlussbezeichnung());

// Studium
const StudiAngebotListe:studiAngebotResponse = await Provider.getStudiAngebote({sw:"Informatikberufe"}); // sw --> Beispiel Suchwort
console.log(StudiAngebotListe.getAngebotliste()[2].getStudienfach());

