// test code
import {AngebotObjekt} from "./AngebotObjekt.js"
import {ClientService} from "./ClientService.js"
import {sClientService} from "./sClientService.js"
import {AngebotResponse} from "./AngebotResponse.js"
import {sAngebotObjekt} from "./sAngebotObjekt.js"



export class AngeboteProvider{
    protected api:ClientService;
    protected sapi:sClientService;
    constructor(){
        this.api = new ClientService();
        this.sapi = new sClientService();
    }public async getsAngebote({
        sw, sfa, sfe, orte, pg, uk, re, sfo, st, smo, abg, hsa, san, ffst
    }:{
        sw?: string,
        sfa?: number,
        sfe?: string,
        orte?:string,
        pg?:number,
        uk?: string,
        re?: string,
        sfo?: number,
        st?: number,
        smo?: number,
        abg?: number,
        hsa?:number,
        san?:number,
        ffst?: number
        }={}
    ){
         var sAngebotListe: sAngebotObjekt[]= [];
         var daten:any=await this.sapi.fetchData(
            sw,
            sfa,
            sfe,
            orte,
            pg,
            uk,
            re,
            sfo,
            st,
            smo,
            abg,
            hsa,
            san,
            ffst
         )
         // status check

         for(var item of daten.data.items){
            // argumente die weiterg gegeben werden sollen
            let logo:string = item.studienangebot?.studienanbiter?.logo?.url;
            let beginn:string = "Platzhalter!"; // Platzhalter!!!
            let ende:string = "platzhalter!"; // Platzhalter!!!
            let studienbeginn:string = item.studienangebot?.studibeginn;
            let spaeterer:number = 1; // Platzhalter!!    
            // fristen ergänzen
            let vorlesungen: string = ""; // Platzhalter
            let studientyp:string = item.studienangebot?.studientyp?.label;
            let studienform:string = item.studienangebot.studienform.label;
            let hochschulart:string = item.studienangebot?.label;
            let abschlussgradIntern: string = "Platzhalter"; /* !!! */ 
            let lehramtsbefaehigung: string = "Platzhalter"; //!!
            let unterrichtssprache: string = "Platzhalter"; //!!
            let internationalerDoppelabschluss: string = "Platzhalter"; //!!
            let studienfaecher: string[] = item.studienangebot?.studienfaecher;
            let zulassungsmodus: string = "Platzhalter";
             // Studienanbieter
            let name:string = item.studienangebot?.studienanbieter?.namme;
            let strasse:string = item.studienangebot?.studienort?.strasse; // mit hausnummer?
            let plz: string = item.studienangebot?.studienort?.plz;
            let ort:string = item.studienangebot?.studienort?.ort;
            // kontakt
            let telefon:string = "Platzhalter";///!!!
            let internet:string = "Plstzhalter"//!!
            let email:string = "Plazhalter"//!!
            //Veröffentlichungsinfos
            let veranstaltungsID:string = "Platzhaler"//!!
            let aktualisierungsdatum:string = "Platzhaler"//!!
            let studierenOhneABi: string = "Platzhalter"//!!
            let Koordinaten:number = 1// ist da, mach ich noch
            let sA = new sAngebotObjekt(
                logo, beginn, ende, studienbeginn, spaeterer, vorlesungen, studientyp, studienform, hochschulart, abschlussgradIntern, lehramtsbefaehigung, unterrichtssprache, internationalerDoppelabschluss,
                studienfaecher, zulassungsmodus, name, strasse, plz, ort, telefon, internet, email, veranstaltungsID, aktualisierungsdatum, studierenOhneABi, Koordinaten
            );
            sAngebotListe.push(sA)
         }
        const AR: AngebotResponse = new AngebotResponse(sAngebotListe, daten.maxErgebnisse,"kein status");
        return AR;


    }

    public async getAngebote({
        re, page, sty, ids, orte, size, uk, bart, ityp, bt, ban,bg}:{
        re?:string,// string
        page?: number,
        sty?: number,
        ids?:number,
        orte?:number,
        size?:number,
        uk?:number,
        bart?:number, 
        ityp?:number,
        bt?:number,
        ban?:number,
        bg?: boolean}={}
    ){
        var AngebotListe: AngebotObjekt[]= [];
        var daten:any =  await this.api.fetchData(
            re,// string
            page,
            sty,
            ids,
            orte,
            size,
            uk,
            bart, 
            ityp,
            bt,
            ban,
            bg
        );
        // 401
        if (daten.status != 200) {
            const AR: AngebotResponse = new AngebotResponse([], daten.data.page, daten.status); 
            return AR;
        }

        // 200 OK

        for(var Termin of daten.data._embedded.termine){
            let id:string = Termin.id; 
            let ausbildungsinhalte: string = Termin.angebot.inhalt;
            let link: string = Termin.link;
            let beginn: string = Termin.beginn;
            let ende: string = Termin.ende;
            let individuellerEinstieg: string = Termin.individuellerEinstieg;
            let bildungsart: string = Termin.angebot.bildungsart.bezeichnung;
            let unterrichtsform: string = Termin.unterrichtsform.bezeichnung;
            let abschlussart: string = Termin.angebot.abschlussart;
            let abschlussbezeichnung: string = Termin.angebot.abschlussbezeichnung;
            let zusatzqualifizierung: string = Termin.angebot.zusatzqualifikationen;
            let pruefendeStelle: string = Termin.pruefendeStelle;
            let schulart: string = Termin.angebot.schulart.bezeichnung;
            let ZulassungZurFoerderungPerBildungsgutschein: boolean =  Termin.foerderung;
            let foerderung: string = Termin.angebot.foerderung;
            let bildungsanbieterBezeichnung: string = Termin.angebot.bildungsanbieter.name;
            let Plz: string = String(Termin.angebot.bildungsanbieter.adresse.ortStrasse.plz);
            let Strasse: string = Termin.angebot.bildungsanbieter.adresse.strasse;
            let Ort: string = Termin.angebot.bildungsanbieter.adresse.ortStrasse.name;
            let Telefonnummer:string | null = Termin.angebot.bildungsanbieter.telefonVorwahl ? Termin.angebot.bildungsanbieter.telefonVorwahl + String(Termin.angebot.bildungsanbieter.telefonDurchwahl) : null;
            let mobilTelefon: string | null  = Termin.angebot.bildungsanbieter.mobilVorwahl ? Termin.angebot.bildungsanbieter.mobilVorwahl + String(Termin.angebot.bildungsanbieter.mobilDurchwahl) : null;
            let internet: string = Termin.angebot.bildungsanbieter.homepage;
            let E_mail: string = Termin.angebot.bildungsanbieter.email;
            let Zugang: string = Termin.angebot.zugang;
            let Zielgruppe: string = Termin.angebot.zielgruppe;
            let Teilnehmerzahl: string|null = Termin.teilnehmerMin ? String(Termin.teilnehmerMin) + " bis " + String(Termin.teilnehmerMax):null;
            let AuchGeeignetFuer: string[] = Termin.angebot.behinderungen;
            let ausbildungPlz: string = Termin?.adresse?.ortStrasse?.plz;
            let ausbildungStrasse: string = Termin.adresse?.strasse;
            let ausbildungOrt: string = Termin.adresse?.ortStrasse?.name;
            let ausbildungLaengengrad: string = Termin.adresse?.ortStrasse?.laengengrad;
            let ausbildungBreitengrad: string = Termin.adresse?.ortStrasse?.breitengrad;
            let Dienstleistungen: string = Termin.adresse?.dienstleistungen;
            let HinweiseZurAdresse: string = Termin.adresse?.hinweise;
            let logo: string | null = Termin.angebot?.bildungsanbieter?.logo?.url ?? null;
            // erstellung des Angebot objektes
            let A = new AngebotObjekt(
                id,
                ausbildungsinhalte,
                link,
                beginn,
                ende,
                individuellerEinstieg,
                bildungsart,
                unterrichtsform,
                abschlussart,
                abschlussbezeichnung,
                zusatzqualifizierung,
                pruefendeStelle,
                schulart, 
                ZulassungZurFoerderungPerBildungsgutschein,
                foerderung,
                bildungsanbieterBezeichnung,
                Plz,
                Strasse,
                Ort,
                Telefonnummer,
                mobilTelefon,
                internet,
                E_mail,
                Zugang,
                Zielgruppe,
                Teilnehmerzahl,
                AuchGeeignetFuer,
                ausbildungPlz,
                ausbildungStrasse,
                ausbildungOrt,
                ausbildungLaengengrad,
                ausbildungBreitengrad,
                Dienstleistungen,
                HinweiseZurAdresse,
                logo,
                );
            AngebotListe.push(A);
 
        }
        const AR: AngebotResponse = new AngebotResponse(AngebotListe, daten.data.page,daten.status);
        return AR;
    }
}