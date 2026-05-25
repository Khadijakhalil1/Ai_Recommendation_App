import mongoose from "mongoose";

export const connectDB = async () => {
        await mongoose.connect('mongodb+srv://khadija207:207@cluster0.jp42rdu.mongodb.net/Ai-recomendation-food-ordering-app').then(() =>console.log("DB Connected") );
}