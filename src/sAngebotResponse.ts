import {sAngebotObjekt} from "./sAngebotObjekt.js"
export class sAngebotResponse{
    protected AngebotListe: sAngebotObjekt[];
    protected PageInfo:{size?:number, totalElements?:number, totalPages?:number, number?:number};
    protected status: number;

    constructor(Liste:sAngebotObjekt[],pageInfo:{size?:number, totalElements?:number, totalPages?:number, number?:number}, status:number){
        this.AngebotListe = Liste;
        this.PageInfo = pageInfo;
        this.status = status; 
    }
    getAngebotliste(){
        return this.AngebotListe;
    }
    getPage(){
        return this.PageInfo;
    }
    getStatus(){
        return this.status;
    }
    

}