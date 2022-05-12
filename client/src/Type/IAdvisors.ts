export type IAdvisor={
    
        id: string,
        name: string,
        surname: string,
        reviews: string,
        language: string,
        online:boolean
    
}
export type IParamRequest={
        language?: "english"|"russian"|"german",
        online?:boolean,
        sort?:"asc"|"desc",
        page?:number,
        pagesize?:number


    
}