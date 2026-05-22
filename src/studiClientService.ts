import axios from "axios";

export class studiClientService{
    // Locale Varivalen
    Link: string ="https://rest.arbeitsagentur.de/infosysbub/studisu/pc/v1/studienangebote";
    X_API_Key = "infosysbub-studisu"
    // Haupt Methode
    async fetchData(// parameter 
        sw?:string,
        sfa?:number,
        sfe?:string,
        orte?:string,
        pg?:number,
        uk?: string,
        re?: string,
        sfo?: number,
        st?: number,
        smo?: number,
        abg?: number,
        hsa?: number,
        san?: number,
        ffst?: number
    ): Promise<object>{
    const response = await axios.get(
    this.Link,{
    headers:{
        //Accept: "application/json",
        "X-API-Key": this.X_API_Key
    },
    
    params: {
        sw:sw,
        sfa:sfa,
        sfe:sfe,
        orte:orte,
        pg:pg,
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

  }
);

return response;
}

}
