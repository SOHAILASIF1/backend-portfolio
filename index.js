import Express, { urlencoded } from "express";
import path from 'path';
import cors from "cors";
import DBConnection from "./db/dbConnection.js";
import router from "./routes/getDataRoutes.js";
import contactRoute from "./routes/coontact.route.js";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = Express();

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
DBConnection();
app.use(urlencoded({ extended: true }));
app.use(Express.json());

app.use('/api', router);
app.use('/api/contact', contactRoute);

// Serve static files from the "dist" folder
console.log(path.resolve(__dirname, "../frontend/dist"));  // This should log the correct path

app.use(Express.static(path.resolve(__dirname, "./frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./frontend/dist", "index.html"));
});


app.listen(7000, () => {
    console.log("App is running on port 7000");
});
