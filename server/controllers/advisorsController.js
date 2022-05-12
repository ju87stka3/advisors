const data=require("../data") 
const advisorsService=require("../service/advisors") 
class AdvisorsController{
    async getUsers(req,res){
        let resData=data
        if(req.query?.language||req.query?.online){
           resData= advisorsService.filter(resData,req.query)
        }
        if(req.query?.sort){

           resData= advisorsService.sort(resData,req.query)
        }
        if(req.query?.page){

           resData= advisorsService.pagination(resData,req.query)
        }

         res.json(resData)
    }
}
module.exports=new AdvisorsController()