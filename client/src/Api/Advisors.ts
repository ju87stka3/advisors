import { HOST_NAME } from "../Constants/constants"
import { IAdvisor, IParamRequest } from "../Type/IAdvisors"


export const getAdvisors=async(params?:IParamRequest):Promise<IAdvisor[]>=>{
            console.log("param",params)

    let par=""
    if(!!params && !!Object?.entries(params)?.length){

    
    for(const key in params){
        par=par+"&"+key+"="+params[key as keyof IParamRequest ]
        // console.log("par",par)
    }
}
        console.log("par",params &&"?")

 const response=await fetch(`${HOST_NAME}/api/advisors/`+(params ?"?":"")+par)
 return await response?.json()
}


