// Objekt, das ein Angebot darstellt
export class AngebotObjekt {
    id;
    Ausbildungsinhalte;
    Link;
    Beginn;
    Ende;
    IndividuellerEinstieg;
    Bildungsart;
    Unterrichtsform;
    Abschlussart;
    Abschlussbezeichnung;
    Zusatzqualifizierung;
    PrüfendeStelle;
    Schulart;
    ZulassungZurFörderungPerBildungsgutschein;
    Förderung;
    BildunganbieterBezeichnung;
    Plz;
    Straße;
    Ort;
    Telefon;
    mobilTelefon;
    Internet;
    E_mail;
    Zugang;
    Zielgruppe;
    Teilnehmerzahl;
    AuchGeeignetFuer;
    //Ausbildungs ort infos
    ausbildungPlz;
    ausbildungStrasse;
    ausbildungOrt;
    ausbildungLaengengrad;
    ausbildungBreitengrad;
    //
    Dienstleistungen;
    HinweiseZurAdresse;
    KontaktpersonName;
    KontaktpersonFunktion;
    KontaktpersonTelefon;
    KontaktpersonEmail;
    logo;
    constructor(id, Ausbildungsinhalte, Link, Beginn, Ende, IndividuellerEinstieg, Bildungsart, Unterrichtsform, Abschlussart, Abschlussbezeichnung, Zusatzqualifizierung, PrüfendeStelle, Schulart, ZulassungZurFörderungPerBildungsgutschein, Förderung, BildunganbieterBezeichnung, Plz, Straße, Ort, Telefon, mobilTelefon, Internet, E_mail, Zugang, Zielgruppe, Teilnehmerzahl, AuchGeeignetFuer, ausbildungPlz, ausbildungStrasse, ausbildungOrt, ausbildungLaengengrad, ausbildungBreitengrad, Dienstleistungen, HinweiseZurAdresse, KontaktpersonName, KontaktpersonFunktion, KontaktpersonTelefon, KontaktpersonEmail, logo) {
        this.id = id;
        this.Ausbildungsinhalte = Ausbildungsinhalte;
        this.Link = Link;
        this.Beginn = Beginn;
        this.Ende = Ende;
        this.IndividuellerEinstieg = IndividuellerEinstieg;
        this.Bildungsart = Bildungsart;
        this.Unterrichtsform = Unterrichtsform;
        this.Abschlussart = Abschlussart;
        this.Abschlussbezeichnung = Abschlussbezeichnung;
        this.Zusatzqualifizierung = Zusatzqualifizierung;
        this.PrüfendeStelle = PrüfendeStelle;
        this.Schulart = Schulart;
        this.ZulassungZurFörderungPerBildungsgutschein = ZulassungZurFörderungPerBildungsgutschein;
        this.Förderung = Förderung;
        this.BildunganbieterBezeichnung = BildunganbieterBezeichnung;
        this.Straße = Straße;
        this.Ort = Ort;
        this.Plz = Plz;
        this.Telefon = Telefon;
        this.mobilTelefon = mobilTelefon;
        this.Internet = Internet;
        this.E_mail = E_mail;
        this.Zugang = Zugang;
        this.Zielgruppe = Zielgruppe;
        this.Teilnehmerzahl = Teilnehmerzahl;
        this.AuchGeeignetFuer = AuchGeeignetFuer;
        this.ausbildungPlz = ausbildungPlz;
        this.ausbildungStrasse = ausbildungStrasse;
        this.ausbildungOrt = ausbildungOrt;
        this.ausbildungLaengengrad = ausbildungLaengengrad;
        this.ausbildungBreitengrad = ausbildungBreitengrad;
        this.Dienstleistungen = Dienstleistungen;
        this.HinweiseZurAdresse = HinweiseZurAdresse;
        this.KontaktpersonName = KontaktpersonName;
        this.KontaktpersonFunktion = KontaktpersonFunktion;
        this.KontaktpersonTelefon = KontaktpersonTelefon;
        this.KontaktpersonEmail = KontaktpersonEmail;
        this.logo = logo;
    }
    // Get-Methoden
    getId() {
        return this.id;
    }
    getAusbildungsinhalte() {
        return this.Ausbildungsinhalte;
    }
    getLink() {
        return this.Link;
    }
    getBeginn() {
        return this.Beginn;
    }
    getEnde() {
        return this.Ende;
    }
    getIndividuellerEinstieg() {
        return this.IndividuellerEinstieg;
    }
    getBildungsart() {
        return this.Bildungsart;
    }
    getUnterrichtsform() {
        return this.Unterrichtsform;
    }
    getAbschlussart() {
        return this.Abschlussart;
    }
    getAbschlussbezeichnung() {
        return this.Abschlussbezeichnung;
    }
    getZusatzqualifizierung() {
        return this.Zusatzqualifizierung;
    }
    getPrüfendeStelle() {
        return this.PrüfendeStelle;
    }
    getSchulart() {
        return this.Schulart;
    }
    getZulassungZurFörderungPerBildungsgutschein() {
        return this.ZulassungZurFörderungPerBildungsgutschein;
    }
    getFörderung() {
        return this.Förderung;
    }
    getBildunganbieterBezeichnung() {
        return this.BildunganbieterBezeichnung;
    }
    getPlz() {
        return this.Plz;
    }
    getStraße() {
        return this.Straße;
    }
    getOrt() {
        return this.Ort;
    }
    getTelefon() {
        return this.Telefon;
    }
    getMobilTelefon() {
        return this.mobilTelefon;
    }
    getInternet() {
        return this.Internet;
    }
    getE_mail() {
        return this.E_mail;
    }
    getZugang() {
        return this.Zugang;
    }
    getZielgruppe() {
        return this.Zielgruppe;
    }
    getTeilnehmerzahl() {
        return this.Teilnehmerzahl;
    }
    getAuchGeeignetFuer() {
        return this.AuchGeeignetFuer;
    }
    //
    getDienstleistungen() {
        return this.Dienstleistungen;
    }
    getHinweiseZurAdresse() {
        return this.HinweiseZurAdresse;
    }
    getKontaktpersonName() {
        return this.KontaktpersonName;
    }
    getKontaktpersonFunktion() {
        return this.KontaktpersonFunktion;
    }
    getKontaktpersonTelefon() {
        return this.KontaktpersonTelefon;
    }
    getKontaktpersonEmail() {
        return this.KontaktpersonEmail;
    }
    getLogo() {
        return this.logo;
    }
    getAusbilungPlz() {
        return this.ausbildungPlz;
    }
    getAusbildungsOrt() {
        return this.ausbildungOrt;
    }
    getAusbildungStrasse() {
        return this.ausbildungStrasse;
    }
    getAusbildungLaengengrad() {
        return this.ausbildungLaengengrad;
    }
    getAusbildungBreitengrad() {
        return this.ausbildungBreitengrad;
    }
}
//# sourceMappingURL=AngebotObjekt.js.map