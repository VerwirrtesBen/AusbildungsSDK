export class sAngebotResponse {
    AngebotListe;
    PageInfo;
    status;
    constructor(Liste, pageInfo, status) {
        this.AngebotListe = Liste;
        this.PageInfo = pageInfo;
        this.status = status;
    }
    getAngebotliste() {
        return this.AngebotListe;
    }
    getPage() {
        return this.PageInfo;
    }
    getStatus() {
        return this.status;
    }
}
//# sourceMappingURL=sAngebotResponse.js.map