const Router=require("express")
const router= new Router()
const advisorsController=require("../controllers/advisorsController")
router.get("/",advisorsController.getUsers)
module.exports=router