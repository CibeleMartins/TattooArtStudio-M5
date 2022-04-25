import express from 'express';
import db from './src/config/dbConfig.js';
import routes from './src/routes/roots.js';
import cors from 'cors';


const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`))

db.on("error", () => console.log("Connection error"))
db.once("open", () => console.log("successfully connected to database"))

app.use(cors())

routes(app)

export default app;