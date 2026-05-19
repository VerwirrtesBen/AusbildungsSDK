import axios from "axios";

export class ClientService{
    // Locale Varivalen
    Link: string ="https://rest.arbeitsagentur.de/infosysbub/absuche/pc/v1/ausbildungsangebot";
    X_API_Key = "infosysbub-absuche"
    // Haupt Methode
    async fetchData(// parameter 
      re?:string,// string
      page?: number,
      sty?: number,
      ids?:number,
      orte?:number,
      size?:number,
      uk?:number,
      bart?:number, 
      ityp?:number,
      bt?:number,
      ban?:number,
      bg?: boolean
    ): Promise<object>{
    const response = await axios.get(
    this.Link,{
    headers:{
        //Accept: "application/json",
        "X-API-Key": this.X_API_Key
    },
    params: {
      re:re,// string
      page:page, // intager
      sty:sty, // intager
      ids:ids, // intager
      orte:orte, // intager
      
      size:size, // intager
      uk:uk, // string
      
      bart:bart,// int 
      ityp:ityp,// int 
      bt:bt,// int
      ban:ban,// int
      bg: bg // bool
    }

  }
);

return response;
}

}
