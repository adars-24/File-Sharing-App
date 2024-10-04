import mongoose from "mongoose";
import dotenv from 'dotenv';        

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;
console.log(USERNAME)
    const MONGO_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-pehelnk-shard-00-00.v66ig9p.mongodb.net:27017,ac-pehelnk-shard-00-01.v66ig9p.mongodb.net:27017,ac-pehelnk-shard-00-02.v66ig9p.mongodb.net:27017/?ssl=true&replicaSet=atlas-fi2561-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;