import { Express } from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials:true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: tru, limit:"16kb"}))
app.use(cookieParser());
app.use(express.static("public"))
export { app }