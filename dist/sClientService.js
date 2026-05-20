import axios from "axios";
export class sClientService {
    // Locale Varivalen
    Link = "https://rest.arbeitsagentur.de/infosysbub/absuche/pc/v1/ausbildungsangebot";
    X_API_Key = "infosysbub-studisu";
    // Haupt Methode
    async fetchData(// parameter 
    sw, sfa, sfe, orte, pg, uk, re, sfo, st, smo, abg, hsa, san, ffst) {
        const response = await axios.get(this.Link, {
            headers: {
                //Accept: "application/json",
                "X-API-Key": this.X_API_Key
            },
            params: {
                sw: "IT-Security-Manager",
                sfa: sfa,
                sfe: sfe,
                orte: orte,
                pg: 1,
                uk: uk,
                re: re,
                sfo: sfo,
                st: st,
                smo: smo,
                abg: abg,
                hsa: hsa,
                san: san,
                ffst: ffst
            }
        });
        return response;
    }
}
//# sourceMappingURL=sClientService.js.map