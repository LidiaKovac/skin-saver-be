import { MongoServerClosedError } from "mongodb"
import mongoose from "mongoose"

const questionSchema = new mongoose.Schema<Question>({
   question: {
    type: String,
    required: true
   }, 
   multiple_choice: {
    type: Boolean,
    required: true,
    default: false
   },
   open_question: {
    type: Boolean,
    required: true,
    default: false
   },
   possibilities: {
    type: [String], 
    required: true, 
    default: ["yes", "no"]
    
   }

}, { collection: "question" })

export default mongoose.model<Question>("Question", questionSchema) as mongoose.Model<Question>