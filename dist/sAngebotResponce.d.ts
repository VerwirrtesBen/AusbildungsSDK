import { sAngebotObjekt } from "./sAngebotObjekt.js";
export declare class sAngebotResponse {
    protected AngebotListe: sAngebotObjekt[];
    protected maxErgebnisse: number;
    constructor(Liste: sAngebotObjekt[], maxErgebnisse: number);
    getAngebotliste(): sAngebotObjekt[];
    getMaxErgebnisse(): number;
}
