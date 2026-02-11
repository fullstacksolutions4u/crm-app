import { ResponseLeadDTO } from "../dtos/leadDTO.js";
import leadRepository from "../repositories/leadRepository.js";

class LeadService {
  async createLead(leadData) {
    const lead = await leadRepository.createLead(leadData);

    return ResponseLeadDTO(lead);
  }

  async getAllLead() {

       const leads =  await leadRepository.getLead()

       return leads.map(lead=>ResponseLeadDTO(lead))
         

  }

  async generateAnalysis (){
    let count = 0;

    for(let i=0;i<50000000000;i++){
      count +=i;
    }

    return count
  }

}

export default new LeadService();
