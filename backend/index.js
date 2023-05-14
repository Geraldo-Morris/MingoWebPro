import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import GamesRoute from "./routes/GamesRoute.js";
import TrendingRoute from "./routes/TrendingRoute.js";
import NewReleasesRoute from "./routes/NewReleasesRoute.js";
import UpcomingRoute from "./routes/UpcomingRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(GamesRoute);
app.use(TrendingRoute);
app.use(NewReleasesRoute);
app.use(UpcomingRoute);

app.listen(5000, () => console.log("Server Up and Running..."));
