export class AngebotResponse {
    AngebotListe;
    PageInfo;
    Status;
    constructor(Liste, PageInfo, Status) {
        this.AngebotListe = Liste;
        this.PageInfo = PageInfo;
        this.Status = Status;
    }
    getAngebotliste() {
        return this.AngebotListe;
    }
    getPage() {
        return this.PageInfo;
    }
    getStatus() {
        return this.Status;
    }
}
//# sourceMappingURL=AngebotResponse.js.map