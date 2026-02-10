import { CreateLeadDTO } from "../dtos/leadDTO.js";
import Lead from "../models/Lead.js";
import leadService from "../services/leadService.js";

export const createLead = async (req, res) => {
  try {
    const leadData = CreateLeadDTO(req.body);

    const lead = await leadService.createLead(leadData);

    res.status(201).json(lead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await leadService.getAllLead()

    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
