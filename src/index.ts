import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";

const app = express();

app
  .use(cors())
  .use(json())
  .get("/status", (req, res) => res.send("Oh. hey there, I'm OK!"));

const port = process.env.PORT || 5001;
app.listen(port, () =>
  console.log(chalk.bold.blue(`Server running in port: ${port}`))
);
