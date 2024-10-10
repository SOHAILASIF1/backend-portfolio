import mongoose from "mongoose";
const projectSchema=new mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    tittle:{
        type:String,
        required:true
    },
    disc:{
        type:String,
        required:true
    },
    github:{
        type:String
    }
})
const skillSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:true
    }
    
})
const toolSchema=new mongoose.Schema({
    tools:{
        type:String,
        required:true
    },
    
    
})

export const Project = mongoose.model('projects', projectSchema);
 export const Skill=mongoose.model('skills',skillSchema)
 export const Tool=mongoose.model('tools',toolSchema)


 