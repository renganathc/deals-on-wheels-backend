import mongoose from "mongoose";

export async function connectDB() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected MongoDB..." + connection.connection.host);
    }
    catch(e) {
        console.log("Error connecting : " + e);
        process.exit(1);
    }
}

