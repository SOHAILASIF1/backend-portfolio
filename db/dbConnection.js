import mongoose from 'mongoose'
const DBConnection= async ()=>{
    const MONGODB_URI='mongodb+srv://sohailasuf123:Sohail@cluster0.joj5j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0+srv://SohailAsif1:SohailAsif1@cluster0.7mm9cgw.mongodb.net/'
    try {
        await mongoose.connect(MONGODB_URI,{ useNewUrlParser:true})
        console.log("db connect");

        
    } catch (error) {
        console.log(error.message);
        
    }

}
export default DBConnection