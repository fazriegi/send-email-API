import express from "express";
import { APP_PORT } from "./libs/utils";
import router from "./routes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(router);

app.listen(APP_PORT, () => {
  console.log(`server running on port ${APP_PORT}`);
});
