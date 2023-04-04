import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";
import { productRouter } from "./routes/product.route";

const app = express();

app
  .use(cors())
  .use(json())
  .get("/api/status", (req, res) => res.send("Oh. hey there, I'm OK!"))
  .use("/api/product", productRouter);

const port = process.env.PORT;
app.listen(port, () =>
  console.log(chalk.bold.blue(`Server running in port: ${port}`))
);
