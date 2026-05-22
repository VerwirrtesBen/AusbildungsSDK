import {studiAngebotObjekt} from "./studiAngebotObjekt.js"
export class sAngebotResponse{
    protected AngebotListe: studiAngebotObjekt[];
    protected PageInfo:{size?:number, totalElements?:number, totalPages?:number, number?:number};
    protected status: number;

    constructor(Liste:studiAngebotObjekt[],pageInfo:{size?:number, totalElements?:number, totalPages?:number, number?:number}, status:number){
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