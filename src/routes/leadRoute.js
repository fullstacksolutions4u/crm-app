import express from "express"
import { createLead, getLeads} from "../controllers/leadController.js"



const leadRouter = express.Router()



leadRouter.post("/create-lead",createLead)

leadRouter.get("/get-leads",getLeads)


export default leadRouter

