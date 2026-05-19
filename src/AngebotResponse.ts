import {AngebotObjekt} from "./AngebotObjekt.js"

export class AngebotResponse{
    protected AngebotListe: AngebotObjekt[];
    protected PageInfo:any;
    protected Status:any;

    constructor(Liste:AngebotObjekt[], PageInfo:any, Status:any){
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