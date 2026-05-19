// test code
import {AngebotObjekt} from "./AngebotObjekt.js"
import {ClientService} from "./ClientService.js"
import {AngebotResponse} from "./AngebotResponse.js"

export class AngeboteProvider{
    protected api:ClientService;
    constructor(){
        this.api = new ClientService();
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