// test code
import { AngebotObjekt } from "./AngebotObjekt.js";
import { ClientService } from "./ClientService.js";
import { AngebotResponse } from "./AngebotResponse.js";
export class AngeboteProvider {
    api;
    constructor() {
        this.api = new ClientService();
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
            let Teilnehmerzahl = String(Termin.teilnehmerMin) + " bis " + String(Termin.teilnehmerMax);
            let AuchGeeignetFuer = Termin.angebot.behinderungen;
            let ausbildungPlz = Termin.adresse.ortStrasse.plz;
            let ausbildungStrasse = Termin.adresse.strasse;
            let ausbildungOrt = Termin.adresse.ortStrasse.name;
            let ausbildungLaengengrad = Termin.adresse.ortStrasse.laengengrad;
            let ausbildungBreitengrad = Termin.adresse.ortStrasse.breitengrad;
            let Dienstleistungen = Termin.adresse.dienstleistungen;
            let HinweiseZurAdresse = Termin.adresse.hinweise;
            // Kontaktperson?
            let KontaktpersonName = "";
            let KontaktpersonFunktion = "";
            let KontaktpersonTelefon = "";
            let KontaktpersonEmail = "";
            //
            let logo = Termin.angebot?.bildungsanbieter?.logo?.url ?? null;
            "";
            // erstellung des Angebot objektes
            let A = new AngebotObjekt(id, ausbildungsinhalte, link, beginn, ende, individuellerEinstieg, bildungsart, unterrichtsform, abschlussart, abschlussbezeichnung, zusatzqualifizierung, pruefendeStelle, schulart, ZulassungZurFoerderungPerBildungsgutschein, foerderung, bildungsanbieterBezeichnung, Plz, Strasse, Ort, Telefonnummer, mobilTelefon, internet, E_mail, Zugang, Zielgruppe, Teilnehmerzahl, AuchGeeignetFuer, ausbildungPlz, ausbildungStrasse, ausbildungOrt, ausbildungLaengengrad, ausbildungBreitengrad, Dienstleistungen, HinweiseZurAdresse, KontaktpersonName, KontaktpersonFunktion, KontaktpersonTelefon, KontaktpersonEmail, logo);
            AngebotListe.push(A);
        }
        const AR = new AngebotResponse(AngebotListe, daten.data.page, daten.status);
        return AR;
    }
}
//# sourceMappingURL=AngeboteProvider.js.map