import mongoose from "mongoose";
const MONGO_URL = ' mongodb://127.0.0.1:27017/diary'


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}`, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log(`MongoDB connected! DB HOST: ${MONGO_URL}`);
    } catch (error) {
        console.error("MONGODB connection FAILED: ", error);
        throw new Error("Failed to connect to MongoDB");
    }
};

export { connectDB };
