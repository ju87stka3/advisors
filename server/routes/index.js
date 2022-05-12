const Router=require("express")
const router= new Router()
const advisorsRouter=require("./Advisors")
router.use("/advisors",advisorsRouter)
module.exports=router