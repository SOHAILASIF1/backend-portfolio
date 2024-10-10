import Express, { urlencoded } from "express";
import path from 'path';
import cors from "cors";
import DBConnection from "./db/dbConnection.js";
import getDataRoutes from "./routes/getDataRoutes.js";
import contactRoute from "./routes/coontact.route.js"; // fixed the typo in filename
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = Express();
const PORT = process.env.PORT || 7000;

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
DBConnection();
app.use(urlencoded({ extended: true }));
app.use(Express.json());

// Serve static files from the "dist" folder
app.use(Express.static(path.join(__dirname, "frontend/dist")));

app.use('/api', getDataRoutes);
app.use('/api/contact', contactRoute);

// Fallback route for SPA
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend/dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
