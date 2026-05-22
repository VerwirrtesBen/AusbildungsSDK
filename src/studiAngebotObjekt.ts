// Objekt, das ein Angebot darstellt
export class studiAngebotObjekt{
    // instanzierung von Variablen
    private logo:string;
    private studienbeginn:string;
    // fristen ergänzen
    private studientyp:string;
    private studienform:string;
    private hochschulart:string;
    private studienfaecher: string[];
    // Studienanbieter
    private name:string;
    private strasse:string; // mit hausnummer?
    private plz: string;
    private region: string;
    private ort:string;
    // kontakt
    //Veröffentlichungsinfos
    private leangengrad:number;
    private breitengrad:number;


    
    constructor(
    // argumente die weiterg gegeben werden sollen
    logo:string,
    studienbeginn:string,
    // fristen ergänzen
    studientyp:string,
    studienform:string,
    hochschulart:string,
    studienfaecher: string[],
    // Studienanbieter
    name:string,
    strasse:string, // mit hausnummer?
    plz: string,
    region: string,
    ort:string,
    //Veröffentlichungsinfos
    laengengrad: number,
    breitengrad: number,
    ){
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
    this.leangengrad=laengengrad;
    this.breitengrad = breitengrad;
    }

    // Get-Methoden
    public getLogo(): string {
        return this.logo;
    }
    public getStudienbeginn(): string {
        return this.studienbeginn;
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

    public getStudienfach(): string[] {
        return this.studienfaecher;
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
    public getRegion():string{
        return this.region
    }
    public getOrt(): string {
        return this.ort;
    }

    public getLaengengrad(): number {
        return this.leangengrad;
    }
    public getBreitengrad():number{
        return this.breitengrad;
    }
}