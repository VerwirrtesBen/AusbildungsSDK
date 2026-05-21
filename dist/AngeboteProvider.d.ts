import { ClientService } from "./ClientService.js";
import { sClientService } from "./sClientService.js";
import { AngebotResponse } from "./AngebotResponse.js";
import { sAngebotResponse } from "./sAngebotResponse.js";
export declare class AngeboteProvider {
    protected api: ClientService;
    protected sapi: sClientService;
    constructor();
    getsAngebote({ sw, sfa, sfe, orte, pg, uk, re, sfo, st, smo, abg, hsa, san, ffst }?: {
        sw?: string;
        sfa?: number;
        sfe?: string;
        orte?: string;
        pg?: number;
        uk?: string;
        re?: string;
        sfo?: number;
        st?: number;
        smo?: number;
        abg?: number;
        hsa?: number;
        san?: number;
        ffst?: number;
    }): Promise<sAngebotResponse>;
    getAngebote({ re, page, sty, ids, orte, size, uk, bart, ityp, bt, ban, bg }?: {
        re?: string;
        page?: number;
        sty?: number;
        ids?: number;
        orte?: number;
        size?: number;
        uk?: number;
        bart?: number;
        ityp?: number;
        bt?: number;
        ban?: number;
        bg?: boolean;
    }): Promise<AngebotResponse>;
}
