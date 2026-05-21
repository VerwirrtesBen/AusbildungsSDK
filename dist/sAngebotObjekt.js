// Objekt, das ein Angebot darstellt
export class sAngebotObjekt {
    // instanzierung von Variablen
    logo;
    studienbeginn;
    // fristen ergänzen
    studientyp;
    studienform;
    hochschulart;
    studienfaecher;
    // Studienanbieter
    name;
    strasse; // mit hausnummer?
    plz;
    region;
    ort;
    // kontakt
    //Veröffentlichungsinfos
    leangengrad;
    breitengrad;
    constructor(
    // argumente die weiterg gegeben werden sollen
    logo, studienbeginn, 
    // fristen ergänzen
    studientyp, studienform, hochschulart, studienfaecher, 
    // Studienanbieter
    name, strasse, // mit hausnummer?
    plz, region, ort, 
    //Veröffentlichungsinfos
    laengengrad, breitengrad) {
        // this.irgenwas = irgendwas
        this.logo = logo;
        this.studienbeginn = studienbeginn;
        this.studientyp = studientyp;
        this.studienform = studienform;
        this.hochschulart = hochschulart;
        this.studienfaecher = studienfaecher;
        this.name = name;
        this.strasse = strasse;
        this.plz = plz;
        this.region = region;
        this.ort = ort;
        this.leangengrad = laengengrad;
        this.breitengrad = breitengrad;
    }
    // Get-Methoden
    getLogo() {
        return this.logo;
    }
    getStudienbeginn() {
        return this.studienbeginn;
    }
    getStudientyp() {
        return this.studientyp;
    }
    getStudienform() {
        return this.studienform;
    }
    getHochschulart() {
        return this.hochschulart;
    }
    getStudienfach() {
        return this.studienfaecher;
    }
    getName() {
        return this.name;
    }
    getStrasse() {
        return this.strasse;
    }
    getPlz() {
        return this.plz;
    }
    getRegion() {
        return this.region;
    }
    getOrt() {
        return this.ort;
    }
    getLaengengrad() {
        return this.leangengrad;
    }
    getBreitengrad() {
        return this.breitengrad;
    }
}
//# sourceMappingURL=sAngebotObjekt.js.map