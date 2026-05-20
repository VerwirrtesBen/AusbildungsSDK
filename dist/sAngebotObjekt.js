// Objekt, das ein Angebot darstellt
export class AngebotObjekt {
    // instanzierung von Variablen
    logo;
    beginn;
    ende;
    studienbeginn;
    spaeterer;
    // fristen ergänzen
    vorlesungen;
    studientyp;
    studienform;
    schulart;
    abschlussgradIntern;
    lehramtsbefaehigung;
    unterrichtssprache;
    internationalerDoppelabschluss;
    studienfach;
    zulassungsmodus;
    // Studienanbieter
    name;
    strasse; // mit hausnummer?
    plz;
    ort;
    // kontakt
    telefon;
    internet;
    email;
    //Veröffentlichungsinfos
    veranstaltungsID;
    aktualisierungsdatum;
    studierenOhneABi;
    Koordinaten; // aussplitten in laengen und breitengrad
    constructor(
    // argumente die weiterg gegeben werden sollen
    logo, beginn, ende, studienbeginn, spaeterer, 
    // fristen ergänzen
    vorlesungen, studientyp, studienform, schulart, abschlussgradIntern, lehramtsbefaehigung, unterrichtssprache, internationalerDoppelabschluss, studienfach, zulassungsmodus, 
    // Studienanbieter
    name, strasse, // mit hausnummer?
    plz, ort, 
    // kontakt
    telefon, internet, email, 
    //Veröffentlichungsinfos
    veranstaltungsID, aktualisierungsdatum, studierenOhneABi, Koordinaten) {
        // this.irgenwas = irgendwas
        this.logo = logo;
        this.beginn = beginn;
        this.ende = ende;
        this.studienbeginn = studienbeginn;
        this.spaeterer = spaeterer;
        this.vorlesungen = vorlesungen;
        this.studientyp = studientyp;
        this.studienform = studienform;
        this.schulart = schulart;
        this.abschlussgradIntern = abschlussgradIntern;
        this.lehramtsbefaehigung = lehramtsbefaehigung;
        this.unterrichtssprache = unterrichtssprache;
        this.internationalerDoppelabschluss = internationalerDoppelabschluss;
        this.studienfach = studienfach;
        this.zulassungsmodus = zulassungsmodus;
        this.name = name;
        this.strasse = strasse;
        this.plz = plz;
        this.ort = ort;
        this.telefon = telefon;
        this.internet = internet;
        this.email = email;
        this.veranstaltungsID = veranstaltungsID;
        this.aktualisierungsdatum = aktualisierungsdatum;
        this.studierenOhneABi = studierenOhneABi;
        this.Koordinaten = Koordinaten;
    }
}
//# sourceMappingURL=sAngebotObjekt.js.map