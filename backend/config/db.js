import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manumallu81:2024Mallu@cluster0.i7leh.mongodb.net/food-delivery-app').then(()=>console.log("DB Connected"));
}