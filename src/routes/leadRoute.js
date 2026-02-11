import express from "express"
import { createLead, getAnalysis, getLeads} from "../controllers/leadController.js"



const leadRouter = express.Router()



leadRouter.post("/create-lead",createLead)

leadRouter.get("/get-leads",getLeads)

leadRouter.get("/analysis",getAnalysis);


export default leadRouter

