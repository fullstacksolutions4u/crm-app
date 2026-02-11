import { once } from "events";
import { ResponseLeadDTO } from "../dtos/leadDTO.js";
import leadRepository from "../repositories/leadRepository.js";
import path from "path";
import { fileURLToPath } from "url";
import {Worker} from "worker_threads"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class LeadService {
  async createLead(leadData) {
    const lead = await leadRepository.createLead(leadData);

    return ResponseLeadDTO(lead);
  }

  async getAllLead() {
    const leads = await leadRepository.getLead();

    return leads.map((lead) => ResponseLeadDTO(lead));
  }

  async generateAnalysis() {
    const workerPath = path.resolve(__dirname, "../utils/analyticsworker.js");

    const worker = new Worker(workerPath);

    try {
      const data = await once(worker, "message");

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new LeadService();
