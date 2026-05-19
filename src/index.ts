import {AngeboteProvider} from "./AngeboteProvider.js"
import { AngebotResponse } from "./AngebotResponse.js";

var A:AngeboteProvider = new AngeboteProvider;

async function  printSite(seite:number):Promise<void>{
    const angebotResponse: AngebotResponse = await A.getAngebote({
        page:seite,
        bart:106
    });

    for(let i = 0; i<19; i++){
        const A = angebotResponse.getAngebotliste()[i];
        // console.log(A.getAbschlussart());
        console.log(A.getAbschlussbezeichnung());
        console.log(A.getAuchGeeignetFuer());
        // console.log(A.getAusbildungBreitengrad());
        // console.log(A.getAusbildungLaengengrad());
        // console.log(A.getAusbildungStrasse());
        // console.log(A.getAusbildungsOrt());
        // console.log(A.getAusbildungsinhalte());
        // console.log(A.getAusbilungPlz());
        // console.log(A.getBeginn());
        // console.log(A.getBildunganbieterBezeichnung());
        // console.log(A.getBildungsart());
        // console.log(A.getDienstleistungen());
        // console.log(A.getE_mail());
        // console.log(A.getEnde());
        // console.log(A.getFörderung());
        // console.log(A.getHinweiseZurAdresse());
        // console.log(A.getId());
        // console.log(A.getIndividuellerEinstieg());
        // console.log(A.getInternet());
        // console.log(A.getLink());
        // console.log(A.getLogo());
        // console.log(A.getMobilTelefon());
        // console.log(A.getOrt());
        // console.log(A.getPlz());
        // console.log(A.getPrüfendeStelle());
        // console.log(A.getSchulart());
        // console.log(A.getStraße());
        // console.log(A.getTeilnehmerzahl());
        // console.log(A.getTelefon());
        // console.log(A.getUnterrichtsform());
        // console.log(A.getZielgruppe());
        // console.log(A.getZugang());
        // console.log(A.getZulassungZurFörderungPerBildungsgutschein());
        // console.log(A.getZusatzqualifizierung());
    }
    
}










for(let i = 80; i < 100; i++){
     console.log(`Seite ${i} wird angefragt:`);
    await new Promise(f => setTimeout(f, 500));
    printSite(i);
}