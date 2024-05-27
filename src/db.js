import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://mongoadmin:secret@143.47.35.202')
        console.log("DB is connected")
    } catch (error) {
        console.log(error);
    };
}