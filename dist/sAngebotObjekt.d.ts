export declare class sAngebotObjekt {
    private logo;
    private studienbeginn;
    private studientyp;
    private studienform;
    private hochschulart;
    private studienfaecher;
    private name;
    private strasse;
    private plz;
    private region;
    private ort;
    private leangengrad;
    private breitengrad;
    constructor(logo: string, studienbeginn: string, studientyp: string, studienform: string, hochschulart: string, studienfaecher: string[], name: string, strasse: string, // mit hausnummer?
    plz: string, region: string, ort: string, laengengrad: number, breitengrad: number);
    getLogo(): string;
    getStudienbeginn(): string;
    getStudientyp(): string;
    getStudienform(): string;
    getHochschulart(): string;
    getStudienfach(): string[];
    getName(): string;
    getStrasse(): string;
    getPlz(): string;
    getRegion(): string;
    getOrt(): string;
    getLaengengrad(): number;
    getBreitengrad(): number;
}
