// test code
import { AngebotObjekt } from "./AngebotObjekt.js";
import { ClientService } from "./ClientService.js";
import { sClientService } from "./sClientService.js";
import { AngebotResponse } from "./AngebotResponse.js";
import { sAngebotResponse } from "./sAngebotResponse.js";
import { sAngebotObjekt } from "./sAngebotObjekt.js";
export class AngeboteProvider {
    api;
    sapi;
    constructor() {
        this.api = new ClientService();
        this.sapi = new sClientService();
    }
    async getsAngebote({ sw, sfa, sfe, orte, pg, uk, re, sfo, st, smo, abg, hsa, san, ffst } = {}) {
        var sAngebotListe = [];
        var daten = await this.sapi.fetchData(sw, sfa, sfe, orte, pg, uk, re, sfo, st, smo, abg, hsa, san, ffst);
        // status check
        for (var item of daten.data.items) {
            // argumente die weiterg gegeben werden sollen
            let logo = item.studienangebot?.studienanbieter?.logo?.url;
            let studienbeginn = item.studienangebot?.studiBeginn;
            // fristen ergänzen
            let studientyp = item.studienangebot?.studientyp?.label;
            let studienform = item.studienangebot.studienform.label;
            let hochschulart = item.studienangebot?.hochschulart?.label;
            let studienfaecher = item.studienangebot?.studienfaecher;
            // Studienanbieter
            let name = item.studienangebot?.studienanbieter?.name;
            let strasse = item.studienangebot?.studienort?.strasse;
            let plz = item.studienangebot?.studienort?.postleitzahl;
            let region = item.studienangebot?.region?.label;
            let ort = item.studienangebot?.studienort?.ort;
            let laengengrad = item.studienangebot?.studienort?.location.lat;
            let breitengrad = item.studienangebot?.studienort?.location.lon;
            let sA = new sAngebotObjekt(logo, studienbeginn, studientyp, studienform, hochschulart, studienfaecher, name, strasse, plz, region, ort, laengengrad, breitengrad);
            sAngebotListe.push(sA);
        }
        let status = daten.status;
        let page = {
            size: 20,
            totalElements: daten.maxErgebnisse,
            totalPages: Math.ceil(daten.maxErgebnisse / 20),
            number: pg
        };
        const sAR = new sAngebotResponse(sAngebotListe, page, status);
        return sAR;
    }
    async getAngebote({ re, page, sty, ids, orte, size, uk, bart, ityp, bt, ban, bg } = {}) {
        var AngebotListe = [];
        var daten = await this.api.fetchData(re, // string
        page, sty, ids, orte, size, uk, bart, ityp, bt, ban, bg);
        // 401
        if (daten.status != 200) {
            const AR = new AngebotResponse([], daten.data.page, daten.status);
            return AR;
        }
        // 200 OK
        for (var Termin of daten.data._embedded.termine) {
            let id = Termin.id;
            let ausbildungsinhalte = Termin.angebot.inhalt;
            let link = Termin.link;
            let beginn = Termin.beginn;
            let ende = Termin.ende;
            let individuellerEinstieg = Termin.individuellerEinstieg;
            let bildungsart = Termin.angebot.bildungsart.bezeichnung;
            let unterrichtsform = Termin.unterrichtsform.bezeichnung;
            let abschlussart = Termin.angebot.abschlussart;
            let abschlussbezeichnung = Termin.angebot.abschlussbezeichnung;
            let zusatzqualifizierung = Termin.angebot.zusatzqualifikationen;
            let pruefendeStelle = Termin.pruefendeStelle;
            let schulart = Termin.angebot.schulart.bezeichnung;
            let ZulassungZurFoerderungPerBildungsgutschein = Termin.foerderung;
            let foerderung = Termin.angebot.foerderung;
            let bildungsanbieterBezeichnung = Termin.angebot.bildungsanbieter.name;
            let Plz = String(Termin.angebot.bildungsanbieter.adresse.ortStrasse.plz);
            let Strasse = Termin.angebot.bildungsanbieter.adresse.strasse;
            let Ort = Termin.angebot.bildungsanbieter.adresse.ortStrasse.name;
            let Telefonnummer = Termin.angebot.bildungsanbieter.telefonVorwahl ? Termin.angebot.bildungsanbieter.telefonVorwahl + String(Termin.angebot.bildungsanbieter.telefonDurchwahl) : null;
            let mobilTelefon = Termin.angebot.bildungsanbieter.mobilVorwahl ? Termin.angebot.bildungsanbieter.mobilVorwahl + String(Termin.angebot.bildungsanbieter.mobilDurchwahl) : null;
            let internet = Termin.angebot.bildungsanbieter.homepage;
            let E_mail = Termin.angebot.bildungsanbieter.email;
            let Zugang = Termin.angebot.zugang;
            let Zielgruppe = Termin.angebot.zielgruppe;
            let Teilnehmerzahl = Termin.teilnehmerMin ? String(Termin.teilnehmerMin) + " bis " + String(Termin.teilnehmerMax) : null;
            let AuchGeeignetFuer = Termin.angebot.behinderungen;
            let ausbildungPlz = Termin?.adresse?.ortStrasse?.plz;
            let ausbildungStrasse = Termin.adresse?.strasse;
            let ausbildungOrt = Termin.adresse?.ortStrasse?.name;
            let ausbildungLaengengrad = Termin.adresse?.ortStrasse?.laengengrad;
            let ausbildungBreitengrad = Termin.adresse?.ortStrasse?.breitengrad;
            let Dienstleistungen = Termin.adresse?.dienstleistungen;
            let HinweiseZurAdresse = Termin.adresse?.hinweise;
            let logo = Termin.angebot?.bildungsanbieter?.logo?.url ?? null;
            // erstellung des Angebot objektes
            let A = new AngebotObjekt(id, ausbildungsinhalte, link, beginn, ende, individuellerEinstieg, bildungsart, unterrichtsform, abschlussart, abschlussbezeichnung, zusatzqualifizierung, pruefendeStelle, schulart, ZulassungZurFoerderungPerBildungsgutschein, foerderung, bildungsanbieterBezeichnung, Plz, Strasse, Ort, Telefonnummer, mobilTelefon, internet, E_mail, Zugang, Zielgruppe, Teilnehmerzahl, AuchGeeignetFuer, ausbildungPlz, ausbildungStrasse, ausbildungOrt, ausbildungLaengengrad, ausbildungBreitengrad, Dienstleistungen, HinweiseZurAdresse, logo);
            AngebotListe.push(A);
        }
        const AR = new AngebotResponse(AngebotListe, daten.data.page, daten.status);
        return AR;
    }
}
//# sourceMappingURL=AngeboteProvider.js.map