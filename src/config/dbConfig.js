import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;


mongoose.connect(`mongodb+srv://${user}:${password}@${database}.omuul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

let db = mongoose.connection;

export default db;