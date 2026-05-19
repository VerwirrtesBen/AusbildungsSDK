import { ClientService } from "./ClientService.js";
import { AngebotResponse } from "./AngebotResponse.js";
export declare class AngeboteProvider {
    protected api: ClientService;
    constructor();
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
