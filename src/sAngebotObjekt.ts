// Objekt, das ein Angebot darstellt
export class sAngebotObjekt{
    // instanzierung von Variablen
    private logo:string;
    private beginn:string;
    private ende:string;
    private studienbeginn:string;
    private spaeterer:number;
    // fristen ergänzen
    private vorlesungen: string;
    private studientyp:string;
    private studienform:string;
    private hochschulart:string;
    private abschlussgradIntern: string;
    private lehramtsbefaehigung: string;
    private unterrichtssprache: string;
    private internationalerDoppelabschluss: string;
    private studienfaecher: string[];
    private zulassungsmodus: string;
    // Studienanbieter
    private name:string;
    private strasse:string; // mit hausnummer?
    private plz: string;
    private ort:string;
    // kontakt
    private telefon:string;
    private internet:string;
    private email:string;
    //Veröffentlichungsinfos
    private veranstaltungsID:string;
    private aktualisierungsdatum:string;
    private studierenOhneABi: string;
    private Koordinaten:number; // aussplitten in laengen und breitengrad



    
    constructor(
    // argumente die weiterg gegeben werden sollen
    logo:string,
    beginn:string,
    ende:string,
    studienbeginn:string,
    spaeterer:number,
    // fristen ergänzen
    vorlesungen: string,
    studientyp:string,
    studienform:string,
    hochschulart:string,
    abschlussgradIntern: string,
    lehramtsbefaehigung: string,
    unterrichtssprache: string,
    internationalerDoppelabschluss: string,
    studienfaecher: string[],
    zulassungsmodus: string,
    // Studienanbieter
    name:string,
    strasse:string, // mit hausnummer?
    plz: string,
    ort:string,
    // kontakt
    telefon:string,
    internet:string,
    email:string,
    //Veröffentlichungsinfos
    veranstaltungsID:string,
    aktualisierungsdatum:string,
    studierenOhneABi: string,
    Koordinaten:number, // 
    ){
       // this.irgenwas = irgendwas
    this.logo = logo;
    this.beginn = beginn;
    this.ende = ende;
    this.studienbeginn = studienbeginn;
    this.spaeterer = spaeterer;
    this.vorlesungen = vorlesungen;
    this.studientyp = studientyp;
    this.studienform = studienform;
    this.hochschulart = hochschulart;
    this.abschlussgradIntern = abschlussgradIntern;
    this.lehramtsbefaehigung = lehramtsbefaehigung;
    this.unterrichtssprache = unterrichtssprache;
    this.internationalerDoppelabschluss = internationalerDoppelabschluss;
    this.studienfaecher = studienfaecher;
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

    // Get-Methoden
    public getLogo(): string {
        return this.logo;
    }

    public getBeginn(): string {
        return this.beginn;
    }

    public getEnde(): string {
        return this.ende;
    }

    public getStudienbeginn(): string {
        return this.studienbeginn;
    }

    public getSpaeterer(): number {
        return this.spaeterer;
    }

    public getVorlesungen(): string {
        return this.vorlesungen;
    }

    public getStudientyp(): string {
        return this.studientyp;
    }

    public getStudienform(): string {
        return this.studienform;
    }

    public getHochschulart(): string {
        return this.hochschulart;
    }

    public getAbschlussgradIntern(): string {
        return this.abschlussgradIntern;
    }

    public getLehramtsbefaehigung(): string {
        return this.lehramtsbefaehigung;
    }

    public getUnterrichtssprache(): string {
        return this.unterrichtssprache;
    }

    public getInternationalerDoppelabschluss(): string {
        return this.internationalerDoppelabschluss;
    }

    public getStudienfach(): string[] {
        return this.studienfaecher;
    }

    public getZulassungsmodus(): string {
        return this.zulassungsmodus;
    }

    public getName(): string {
        return this.name;
    }

    public getStrasse(): string {
        return this.strasse;
    }

    public getPlz(): string {
        return this.plz;
    }

    public getOrt(): string {
        return this.ort;
    }

    public getTelefon(): string {
        return this.telefon;
    }

    public getInternet(): string {
        return this.internet;
    }

    public getEmail(): string {
        return this.email;
    }

    public getVeranstaltungsID(): string {
        return this.veranstaltungsID;
    }

    public getAktualisierungsdatum(): string {
        return this.aktualisierungsdatum;
    }

    public getStudierenOhneABi(): string {
        return this.studierenOhneABi;
    }

    public getKoordinaten(): number {
        return this.Koordinaten;
    }
}