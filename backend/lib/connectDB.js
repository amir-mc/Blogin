import mongoose from "mongoose"

const connectDB= async ()=>{

    try {
        await mongoose.connect(process.env.MANGO)
        console.log('salam')
    } catch (error) {
        console.log(error)
    }
}
export default connectDB