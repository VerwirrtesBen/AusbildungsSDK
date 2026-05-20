import {AngebotObjekt} from "./AngebotObjekt.js"
import {sAngebotObjekt} from "./sAngebotObjekt.js"
export class AngebotResponse{
    protected AngebotListe: AngebotObjekt[]|sAngebotObjekt[];
    protected PageInfo:any;
    protected Status:any;

    constructor(Liste:AngebotObjekt[]|sAngebotObjekt[], PageInfo:any, Status:any){
        this.AngebotListe = Liste;
        this.PageInfo = PageInfo;
        this.Status = Status;
    }
    getAngebotliste(){
        return this.AngebotListe;
    }
    getPage(){
        return this.PageInfo;
    }
    getStatus(){
        return this.Status;
    }

}