import { AngebotObjekt } from "./AngebotObjekt.js";
export declare class AngebotResponse {
    protected AngebotListe: AngebotObjekt[];
    protected PageInfo: any;
    protected Status: any;
    constructor(Liste: AngebotObjekt[], PageInfo: any, Status: any);
    getAngebotliste(): AngebotObjekt[];
    getPage(): any;
    getStatus(): any;
}
