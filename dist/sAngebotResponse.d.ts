import { sAngebotObjekt } from "./sAngebotObjekt.js";
export declare class sAngebotResponse {
    protected AngebotListe: sAngebotObjekt[];
    protected PageInfo: {
        size?: number;
        totalElements?: number;
        totalPages?: number;
        number?: number;
    };
    protected status: number;
    constructor(Liste: sAngebotObjekt[], pageInfo: {
        size?: number;
        totalElements?: number;
        totalPages?: number;
        number?: number;
    }, status: number);
    getAngebotliste(): sAngebotObjekt[];
    getPage(): {
        size?: number;
        totalElements?: number;
        totalPages?: number;
        number?: number;
    };
    getStatus(): number;
}
