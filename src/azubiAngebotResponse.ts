import {azubiAngebotObjekt} from "./azubiAngebotObjekt.js"
export class azubiAngebotResponse{
    protected AngebotListe: azubiAngebotObjekt[];
    protected PageInfo:any;
    protected Status:any;

    constructor(Liste:azubiAngebotObjekt[], PageInfo:any, Status:any){
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