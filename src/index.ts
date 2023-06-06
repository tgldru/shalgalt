import express from "express";
import config from "./config";
import router from "./router";
import path from "path";

const app = express();

app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);
app.use(express.json());

app.use(router);

async function startServer() {
  app.listen(config.port);
  console.log(
    `⚡️[server]: Server is running at http://localhost:${config.port}`
  );
}

startServer();

export default app;
