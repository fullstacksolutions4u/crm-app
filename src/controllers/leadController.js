import Lead from "../models/Lead.js";




export const createLead = async (req,res)=>{

    try {

        const {name,email,status,source} = req.body;

        const lead = await Lead.create({name,email,status,source});


        res.status(201).json(lead)


        
    } catch (error) {

        res.status(400).json({message:error.message})
        
    }

}


export const getLeads = async (req,res)=>{
    try {

        const leads = await Lead.find();

        res.status(200).json(leads)
        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
}


