// Objekt, das ein Angebot darstellt
export class azubiAngebotObjekt{

    private id: string;
    private Ausbildungsinhalte: string;
    private Link: string;
    private Beginn: string;
    private Ende: string;
    private IndividuellerEinstieg: string;
    private Bildungsart: string;
    private Unterrichtsform: string;
    private Abschlussart: string;
    private Abschlussbezeichnung: string;
    private Zusatzqualifizierung: string;
    private PrüfendeStelle: string;
    private Schulart: string;
    private ZulassungZurFörderungPerBildungsgutschein: boolean;
    private Förderung: string;
    private BildunganbieterBezeichnung: string;
    private Plz: string;
    private Straße: string;
    private Ort: string;
    private Telefon: string | null;
    private mobilTelefon: string|null;
    private Internet: string;
    private E_mail: string;
    private Zugang: string;
    private Zielgruppe: string;
    private Teilnehmerzahl: string|null;
    private AuchGeeignetFuer: string[];
    //Ausbildungs ort infos
    private ausbildungPlz: string;
    private ausbildungStrasse: string;
    private ausbildungOrt: string;
    private ausbildungLaengengrad:string;
    private ausbildungBreitengrad: string;
    //
    private Dienstleistungen: string;
    private HinweiseZurAdresse: string;
    private logo: string|null;

    constructor(
        id: string,
        Ausbildungsinhalte: string,
        Link: string,
        Beginn: string,
        Ende: string,
        IndividuellerEinstieg: string,
        Bildungsart: string,
        Unterrichtsform: string,
        Abschlussart: string,
        Abschlussbezeichnung: string,
        Zusatzqualifizierung: string,
        PrüfendeStelle: string,
        Schulart: string,
        ZulassungZurFörderungPerBildungsgutschein: boolean,
        Förderung: string,
        BildunganbieterBezeichnung: string,
        Plz: string,
        Straße: string,
        Ort: string,
        Telefon: string | null,
        mobilTelefon: string|null,
        Internet: string,
        E_mail: string,
        Zugang: string,
        Zielgruppe: string,
        Teilnehmerzahl: string|null,
        AuchGeeignetFuer: string[],
        ausbildungPlz: string,
        ausbildungStrasse: string,
        ausbildungOrt: string,
        ausbildungLaengengrad:string,
        ausbildungBreitengrad: string,
        Dienstleistungen: string,
        HinweiseZurAdresse: string,
        logo: string|null
    ){
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
        this.Plz=Plz;
        this.Telefon = Telefon;
        this.mobilTelefon = mobilTelefon;
        this.Internet = Internet;
        this.E_mail = E_mail;
        this.Zugang = Zugang;
        this.Zielgruppe = Zielgruppe;
        this.Teilnehmerzahl = Teilnehmerzahl;
        this.AuchGeeignetFuer = AuchGeeignetFuer;
        this.ausbildungPlz = ausbildungPlz;
        this.ausbildungStrasse  = ausbildungStrasse;
        this.ausbildungOrt = ausbildungOrt;
        this.ausbildungLaengengrad = ausbildungLaengengrad
        this.ausbildungBreitengrad = ausbildungBreitengrad
        this.Dienstleistungen = Dienstleistungen;
        this.HinweiseZurAdresse = HinweiseZurAdresse;
        this.logo = logo;
    }

    // Get-Methoden
    public getId(): string {
        return this.id;
    }

    public getAusbildungsinhalte(): string {
        return this.Ausbildungsinhalte;
    }

    public getLink(): string {
        return this.Link;
    }

    public getBeginn(): string {
        return this.Beginn;
    }

    public getEnde(): string {
        return this.Ende;
    }

    public getIndividuellerEinstieg(): string {
        return this.IndividuellerEinstieg;
    }

    public getBildungsart(): string {
        return this.Bildungsart;
    }

    public getUnterrichtsform(): string {
        return this.Unterrichtsform;
    }

    public getAbschlussart(): string {
        return this.Abschlussart;
    }

    public getAbschlussbezeichnung(): string {
        return this.Abschlussbezeichnung;
    }

    public getZusatzqualifizierung(): string {
        return this.Zusatzqualifizierung;
    }

    public getPrüfendeStelle(): string {
        return this.PrüfendeStelle;
    }

    public getSchulart(): string {
        return this.Schulart;
    }

    public getZulassungZurFörderungPerBildungsgutschein(): boolean {
        return this.ZulassungZurFörderungPerBildungsgutschein;
    }

    public getFörderung(): string {
        return this.Förderung;
    }
    public getBildunganbieterBezeichnung(): string {
        return this.BildunganbieterBezeichnung;
    }

    public getPlz(): string {
        return this.Plz;
    }

    public getStraße(): string {
        return this.Straße;
    }

    public getOrt(): string {
        return this.Ort;
    }

    public getTelefon(): string | null {
        return this.Telefon;
    }

    public getMobilTelefon():string|null{
        return this.mobilTelefon;
    }

    public getInternet(): string {
        return this.Internet;
    }

    public getE_mail(): string {
        return this.E_mail;
    }

    public getZugang(): string {
        return this.Zugang;
    }

    public getZielgruppe(): string {
        return this.Zielgruppe;
    }

    public getTeilnehmerzahl(): string|null {
        return this.Teilnehmerzahl;
    }

    public getAuchGeeignetFuer(): string[] {
        return this.AuchGeeignetFuer;
    }

    //

    public getDienstleistungen(): string {
        return this.Dienstleistungen;
    }

    public getHinweiseZurAdresse(): string {
        return this.HinweiseZurAdresse;
    }

    public getLogo(): string|null{
        return this.logo;
    }

    public getAusbilungPlz(){
        return this.ausbildungPlz;
    }

    public getAusbildungsOrt(){
        return this.ausbildungOrt;
    }
    public getAusbildungStrasse(){
        return this.ausbildungStrasse
    }
    public getAusbildungLaengengrad(){
        return this.ausbildungLaengengrad;
    }
    public getAusbildungBreitengrad(){
        return this.ausbildungBreitengrad;
    }

}