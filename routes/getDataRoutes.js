import  Express from "express";
import {Project,Tool,Skill} from "../models/dataModel.js";
const router=Express.Router()
router.get('/getData',async(req,res)=>{
    try {
        const projects=await Project.find()
        const tools=await Tool.find()
        const skills=await Skill.find()

        res.status(200).send({
            
            projects:projects,
            tools:tools[0],
            skills:skills[0]




        })
        console.log(skills);
    } catch (error) {
        res.status(500).send(error)

        
    }

})
router.post("/addProject",async(req,res)=>{
    try {
        const {img,disc,tittle,github}=req.body
        const addData =new Project({
            img:img,
            tittle:tittle,
            github:github,
            disc:disc

        })
        await addData.save()
        return res.status(200).json({
            succsecc:true
        })

    } catch (error) {
        res.status(500).send(error)
        
    }

})
router.delete("/deletePost/:id",async(req,res)=>{
   try {
     await Project.findByIdAndDelete(req.params.id);
     return res.status(205).json({
         sucsess:true,
         message:"Post deleted"
     })
   } catch (error) {
    res.status(500).send(error.message)
    
   }
})
export default router