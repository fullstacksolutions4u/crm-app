import Lead from "../models/Lead.js"



class LeadRepository {

    async createLead(leadData){

        return await Lead.create(leadData)

    }

    async getLead(){
        return await Lead.find()
    }

}



export default new LeadRepository()