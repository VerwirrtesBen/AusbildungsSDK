import axios from "axios";
export class sClientService {
    // Locale Varivalen
    Link = "https://rest.arbeitsagentur.de/infosysbub/studisu/pc/v1/studienangebote";
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
                sw: sw,
                sfa: sfa,
                sfe: sfe,
                orte: orte,
                pg: pg,
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