export class sAngebotResponse {
    AngebotListe;
    maxErgebnisse;
    constructor(Liste, maxErgebnisse) {
        this.AngebotListe = Liste;
        this.maxErgebnisse = maxErgebnisse;
    }
    getAngebotliste() {
        return this.AngebotListe;
    }
    getMaxErgebnisse() {
        return this.maxErgebnisse;
    }
}
//# sourceMappingURL=sAngebotResponce.js.map