class Advisors{
    filter(data,query){
        let res=data||[]
        if(query?.language){
        res= res?.filter(item=>item?.language===query?.language)

        }
         if(query?.online){
        res= res?.filter(item=>item?.online?.toString()===query?.online)

        }
        return res

    }
    sort(data,query){
        let res=[...data]||[]
        if(query?.sort==='desc'){
        res= res?.sort((a,b)=>b.reviews-a.reviews)

        }
         if(query?.sort==='asc'){
        res= res?.sort((a,b)=>a?.reviews-b?.reviews)

        }
        return res
    }
    pagination(data,query){
    let res=data||[]
    let pageSize=query?.pagesize||5
    let page=query?.page||1
        
        res= res?.slice((page-1)*pageSize,(page-1)*pageSize+pageSize)

        
        
        return res
    }


}
module.exports=new Advisors()