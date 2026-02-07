import mongoose, { Schema } from "mongoose";


const leadSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["New","Contacted","Qualified","Lost"]
    },
    source:{
        type:String,
        default:"website"
    }
})


const Lead = mongoose.model("Lead",leadSchema);


export default Lead;