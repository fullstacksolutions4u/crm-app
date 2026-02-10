

export const CreateLeadDTO = (lead)=>{

    return {
        name:lead.name,
        email:lead.email,
        status:lead.status,
        source:lead.source
    }

}


export const ResponseLeadDTO = (lead)=>{
    return {

        id:lead._id,
        name:lead.name,
        email:lead.email
    }
}

