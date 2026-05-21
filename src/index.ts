import {AngeboteProvider} from "./AngeboteProvider.js"
import { AngebotResponse } from "./AngebotResponse.js";
import {sAngebotResponse} from "./sAngebotResponse.js"


var A:AngeboteProvider = new AngeboteProvider;

async function  printSite(seite:number):Promise<void>{
    const angebotResponse: sAngebotResponse = await A.getsAngebote({
        pg:seite,
        sfe:"93574;93575;93581;93583;93584;93592;93593;93598;93611;93621;93625;93627;93638;93648;93649;93650;93651;93659;93661;93677;93685;93690;93694;93696;93698;93699;93701;93705;93713;93718;93719;93720;93724;93733;93736;93739;93751;93757;93767;93772;93774;93795;93796;93797;93799;93802;93804;93813"
    });
    console.log(angebotResponse.getPage());

    for(let i = 0; i<1; i++){
        const sA = angebotResponse.getAngebotliste()[i];
        console.log(sA.getHochschulart());
        console.log(sA.getLaengengrad());
        console.log(sA.getBreitengrad())
        console.log(sA.getLogo());
        console.log(sA.getName());
        console.log(sA.getOrt());
        console.log(sA.getPlz());
        console.log(sA.getRegion());
        console.log(sA.getStrasse());
        console.log(sA.getStudienbeginn());
        console.log(sA.getStudienfach());
        console.log(sA.getStudienform());
        console.log(sA.getStudientyp());

        /*
        console.log(A.getAbschlussart());
        console.log(A.getAbschlussbezeichnung());
        console.log(A.getAuchGeeignetFuer());
        console.log(A.getAusbildungBreitengrad());
        console.log(A.getAusbildungLaengengrad());
        console.log(A.getAusbildungStrasse());
        console.log(A.getAusbildungsOrt());
        console.log(A.getAusbildungsinhalte());
        console.log(A.getAusbilungPlz());
        console.log(A.getBeginn());
        console.log(A.getBildunganbieterBezeichnung());
        console.log(A.getBildungsart());
        console.log(A.getDienstleistungen());
        console.log(A.getE_mail());
        console.log(A.getEnde());
        console.log(A.getFörderung());
        console.log(A.getHinweiseZurAdresse());
        console.log(A.getId());
        console.log(A.getIndividuellerEinstieg());
        console.log(A.getInternet());
        console.log(A.getLink());
        console.log(A.getLogo());
        console.log(A.getMobilTelefon());
        console.log(A.getOrt());
        console.log(A.getPlz());
        console.log(A.getPrüfendeStelle());
        console.log(A.getSchulart());
        console.log(A.getStraße());
        console.log(A.getTeilnehmerzahl());
        console.log(A.getTelefon());
        console.log(A.getUnterrichtsform());
        console.log(A.getZielgruppe());
        console.log(A.getZugang());
        console.log(A.getZulassungZurFörderungPerBildungsgutschein());
        console.log(A.getZusatzqualifizierung());
        */
    }
    
}


for(let i = 0; i <1; i++){
     console.log(`Seite ${i} wird angefragt:`);
    await new Promise(f => setTimeout(f, 500));
    await printSite(i);
}