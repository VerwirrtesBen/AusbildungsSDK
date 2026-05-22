// test code
import {azubiAngebotObjekt} from "./azubiAngebotObjekt.js"
import {azubiClientService} from "./azubiClientService.js"
import {studiClientService} from "./studiClientService.js"
import {azubiAngebotResponse} from "./azubiAngebotResponse.js"
import {studiAngebotResponse} from "./studiAngebotResponse.js"
import {studiAngebotObjekt} from "./studiAngebotObjekt.js"



export class AngeboteProvider{
    protected api:azubiClientService;
    protected sapi:studiClientService;
    constructor(){
        this.api = new azubiClientService();
        this.sapi = new studiClientService();
    }public async getStudiAngebote({
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
         var sAngebotListe: studiAngebotObjekt[]= [];
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
         if (daten.status != 200) {
            const AR: studiAngebotResponse = new studiAngebotResponse([], daten.data.page, daten.status); 
            return AR;
        }

         
         for(var item of daten.data.items){
            // argumente die weiterg gegeben werden sollen
            let logo:string = item.studienangebot?.studienanbieter?.logo?.url;
            let studienbeginn:string = item.studienangebot?.studiBeginn; 
            // fristen ergänzen
            let studientyp:string = item.studienangebot?.studientyp?.label;
            let studienform:string = item.studienangebot.studienform.label;
            let hochschulart:string = item.studienangebot?.hochschulart?.label;
            let studienfaecher: string[] = item.studienangebot?.studienfaecher;
             // Studienanbieter
            let name:string = item.studienangebot?.studienanbieter?.name;
            let strasse:string = item.studienangebot?.studienort?.strasse; 
            let plz: string = item.studienangebot?.studienort?.postleitzahl;
            let region: string = item.studienangebot?.region?.label;
            let ort:string = item.studienangebot?.studienort?.ort;
            let laengengrad:number = item.studienangebot?.studienort?.location.lat;
            let breitengrad:number = item.studienangebot?.studienort?.location.lon;
            let sA = new studiAngebotObjekt(
                logo,studienbeginn,studientyp,studienform,hochschulart,studienfaecher
                ,name, strasse, plz, region, ort, laengengrad, breitengrad
            );
            sAngebotListe.push(sA)  
         }

        let status = daten.status;
        let page:{size?:number, totalElements?:number, totalPages?:number, number?:number} = {
            size:20,
            totalElements:daten.data.maxErgebnisse,
            totalPages: Math.ceil(daten.data.maxErgebnisse / 20),
            number:pg
        }
        const sAR: studiAngebotResponse = new studiAngebotResponse(sAngebotListe,page,status);
        return sAR;


    }

    public async getAzubiAngebote({
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
        var AngebotListe: azubiAngebotObjekt[]= [];
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
            const AR: azubiAngebotResponse = new azubiAngebotResponse([], daten.data.page, daten.status); 
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
            let A = new azubiAngebotObjekt(
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
        const AR: azubiAngebotResponse = new azubiAngebotResponse(AngebotListe, daten.data.page,daten.status);
        return AR;
    }

    getStudienfelder():number[]{
        return [93574, 93575, 93581, 93583, 93584, 93592, 93593, 93598, 93611, 93621, 93625, 93627, 93638, 93648, 93649, 93650, 93651, 93659, 93661, 93677, 93685, 93690, 93694, 93696, 93698, 93699, 93701, 93705, 93713, 93718, 93719, 93720, 93724, 93733, 93736, 93739, 93751, 93757, 93767, 93772, 93774, 93795, 93796, 93797, 93799, 93802, 93804, 93813, 93814, 93815, 93817, 93818, 93819, 93821, 93825, 93828, 93836, 93837, 93842, 93846, 93847, 93850, 93853, 93858, 93861, 93871, 93888, 93889, 93890, 93891, 93896, 93900, 93901, 93904, 93907, 93909, 93911, 93914, 93915, 93918, 93928, 93935, 93936, 93940, 93946, 93953, 93958, 93959, 93970, 93977, 93979, 93986, 93988, 93989, 93995, 93999, 94000, 94008, 94010, 94014, 94020, 94030, 94033, 94037, 94041, 94056, 94063, 94065, 94069, 94087, 94098, 94101, 94114, 94116, 94120, 94121, 94122, 94130, 94142, 94143, 94144, 94145, 94158, 94163, 94170, 94175, 94178, 94179, 94187, 94197, 94204, 94217, 94221, 94224, 94228, 94230, 94231, 94237, 94240, 94242, 94246, 94249, 94252, 94253, 94256, 94257, 94258, 94262, 94269, 94284, 94299, 94303, 94304, 94307, 94310, 94319, 94321, 94322, 94324, 94327, 94328, 94329, 94330, 94333, 94334, 94346, 94348, 94350, 94352, 94357, 94358, 94362, 94363, 94373, 94374, 94375, 94378, 94379, 94383, 94384, 94393, 94394, 94398, 94403, 94405, 94406, 94408, 94412, 94420, 94422, 128341, 130047, 130048];
    }
}